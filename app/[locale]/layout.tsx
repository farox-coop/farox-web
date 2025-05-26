import { routing } from "@/i18n/routing"
import type { Metadata } from "next"
import { NextIntlClientProvider } from "next-intl"
import { getMessages } from "next-intl/server"
import { IBM_Plex_Sans } from "next/font/google"
import { notFound } from "next/navigation"
import "../globals.css"
import { ViewTransitions } from "next-view-transitions"

const ibmPlexSans = IBM_Plex_Sans({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Farox Web",
  description:
    "Somos una cooperativa de desarrollo de software especializada en brindar servicios profesionales relacionados a tecnologías tales como Data Science, Machine Learning, Sistemas de alta concurrencia y Full-Stack",
  icons: {
    icon: "/favicon.svg",
  },
  metadataBase: new URL("https://farox.coop/"),
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  if (!routing.locales.includes(locale as typeof routing.locales[number])) {
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
