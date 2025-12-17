import { routing } from "@/i18n/routing"
import type { Metadata } from "next"
import { NextIntlClientProvider } from "next-intl"
import { getMessages, getTranslations } from "next-intl/server"
import { ViewTransitions } from "next-view-transitions"
import { IBM_Plex_Sans } from "next/font/google"
import { headers } from 'next/headers';
import { notFound } from "next/navigation"
import "../globals.css"

const ibmPlexSans = IBM_Plex_Sans({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
})

export async function generateMetadata({ params, searchParams }: {
  params: Promise<{ locale: string }>
  searchParams?: { [key: string]: string | string[] | undefined }
}): Promise<Metadata> {
  const { locale } = await params
  // NOTE: I had to do `locale: locale?.startsWith("es") ? "es" : "en"` just to satisfy TS checks
  const t = await getTranslations({ locale: locale?.startsWith("es") ? "es" : "en", namespace: 'Common' });
  const headersList = await headers();
  const host = headersList.get('host');
  const metadataBase = new URL(`http${process.env.NODE_ENV === 'production' ? 's' : ''}://${host}`);
  //const siteOrigin = "https://farox.coop"

  const title = `FAROX | ${t("site_title")}`
  const common = {
    metadataBase,
    icons: { icon: "/favicon.svg" },
    openGraph: {
      //url: siteOrigin,
      url: "./",
      siteName: title,
      images: [
        //{ url: `${siteOrigin}/images/og.png`, width: 800, height: 600 },
        { url: "/images/og.png", width: 800, height: 600 },
        {
          //url: `${siteOrigin}/images/og-alt.png`,
          url: "/images/og-alt.png",
          width: 1800,
          height: 1600,
        },
      ],
      type: "website",
    },
  }

  if (locale?.startsWith("es")) {
    return {
      title,
      description:
        "Somos un Estudio Cooperativo de Software conformado por un equipo de profesionales en IA, Ciencia de Datos y Desarrollo Full-Stack. Desde Argentina, creando redes por el mundo.",
      ...common,
      openGraph: { ...common.openGraph, locale: "es_ES", title, description: "Somos un Estudio Cooperativo de Software conformado por un equipo de profesionales en IA, Ciencia de Datos y Desarrollo Full-Stack. Desde Argentina, creando redes por el mundo." },
    }
  }

  return {
    title,
    description:
      "We are a Cooperative Software Studio formed by a team of professionals in AI, Data Science, and Full-Stack Development. From Argentina, building networks around the world.",
    ...common,
    openGraph: { ...common.openGraph, locale: "en_US", title, description: "We are a Cooperative Software Studio formed by a team of professionals in AI, Data Science, and Full-Stack Development. From Argentina, building networks around the world." },
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
