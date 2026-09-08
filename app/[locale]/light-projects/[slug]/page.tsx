import ProjectDetail from "@/components/layout/LightProjects/ProjectDetail"
import LightProjectsNavbar from "@/components/layout/LightProjects/LightProjectsNavbar"
import { getBaseURL, getLocale } from "@/utils/helpers"
import type { Metadata } from "next"
import { getTranslations } from "next-intl/server"
import { notFound } from "next/navigation"
import LightProjectsFooter from "@/components/layout/LightProjects/LightProjectsFooter"

type ProjectMetadata = {
  slug: string
  title?: string
  description?: string
  url_img?: string | string[]
}

export default async function LightProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>
}) {
  const { slug } = await params

  return (
    <>
      <LightProjectsNavbar />
      <ProjectDetail slug={slug} />
      <LightProjectsFooter />
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

    const [lightRes, darkRes] = await Promise.all([
      fetch(`${metadataBase}/api/projects/light-projects/${locale}`),
      fetch(`${metadataBase}/api/projects/not-so-light/${locale}`),
    ])

    const lightProjects = lightRes.ok ? ((await lightRes.json()) as ProjectMetadata[]) : []
    const darkProjects = darkRes.ok ? ((await darkRes.json()) as ProjectMetadata[]) : []
    const project = [...lightProjects, ...darkProjects].find((p) => p.slug === slug)

    if (!project) {
      return notFound()
    }

    const title = `FAROX | ${project.title || t("site_title")}`
    const description = project.description || ""
    const postUrlImg = Array.isArray(project.url_img) ? project.url_img[0] || "" : project.url_img || ""
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
        url: `/${locale}/light-projects/${slug}`,
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
