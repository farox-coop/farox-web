import type { formats } from "@/i18n/request"
import type { routing } from "@/i18n/routing"
import type en from "@/messages/en.json"

// Google Analytics Configuration
export const GOOGLE_ANALYTICS_ID = "G-KBPFLSZVZ2"

export const FORMSPREE_FORM_IDS = {
  contact: "mgvlpvaz",
  wecoop: "xjkaabab",
} as const

export const MISSING_CAPTCHA_CONFIG = {
  // Obtained by running `make sitekey` in the `missing-captcha` project's service
  publicSiteKey: "rc_pk_6ac55f6e0b887fc76872d9af",
  // Folder inside public/ where both widget.js and widget.css are expected to be found
  widgetPath: "/missing-captcha",
} as const

export const MISSING_CAPTCHA_WIDGET_SCRIPT_PATH = `${MISSING_CAPTCHA_CONFIG.widgetPath}/widget.js`
export const MISSING_CAPTCHA_WIDGET_STYLESHEET_PATH = `${MISSING_CAPTCHA_CONFIG.widgetPath}/widget.css`

// Can be empty for same-origin root, a relative path (e.g. "/captcha"),
// or an absolute URL (e.g. "https://captcha.farox.coop").
const MISSING_CAPTCHA_API_BASE = ""

const stripTrailingSlashes = (value: string) => value.replace(/\/+$/g, "")

const resolveMissingCaptchaApiBase = (origin: string) => {
  if (!MISSING_CAPTCHA_API_BASE) {
    return stripTrailingSlashes(origin)
  }

  return stripTrailingSlashes(new URL(MISSING_CAPTCHA_API_BASE, origin).toString())
}

export const getMissingCaptchaApiBase = (requestUrl?: string) => {
  if (process.env.NODE_ENV !== "production") {
    return "http://127.0.0.1:8000"
  }

  if (typeof window !== "undefined") {
    return resolveMissingCaptchaApiBase(window.location.origin)
  }

  if (!requestUrl) {
    throw new Error("requestUrl is required on the server when resolving MissingCaptcha apiBase")
  }

  return resolveMissingCaptchaApiBase(new URL(requestUrl).origin)
}

declare module "next-intl" {
  interface AppConfig {
    Messages: typeof en
    Formats: typeof formats
    Locale: (typeof routing.locales)[number]
  }
}
