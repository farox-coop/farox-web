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
  return MISSING_CAPTCHA_CONFIG.publicSiteKey.trim().length > 0 && hasMissingCaptchaAssetsOnServer()
}
