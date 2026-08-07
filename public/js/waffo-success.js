(() => {
  const status = document.getElementById('payment-status');
  const detail = document.getElementById('payment-detail');
  const PENDING_KEY = window.ShanNianWeb?.PENDING_PAYMENT_KEY || 'shannian.web.pending-payment.v1';
  const setStatus = (title, text) => { if (status) status.textContent = title; if (detail) detail.textContent = text; };

  const readPending = () => {
    const stores = [window.localStorage, window.sessionStorage];
    for (const store of stores) {
      try {
        const raw = store.getItem(PENDING_KEY);
        if (!raw) continue;
        const parsed = JSON.parse(raw);
        if (parsed?.planId && parsed?.since) return parsed;
      } catch (_) {}
    }
    return null;
  };

  const clearPending = () => {
    try { window.localStorage.removeItem(PENDING_KEY); } catch (_) {}
    try { window.sessionStorage.removeItem(PENDING_KEY); } catch (_) {}
  };

  const run = async () => {
    const api = window.ShanNianWeb?.api;
    const session = window.ShanNianWeb?.getSession?.();
    const pending = readPending();
    if (!api || !session || !pending) {
      setStatus('支付已完成', '请返回官网登录同一账号，会员状态会在支付通知完成后自动同步。若仍未生效，请联系客服并提供订单号。');
      return;
    }
    for (let attempt = 0; attempt < 8; attempt += 1) {
      try {
        setStatus('正在确认会员权益…', `正在检查支付结果（第 ${attempt + 1} 次）`);
        const result = await api('/api/payments/verify', {
          method: 'POST',
          body: JSON.stringify({ planId: pending.planId, since: pending.since, objectId: session.objectId }),
        });
        if (result.orderFound) {
          await window.ShanNianWeb.refreshUser({ clearOnError: false });
          clearPending();
          setStatus('会员已生效', '支付和会员权益已确认。现在可以返回官网或打开闪念 App 使用全部功能。');
          return;
        }
      } catch (error) { console.warn('Payment verification pending:', error); }
      await new Promise((resolve) => window.setTimeout(resolve, 3500));
    }
    setStatus('支付正在同步', '支付通知仍在处理中，请稍后返回官网查看会员状态；无需重复购买。若超过 10 分钟仍未生效，请联系客服。');
  };
  window.addEventListener('DOMContentLoaded', () => window.setTimeout(run, 150));
})();
