(() => {
  const API_BASE = window.SHANNIAN_API_BASE || 'https://waffo-webhook.chenxi19930623.workers.dev';
  const SESSION_KEY = 'shannian.web.session.v1';
  const PENDING_PAYMENT_KEY = 'shannian.web.pending-payment.v1';
  const state = { user: null, activePlanId: null, codeTimers: new Map() };

  const getSession = () => {
    try { return JSON.parse(sessionStorage.getItem(SESSION_KEY) || 'null'); } catch { return null; }
  };
  const saveSession = (user) => {
    state.user = user;
    sessionStorage.setItem(SESSION_KEY, JSON.stringify(user));
    syncAccountUi();
  };
  const clearSession = () => {
    state.user = null;
    sessionStorage.removeItem(SESSION_KEY);
    syncAccountUi();
  };
  const api = async (path, options = {}) => {
    const headers = { 'Content-Type': 'application/json', ...(options.headers || {}) };
    const activeUser = state.user || getSession();
    if (options.auth !== false && activeUser?.sessionToken) headers.Authorization = `Bearer ${activeUser.sessionToken}`;
    const response = await fetch(`${API_BASE}${path}`, { ...options, headers });
    const payload = await response.json().catch(() => ({}));
    if (!response.ok || !payload.ok) throw new Error(payload.error || '请求失败，请稍后重试');
    return payload;
  };
  const toast = (message, type = '') => {
    const node = document.querySelector('.commerce-toast');
    if (!node) return;
    node.textContent = message;
    node.className = `commerce-toast ${type}`;
    node.hidden = false;
    window.clearTimeout(toast.timer);
    toast.timer = window.setTimeout(() => { node.hidden = true; }, 3400);
  };
  const openModal = (id) => { const node = document.getElementById(id); if (node) node.hidden = false; };
  const closeModal = (id) => { const node = document.getElementById(id); if (node) node.hidden = true; };
  const formatMembership = (user) => {
    if (!user?.isPro || !user.proType) return '免费用户';
    if (user.proType === 'lifetime' || user.proType === 'lifetime_early_bird') return '终身会员';
    const names = { monthly: '月度会员', quarterly: '季度会员', yearly: '年度会员' };
    const date = user.proExpireDate ? ` · 至 ${new Date(user.proExpireDate).toLocaleDateString('zh-CN')}` : '';
    return `${names[user.proType] || '会员'}${date}`;
  };
  const loginLabel = () => (window.i18n ? window.i18n.t('nav.login') : '登录 / 注册');
  const syncAccountUi = () => {
    const trigger = document.getElementById('account-trigger');
    const summary = document.getElementById('account-summary');
    const name = state.user?.nickname || state.user?.username || state.user?.mobilePhoneNumber || (window.i18n ? window.i18n.t('nav.brand') : '闪念用户');
    const avatarUrl = state.user?.avatarUrl || '';
    const defaultAvatar = (trigger?.dataset.defaultAvatar)
      || (document.querySelector('.brand-mark')?.getAttribute('src'))
      || 'assets/icons/Appicon.png';
    const setAvatar = (container, image, { allowHide = false } = {}) => {
      if (!container || !image) return;
      const hasPhoto = Boolean(avatarUrl);
      if (allowHide && !state.user) {
        container.hidden = true;
        return;
      }
      container.hidden = false;
      container.classList.toggle('is-photo', hasPhoto);
      image.src = hasPhoto ? avatarUrl : defaultAvatar;
      image.alt = hasPhoto ? `${name}的头像` : '闪念';
    };
    if (trigger) {
      trigger.querySelector('[data-account-label]').textContent = state.user ? name : loginLabel();
      setAvatar(trigger.querySelector('[data-account-avatar]'), trigger.querySelector('[data-account-avatar-image]'));
    }
    if (summary) {
      if (!state.user) return;
      summary.querySelector('[data-account-name]').textContent = name;
      summary.querySelector('[data-account-phone]').textContent = state.user.mobilePhoneNumber || state.user.username || '';
      const membership = summary.querySelector('[data-membership]');
      membership.textContent = formatMembership(state.user);
      membership.classList.toggle('free', !state.user.isPro);
      setAvatar(summary.querySelector('[data-profile-avatar]'), summary.querySelector('[data-profile-avatar-image]'));
    }
  };
  const refreshUser = async () => {
    const saved = getSession();
    if (!saved?.sessionToken || !saved?.objectId) return;
    state.user = saved;
    try {
      const { user } = await api(`/api/auth/me?objectId=${encodeURIComponent(saved.objectId)}`);
      saveSession({ ...saved, ...user, sessionToken: saved.sessionToken });
    } catch { clearSession(); }
  };
  const setAuthTab = (name) => {
    document.querySelectorAll('[data-auth-tab]').forEach((button) => button.classList.toggle('is-active', button.dataset.authTab === name));
    document.querySelectorAll('[data-auth-form]').forEach((form) => { form.hidden = form.dataset.authForm !== name; });
  };
  const requestSms = async (button) => {
    const form = button.closest('form');
    const phone = form?.querySelector('input[name="phone"]')?.value || '';
    button.disabled = true;
    try {
      await api('/api/auth/send-sms', { method: 'POST', body: JSON.stringify({ phone }), auth: false });
      toast('验证码已发送，请查收短信', 'success');
      let remaining = 60;
      button.textContent = `${remaining}s 后重发`;
      const timer = window.setInterval(() => {
        remaining -= 1;
        button.textContent = remaining > 0 ? `${remaining}s 后重发` : '发送验证码';
        if (remaining <= 0) { window.clearInterval(timer); button.disabled = false; }
      }, 1000);
    } catch (error) { toast(error.message, 'error'); button.disabled = false; }
  };
  const submitAuth = async (form) => {
    const values = Object.fromEntries(new FormData(form));
    const mode = form.dataset.authForm;
    const button = form.querySelector('button[type="submit"]');
    button.disabled = true;
    try {
      let response;
      if (mode === 'sms') response = await api('/api/auth/login-sms', { method: 'POST', body: JSON.stringify(values), auth: false });
      if (mode === 'password') response = await api('/api/auth/login-password', { method: 'POST', body: JSON.stringify(values), auth: false });
      if (mode === 'register') response = await api('/api/auth/register-password', { method: 'POST', body: JSON.stringify(values), auth: false });
      saveSession(response.user);
      closeModal('auth-modal');
      toast('登录成功，欢迎回来', 'success');
      if (state.activePlanId) { const planId = state.activePlanId; state.activePlanId = null; await startCheckout(planId); }
    } catch (error) { toast(error.message, 'error'); } finally { button.disabled = false; }
  };
  const startCheckout = async (planId) => {
    if (!state.user) { state.activePlanId = planId; openModal('auth-modal'); return; }
    const button = document.querySelector(`[data-plan-id="${planId}"]`);
    if (button) { button.disabled = true; button.textContent = '正在创建安全订单…'; }
    try {
      const { session } = await api('/api/checkout', { method: 'POST', body: JSON.stringify({ planId, objectId: state.user.objectId }) });
      sessionStorage.setItem(PENDING_PAYMENT_KEY, JSON.stringify({ planId, since: Date.now() }));
      window.location.assign(session.checkoutUrl);
    } catch (error) {
      toast(error.message, 'error');
      if (button) { button.disabled = false; button.textContent = '安全购买'; }
    }
  };
  const loadPlans = async () => {
    const note = document.getElementById('pricing-live-note');
    try {
      const { plans } = await api('/api/plans', { auth: false });
      document.querySelectorAll('[data-price-plan]').forEach((node) => {
        const plan = plans[node.dataset.pricePlan];
        if (!plan) return;
        const price = node.querySelector('[data-price]');
        const period = node.querySelector('[data-period]');
        if (price) { price.textContent = plan.displayPrice || `${plan.amount} ${plan.currency}`; price.classList.remove('loading'); }
        if (period) period.textContent = node.dataset.pricePlan === 'yearly' ? '/年' : node.dataset.pricePlan === 'monthly' ? '/月' : '一次性';
      });
      if (note) note.textContent = '价格实时同步自 Waffo 正式收银台，税费以结算页为准。';
    } catch (error) {
      if (note) note.textContent = '暂时无法加载实时价格，请稍后刷新页面。';
      document.querySelectorAll('[data-plan-id]').forEach((button) => { button.disabled = true; });
    }
  };
  const bind = () => {
    document.querySelectorAll('[data-close-modal]').forEach((button) => button.addEventListener('click', () => closeModal(button.dataset.closeModal)));
    document.querySelectorAll('.commerce-modal').forEach((modal) => modal.addEventListener('click', (event) => { if (event.target === modal) modal.hidden = true; }));
    document.querySelectorAll('[data-auth-tab]').forEach((button) => button.addEventListener('click', () => setAuthTab(button.dataset.authTab)));
    document.querySelectorAll('[data-send-sms]').forEach((button) => button.addEventListener('click', () => requestSms(button)));
    document.querySelectorAll('[data-auth-form]').forEach((form) => form.addEventListener('submit', (event) => { event.preventDefault(); submitAuth(form); }));
    document.querySelectorAll('[data-plan-id]').forEach((button) => button.addEventListener('click', () => startCheckout(button.dataset.planId)));
    document.getElementById('account-trigger')?.addEventListener('click', () => openModal(state.user ? 'account-modal' : 'auth-modal'));
    document.getElementById('logout-button')?.addEventListener('click', () => { clearSession(); closeModal('account-modal'); toast('已安全退出登录'); });
  };
  document.addEventListener('DOMContentLoaded', async () => { bind(); syncAccountUi(); await refreshUser(); await loadPlans(); });
  document.addEventListener('i18nchange', syncAccountUi);
  window.ShanNianWeb = { api, getSession, saveSession, refreshUser, toast, PENDING_PAYMENT_KEY };
})();
