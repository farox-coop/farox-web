import BlogPost from "@/components/layout/Blog/BlogPost"
import BlogReadMore from "@/components/layout/Blog/BlogReadMore"
import FoundThisHelpful from "@/components/layout/Blog/FoundThisHelpful"
import Footer from "@/components/layout/Footer"
import HeadersContainer from "@/components/layout/Header/HeadersContainer"
import { getBaseURL, getLocale } from "@/utils/helpers"
import type { Metadata } from "next"
import { getTranslations } from "next-intl/server"
import { notFound } from "next/navigation"

type PostMetadata = {
  slug: string
  aliases?: string[]
  title?: string
  description?: string
  url_img?: string
  markdownContent?: string
  date?: string
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string; locale: string }> }) {
  const { slug } = await params

  return (
    <>
      <HeadersContainer
        hoverItemsColor="hover:text-primary"
        languajeTextColor="text-[#333]"
        itemsColor="text-[#333]"
        textColor="#333"
        charColor="#6843E1"
      />
      <BlogPost slug={slug} />
      <FoundThisHelpful />
      <BlogReadMore />
      <Footer />
    </>
  )
}

export async function generateMetadata({
  params,
}: { params: Promise<{ slug: string; locale: string }> }): Promise<Metadata> {
  try {
    const { slug, locale: l } = await params
    const locale = getLocale(l)
    const t = await getTranslations({ locale, namespace: "Common" })
    const metadataBase = await getBaseURL()

    const res = await fetch(`${metadataBase}/api/blog/${locale}`)
    if (!res.ok) {
      return {}
    }

    const posts = (await res.json()) as PostMetadata[]
    const post = (posts || []).find((p) => p.slug === slug || p.aliases?.includes(slug))
    if (!post) {
      return notFound()
    }

    const title = `FAROX | ${post.title || t("site_title")}`
    const description = post.description || ""
    const postUrlImg = post.url_img || ""
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
        url: "/images/og.png",
        width: 800,
        height: 600,
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
        url: `/${locale}/blog/${slug}`,
        title,
        description,
        locale,
        images: ogImages,
        type: "article",
      },
    }
  } catch (error) {
    console.error("Error generating metadata for post:", error)
    return {}
  }
}
