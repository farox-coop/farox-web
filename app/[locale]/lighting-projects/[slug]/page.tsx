import LightingProjectDetail from "@/components/layout/LightingProjects/LightingProjectDetail"
import LightingProjectsNavbar from "@/components/layout/LightingProjects/LightingProjectsNavbar"
import FoundThisHelpful from "@/components/layout/Blog/FoundThisHelpful"
import Footer from "@/components/layout/Footer"
import { getBaseURL, getLocale } from "@/utils/helpers"
import type { Metadata } from "next"
import { getTranslations } from "next-intl/server"
import { notFound } from "next/navigation"

type ProjectMetadata = {
  slug: string
  aliases?: string[]
  title?: string
  description?: string
  url_img?: string
}

export default async function LightingProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>
}) {
  const { slug } = await params

  return (
    <>
      <LightingProjectsNavbar />
      <LightingProjectDetail slug={slug} />
      <FoundThisHelpful />
      <Footer />
    </>
  )
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>
}): Promise<Metadata> {
  try {
    const { slug, locale: l } = await params
    const locale = getLocale(l)
    const t = await getTranslations({ locale, namespace: "Common" })
    const metadataBase = await getBaseURL()

    const res = await fetch(`${metadataBase}/api/lighting-projects/${locale}`)
    if (!res.ok) {
      return {}
    }

    const projects = (await res.json()) as ProjectMetadata[]
    const project = (projects || []).find((p) => p.slug === slug || p.aliases?.includes(slug))
    if (!project) {
      return notFound()
    }

    const title = `FAROX | ${project.title || t("site_title")}`
    const description = project.description || ""
    const postUrlImg = project.url_img || ""
    const ogImages = [
      ...(postUrlImg
        ? [
            {
              url: postUrlImg,
              width: 1024,
              height: 1024,
              alt: title,
            },
          ]
        : []),
      {
        url: "/images/og.png",
        width: 1200,
        height: 630,
        alt: title,
      },
      {
        url: "/images/og-alt.png",
        width: 1800,
        height: 1600,
        alt: title,
      },
    ]

    return {
      title,
      description,
      metadataBase,
      openGraph: {
        url: `/${locale}/lighting-projects/${slug}`,
        title,
        description,
        locale,
        images: ogImages,
        type: "article",
      },
    }
  } catch (error) {
    console.error("Error generating metadata for lighting project:", error)
    return {}
  }
}
