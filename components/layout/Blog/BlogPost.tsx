"use client"
import AHeroSVG from "@/components/SVG/AHeroSVG"
import Spinner from "@/components/SVG/Spinner"
import { useStorePost } from "@/store/usePostStore"
import { fetchPosts } from "@/utils/fetchPost"
import { useLocale, useTranslations } from "next-intl"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import MarkdownRenderer from "./MarkdownRenderer"

interface BlogPost {
  slug: string
  title: string
  description: string
  url_img: string
  content: string
  markdownContent: string
}

export default function BlogPost({ slug }: { slug: string }) {
  const [post, setPost] = useState<BlogPost | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const locale = useLocale()
  const t = useTranslations("Blog.BlogPage")
  const [beforeImg, afterImg] = post?.markdownContent?.split("<!-- IMAGE_BREAK -->") || ["", ""]
  const { allPosts, allPostsEN } = useStorePost()

  useEffect(() => {
    let isMounted = true
    const postsArr = locale === "es" ? allPosts : allPostsEN
    if (postsArr.length > 0) {
      const currentPost = postsArr.find((p: BlogPost) => p.slug === slug)
      setPost(currentPost || null)
      setLoading(false)
    } else {
      fetchPosts(locale, setLoading, () => {})
        .then(() => {
          if (!isMounted) {
            return
          }
          const updatedPostsArr =
            locale === "es" ? useStorePost.getState().allPosts : useStorePost.getState().allPostsEN
          const currentPost = updatedPostsArr.find((p: BlogPost) => p.slug === slug)
          setPost(currentPost || null)
        })
        .catch((error) => {
          if (isMounted) {
            setPost(null)
            setLoading(false)
            console.error("Error fetching blog posts:", error)
          }
        })
    }
    return () => {
      isMounted = false
    }
  }, [locale, slug])

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center w-full h-screen">
        <article className="flex flex-col justify-center items-center max-w-4xl p-6 md:p-8 z-10">
          <div className="grid w-full place-items-center">
            <Spinner />
          </div>
          <p className="text-xl">{t("loading")}</p>
        </article>
      </div>
    )
  }

  if (!post) {
    return (
      <div className="flex flex-col items-center justify-center w-full h-screen">
        <article className="max-w-4xl mx-auto p-6 md:p-8 z-10 text-center">
          <p className="text-xl">{t("postNotFound")}</p>
          <Link href={`/${locale}/blog`} className="text-primary hover:underline text-lg">
            {t("backToBlog")}
          </Link>
        </article>
      </div>
    )
  }

  return (
    <main className="flex flex-col justify-center items-center w-full relative h-full bg-custom-gradient-blog px-2">
      <div className="absolute -top-40 left-1/3 -translate-x-1/2 w-[2790px] pointer-events-none hidden tablet:block">
        <AHeroSVG />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-30% to-white" />
      <article className="flex flex-col justify-center items-center max-w-screen-2xl mx-auto rounded-lg px-4 z-10 pb-20">
        <header className="w-full max-w-screen-xl pt-36 tablet:pt-72 text-center">
          <h1 className="text-3xl tablet:text-5xl laptop:text-7xl font-semibold text-gray-900 uppercase">
            {post.title}
          </h1>
          <p className="text-lg tablet:text-3xl text-gray-600 text-center mt-10 tablet:mt-16 mb-10 tablet:mb-24">
            {post.description}
          </p>
        </header>
        <section className="relative">
          {/* Texto antes de la imagen */}
          <div className="prose max-w-none">
            <MarkdownRenderer content={beforeImg} />
          </div>
          <div className="my-2 flow-root">
            <div className="w-full md:w-[350px] md:float-left md:shrink-0 md:mr-4 mb-2 md:mb-0">
              <Image src={post.url_img} alt={post.title} width={350} height={200} className="w-full h-auto" />
            </div>
            {/* Texto después de la imagen */}
            <div className="prose max-w-none">
              <MarkdownRenderer content={afterImg} />
            </div>
          </div>
        </section>
      </article>
    </main>
  )
}
