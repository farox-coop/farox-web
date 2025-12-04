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

export async function generateMetadata({ params, searchParams }: {
  params: Promise<{ locale: string }>
  searchParams?: { [key: string]: string | string[] | undefined }
}): Promise<Metadata> {
  const { locale } = await params

  const common = {
    icons: { icon: "/favicon.svg" },
    openGraph: {
      url: "https://farox.coop",
      siteName: "FAROX | COOP",
      images: [
        { url: "https://farox.coop/images/og.webp", width: 800, height: 600 },
        {
          url: "https://farox.coop/images/og-alt.png",
          width: 1800,
          height: 1600,
        },
      ],
      type: "website",
    },
  }

  if (locale?.startsWith("en")) {
    return {
      title: "FAROX | COOP",
      description:
        "We are a Cooperative Software Studio made up of professionals in AI, Data Science and Full-Stack Development. From Argentina, creating networks around the world.",
      ...common,
      openGraph: { ...common.openGraph, locale: "en_US", title: "FAROX | COOP", description: "We are a Cooperative Software Studio made up of professionals in AI, Data Science and Full-Stack Development. From Argentina, creating networks around the world." },
    }
  }

  return {
    title: "FAROX | COOP",
    description:
      "Somos un Estudio Cooperativo de Software conformado por un equipo de profesionales en IA, Ciencia de Datos y Desarrollo Full-Stack. Desde Argentina, creando redes por el mundo.",
    ...common,
    openGraph: { ...common.openGraph, locale: "es_ES", title: "FAROX | COOP", description: "Somos un Estudio Cooperativo de Software conformado por un equipo de profesionales en IA, Ciencia de Datos y Desarrollo Full-Stack. Desde Argentina, creando redes por el mundo." },
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
