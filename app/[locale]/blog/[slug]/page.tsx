import BlogPost from "@/components/layout/Blog/BlogPost"
import FoundThisHelpful from "@/components/layout/Blog/FoundThisHelpful"
import Footer from "@/components/layout/Footer"
import HeadersContainer from "@/components/layout/Header/HeadersContainer"
import type { Metadata } from "next"
import { getTranslations } from "next-intl/server"
import { headers } from 'next/headers';
import { notFound } from "next/navigation"

type PostMetadata = {
  slug: string
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
      <Footer />
    </>
  )
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string; locale: string }> }): Promise<Metadata> {
  try {
    const { slug, locale } = await params
    // NOTE: I had to do `locale: locale?.startsWith("es") ? "es" : "en"` just to satisfy TS checks
    const t = await getTranslations({ locale: locale?.startsWith("es") ? "es" : "en", namespace: 'Common' });
    const headersList = await headers();
    const host = headersList.get('host');
    const metadataBase = new URL(`http${process.env.NODE_ENV === 'production' ? 's' : ''}://${host}`);
    //const siteOrigin = "https://farox.coop"

    const res = await fetch(`${metadataBase}/api/blog/${locale}`)
    if (!res.ok) {
      return {}
    }

    const posts = (await res.json()) as PostMetadata[]
    const post = (posts || []).find((p) => p.slug === slug)
    if (!post) {
      notFound()
    }

    const title = `FAROX | ${post.title || t("site_title")}`
    const description = post.description || ""
    //const defaultOg = `${siteOrigin}/images/og.png`
    const defaultOg = "/images/og.png"

    //let url_img = post.url_img || ""
    //if (url_img && !/^https?:\/\//i.test(url_img)) {
    //  url_img = new URL(url_img.startsWith("/") ? url_img : `/${url_img}`, siteOrigin).toString()
    //}
    const url_img = post.url_img || ""
    const ogImages = [
      ...(url_img
        ? [
          {
            url: url_img,
            width: 1024,
            height: 1024,
            alt: title,
          },
        ]
        : []),
      {
        url: defaultOg,
        width: 1200,
        height: 630,
        alt: title,
      },
      {
        //url: `${siteOrigin}/images/og.png`,
        url: "/images/og.png",
        width: 800,
        height: 600,
        alt: title,
      },
      {
        //url: `${siteOrigin}/images/og-alt.png`,
        url: "/images/og-alt.png",
        width: 1800,
        height: 1600,
        alt: title,
      },
    ]

    return {
      metadataBase,
      title,
      description,
      openGraph: {
        title,
        description,
        //url: `${siteOrigin}/${locale}/blog/${slug}`,
        url: `/${locale}/blog/${slug}`,
        images: ogImages,
        type: "article",
        locale: locale?.startsWith("es") ? "es_ES" : "en_US",
      },
    }
  } catch (error) {
    console.error("Error generating metadata for post:", error)
    return {}
  }
}
