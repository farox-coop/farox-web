import type { formats } from "@/i18n/request"
import type { routing } from "@/i18n/routing"
import type en from "@/messages/en.json"

// Google Analytics Configuration
export const GOOGLE_ANALYTICS_ID = "G-KBPFLSZVZ2"

declare module "next-intl" {
  interface AppConfig {
    Messages: typeof en
    Formats: typeof formats
    Locale: (typeof routing.locales)[number]
  }
}
