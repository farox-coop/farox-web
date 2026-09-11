import type { formats } from "@/i18n/request"
import type { routing } from "@/i18n/routing"
import type en from "@/messages/en.json"

// Google Analytics Configuration
export const GOOGLE_ANALYTICS_ID = "G-KBPFLSZVZ2"

export const FORMSPREE_FORM_IDS = {
  contact: "mgvlpvaz",
  wecoop: "xjkaabab",
  lightprojects: "mgaeqzoz",
} as const

export const MISSING_CAPTCHA_CONFIG = {
  // Obtained by running `make sitekey` in the `missing-captcha` project's service.
  // Production key is the default; local dev overrides it via NEXT_PUBLIC_MISSING_CAPTCHA_SITE_KEY in .env.local.
  publicSiteKey: process.env.NEXT_PUBLIC_MISSING_CAPTCHA_SITE_KEY?.trim() || "rc_pk_6ac55f6e0b887fc76872d9af",
  // Folder inside public/ where both widget.js and widget.css are expected to be found
  widgetPath: "/missing-captcha",
} as const

export const MISSING_CAPTCHA_WIDGET_SCRIPT_PATH = `${MISSING_CAPTCHA_CONFIG.widgetPath}/widget.js`
export const MISSING_CAPTCHA_WIDGET_STYLESHEET_PATH = `${MISSING_CAPTCHA_CONFIG.widgetPath}/widget.css`

// Can be empty for same-origin root, a relative path (e.g. "/captcha"),
// or an absolute URL (e.g. "https://captcha.farox.coop").
// Set MISSING_CAPTCHA_API_BASE (server-only) to a fixed base so the server never
// derives the captcha host from client-supplied headers.
const MISSING_CAPTCHA_API_BASE = (process.env.MISSING_CAPTCHA_API_BASE ?? "").trim()

const stripTrailingSlashes = (value: string) => value.replace(/\/+$/g, "")

const stripTrailingColon = (value: string) => value.replace(/:$/, "")

const getAllowedCaptchaHosts = (): string[] | null => {
  const raw = process.env.MISSING_CAPTCHA_API_HOST_ALLOWLIST
  if (!raw) {
    return null
  }

  return raw
    .split(",")
    .map((host) => host.trim().toLowerCase())
    .filter(Boolean)
}

const isSafeForwardedHost = (value: string) => /^[a-z0-9.-]+(:\d+)?$/i.test(value)

const resolveMissingCaptchaApiBase = (origin: string) => {
  if (!MISSING_CAPTCHA_API_BASE) {
    return stripTrailingSlashes(origin)
  }

  return stripTrailingSlashes(new URL(MISSING_CAPTCHA_API_BASE, origin).toString())
}

const getServerOrigin = (requestUrl: string, requestHeaders?: Headers) => {
  const currentUrl = new URL(requestUrl)
  const forwardedHost =
    requestHeaders?.get("x-forwarded-host")?.split(",")[0]?.trim() ?? requestHeaders?.get("host")?.trim()

  if (!forwardedHost || !isSafeForwardedHost(forwardedHost)) {
    return currentUrl.origin
  }

  const allowlist = getAllowedCaptchaHosts()
  if (allowlist && !allowlist.includes(forwardedHost.toLowerCase())) {
    return currentUrl.origin
  }

  const forwardedProto = requestHeaders?.get("x-forwarded-proto")?.split(",")[0]?.trim()
  const protocol = forwardedProto ? stripTrailingColon(forwardedProto) : stripTrailingColon(currentUrl.protocol)

  return `${protocol}://${forwardedHost}`
}

export const getMissingCaptchaApiBase = (requestUrl?: string, requestHeaders?: Headers) => {
  if (process.env.NODE_ENV !== "production") {
    return "http://127.0.0.1:8000"
  }

  if (typeof window !== "undefined") {
    return resolveMissingCaptchaApiBase(window.location.origin)
  }

  if (!requestUrl) {
    throw new Error("requestUrl is required on the server when resolving MissingCaptcha apiBase")
  }

  return resolveMissingCaptchaApiBase(getServerOrigin(requestUrl, requestHeaders))
}

declare module "next-intl" {
  interface AppConfig {
    Messages: typeof en
    Formats: typeof formats
    Locale: (typeof routing.locales)[number]
  }
}
