import { existsSync } from "node:fs"
import path from "node:path"
import { MISSING_CAPTCHA_CONFIG } from "@/global"
import "server-only"

const normalizedWidgetPath = MISSING_CAPTCHA_CONFIG.widgetPath.replace(/^\/+|\/+$/g, "")
const widgetDirectoryPath = path.join(process.cwd(), "public", normalizedWidgetPath)
const widgetScriptFilePath = path.join(widgetDirectoryPath, "widget.js")
const widgetStylesheetFilePath = path.join(widgetDirectoryPath, "widget.css")

export const hasMissingCaptchaAssetsOnServer = () => {
  return existsSync(widgetScriptFilePath) && existsSync(widgetStylesheetFilePath)
}

export const isMissingCaptchaEnabledOnServer = () => {
  const hasSiteKey = MISSING_CAPTCHA_CONFIG.publicSiteKey.trim().length > 0
  const hasAssets = hasMissingCaptchaAssetsOnServer()

  if (hasSiteKey && !hasAssets) {
    console.warn(
      "[missing-captcha] site key is set but widget assets are missing — captcha is DISABLED on this server; forms will submit without captcha.",
    )
  }

  return hasSiteKey && hasAssets
}
