"use client";

import Script from "next/script";
import type { Locale } from "./site-context";

const copy = {
  zh: {
    account: "登录 / 注册",
    authTitle: "登录闪念账号",
    authDesc: "登录后即可在网站安全购买，会员自动同步到所有设备。",
    sms: "短信登录",
    password: "密码登录",
    register: "注册账号",
    phone: "手机号",
    phonePlaceholder: "请输入 11 位手机号",
    smsCode: "短信验证码",
    smsPlaceholder: "6 位验证码",
    sendCode: "发送验证码",
    loginRegister: "登录 / 自动注册",
    smsNote: "未注册手机号会自动创建闪念账号；与桌面端、Android 使用同一账号和会员权益。",
    passwordLabel: "密码",
    passwordPlaceholder: "6-16 位密码",
    login: "登录",
    setPassword: "设置密码",
    registerSubmit: "注册并登录",
    accountTitle: "我的闪念账号",
    accountDesc: "会员权益在网站、桌面端和移动端自动同步。",
    pricing: "查看会员方案",
    logout: "退出登录",
    close: "关闭",
  },
  en: {
    account: "Log in / Sign up",
    authTitle: "Log in to IdeaSnap",
    authDesc: "Log in to purchase securely. Membership syncs across all devices.",
    sms: "SMS login",
    password: "Password login",
    register: "Register",
    phone: "Phone number",
    phonePlaceholder: "Enter your phone number",
    smsCode: "SMS code",
    smsPlaceholder: "6-digit code",
    sendCode: "Send code",
    loginRegister: "Log in / Register",
    smsNote: "Unregistered phone numbers are created automatically and work on every IdeaSnap client.",
    passwordLabel: "Password",
    passwordPlaceholder: "6-16 characters",
    login: "Log in",
    setPassword: "Set password",
    registerSubmit: "Register & log in",
    accountTitle: "My IdeaSnap account",
    accountDesc: "Membership syncs across the website, desktop, and mobile apps.",
    pricing: "View pricing",
    logout: "Log out",
    close: "Close",
  },
} satisfies Record<Locale, Record<string, string>>;

export function AccountButton({ locale }: { locale: Locale }) {
  const t = copy[locale];
  return (
    <button
      className="account-link account-button"
      id="account-trigger"
      type="button"
      data-default-avatar="/assets/icons/Appicon.png"
      aria-label={t.account}
      title={t.account}
    >
      <span className="account-avatar" data-account-avatar>
        <img data-account-avatar-image src="/assets/icons/Appicon.png" alt="" />
      </span>
      <span data-account-label>{t.account}</span>
    </button>
  );
}

export function CommerceLayer({ locale }: { locale: Locale }) {
  const t = copy[locale];
  return (
    <>
      <div className="commerce-modal" id="auth-modal" hidden aria-modal="true" role="dialog" aria-labelledby="auth-title">
        <div className="commerce-dialog">
          <div className="commerce-dialog-head">
            <div><h2 id="auth-title">{t.authTitle}</h2><p>{t.authDesc}</p></div>
            <button className="commerce-close" type="button" data-close-modal="auth-modal" aria-label={t.close}>×</button>
          </div>
          <div className="auth-tabs" role="tablist">
            <button className="auth-tab is-active" type="button" data-auth-tab="sms">{t.sms}</button>
            <button className="auth-tab" type="button" data-auth-tab="password">{t.password}</button>
            <button className="auth-tab" type="button" data-auth-tab="register">{t.register}</button>
          </div>
          <form className="auth-form" data-auth-form="sms">
            <label className="commerce-field">{t.phone}<input name="phone" inputMode="numeric" autoComplete="tel" placeholder={t.phonePlaceholder} required /></label>
            <label className="commerce-field">{t.smsCode}<span className="code-row"><input name="smsCode" inputMode="numeric" autoComplete="one-time-code" placeholder={t.smsPlaceholder} required /><button className="button button-secondary send-code" type="button" data-send-sms>{t.sendCode}</button></span></label>
            <button className="button button-primary" type="submit">{t.loginRegister}</button>
            <p className="auth-note">{t.smsNote}</p>
          </form>
          <form className="auth-form" data-auth-form="password" hidden>
            <label className="commerce-field">{t.phone}<input name="phone" inputMode="numeric" autoComplete="tel" placeholder={t.phonePlaceholder} required /></label>
            <label className="commerce-field">{t.passwordLabel}<input name="password" type="password" autoComplete="current-password" placeholder={t.passwordPlaceholder} required /></label>
            <button className="button button-primary" type="submit">{t.login}</button>
          </form>
          <form className="auth-form" data-auth-form="register" hidden>
            <label className="commerce-field">{t.phone}<input name="phone" inputMode="numeric" autoComplete="tel" placeholder={t.phonePlaceholder} required /></label>
            <label className="commerce-field">{t.smsCode}<span className="code-row"><input name="smsCode" inputMode="numeric" autoComplete="one-time-code" placeholder={t.smsPlaceholder} required /><button className="button button-secondary send-code" type="button" data-send-sms>{t.sendCode}</button></span></label>
            <label className="commerce-field">{t.setPassword}<input name="password" type="password" autoComplete="new-password" placeholder={t.passwordPlaceholder} required /></label>
            <button className="button button-primary" type="submit">{t.registerSubmit}</button>
          </form>
        </div>
      </div>

      <div className="commerce-modal" id="account-modal" hidden aria-modal="true" role="dialog" aria-labelledby="account-title">
        <div className="commerce-dialog">
          <div className="commerce-dialog-head">
            <div><h2 id="account-title">{t.accountTitle}</h2><p>{t.accountDesc}</p></div>
            <button className="commerce-close" type="button" data-close-modal="account-modal" aria-label={t.close}>×</button>
          </div>
          <div className="account-summary" id="account-summary">
            <div className="account-card account-profile">
              <span className="account-avatar account-avatar-large" data-profile-avatar><img data-profile-avatar-image src="/assets/icons/Appicon.png" alt="" /></span>
              <div><div className="account-name" data-account-name /><div className="account-meta" data-account-phone /><span className="membership-chip" data-membership /></div>
            </div>
            <a className="button button-primary" href="/pricing#pricing-plans">{t.pricing}</a>
            <button className="button button-secondary" id="logout-button" type="button">{t.logout}</button>
          </div>
        </div>
      </div>

      <div className="commerce-toast" role="status" aria-live="polite" hidden />
      <Script src="/js/shannian-commerce.js" strategy="afterInteractive" />
    </>
  );
}
