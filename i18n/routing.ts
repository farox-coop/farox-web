import { createNavigation } from "next-intl/navigation"
import { defineRouting } from "next-intl/routing"

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ["en", "es"],
  defaultLocale: "en",
})

export const { Link, redirect, usePathname, useRouter, getPathname } = createNavigation(routing)
