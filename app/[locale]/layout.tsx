import { routing } from "@/i18n/routing"
import { getBaseURL, getLocale } from "@/utils/helpers"
import type { Metadata } from "next"
import { NextIntlClientProvider } from "next-intl"
import { getMessages, getTranslations } from "next-intl/server"
import { ViewTransitions } from "next-view-transitions"
import { IBM_Plex_Sans } from "next/font/google"
import { notFound } from "next/navigation"
import "../globals.css"

const ibmPlexSans = IBM_Plex_Sans({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
})

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: l } = await params
  const locale = getLocale(l)
  const t = await getTranslations({ locale, namespace: "Common" })
  const metadataBase = await getBaseURL()

  const title = `FAROX | ${t("site_title")}`
  const description = t("site_description")

  return {
    title,
    description,
    metadataBase,
    icons: { icon: "/favicon.svg" },
    openGraph: {
      url: "./",
      siteName: title,
      title,
      description,
      locale,
      images: [
        { url: "/images/og.png", width: 800, height: 600 },
        { url: "/images/og-alt.png", width: 1800, height: 1600 },
      ],
      type: "website",
    },
  }
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  if (!routing.locales.includes(locale as (typeof routing.locales)[number])) {
    notFound()
  }
  const messages = await getMessages()

  return (
    <ViewTransitions>
      <html lang={locale}>
        <body className={`${ibmPlexSans.className}`}>
          <NextIntlClientProvider>{children}</NextIntlClientProvider>
        </body>
      </html>
    </ViewTransitions>
  )
}
