"use client"
import ArrowCardSVG from "@/components/SVG/ArrowCardSVG"
import CirleMoreSVG from "@/components/SVG/CircleMoreSVG"
import Spinner from "@/components/SVG/Spinner"
import { useStorePost } from "@/store/usePostStore"
import { fetchPosts } from "@/utils/fetchPost"
import { useLocale, useTranslations } from "next-intl"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function BlogList() {
  const [loading, setLoading] = useState(false)
  const [showAllPosts, setShowAllPosts] = useState(false)
  const locale = useLocale()
  const t = useTranslations("Blog.BlogPage")
  const [error, setError] = useState<string | null>(null)
  const { allPosts, allPostsEN } = useStorePost()

  useEffect(() => {
    if ((locale === "es" && allPosts.length === 0) || (locale !== "es" && allPostsEN.length === 0)) {
      fetchPosts(locale, setLoading, setError)
    }
  }, [locale])

  if (loading && allPosts.length === 0 && allPostsEN.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center w-full">
        <article className="flex flex-col justify-center items-center max-w-4xl p-6 md:p-8 z-10">
          <div className="grid w-full place-items-center">
            <Spinner />
          </div>
          <p className="text-xl">{t("loading")}</p>
        </article>
      </div>
    )
  }

  if (
    error ||
    (locale === "es" && !loading && allPosts.length === 0) ||
    (locale !== "es" && !loading && allPostsEN.length === 0)
  ) {
    return <div className="py-10 text-center text-xl">{t("noPostsAvailable")}</div>
  }

  const postsToShow = showAllPosts
    ? locale === "es"
      ? allPosts
      : allPostsEN
    : locale === "es"
      ? allPosts.slice(0, 4)
      : allPostsEN.slice(0, 4)

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-16 max-w-screen-desktop mx-auto z-40">
        {postsToShow.map((post) => (
          <Link href={`/${locale}/blog/${post.slug}`} key={post.slug}>
            <article className="bg-[#f1f1f1] overflow-hidden hover:shadow-lg transition-shadow duration-300 w-[260px] laptop:w-[354px] desktop:w-[454px] h-[310px] laptop:h-[400px] desktop:h-[528px] flex flex-col justify-between relative fill-primary hover:fill-secondary">
              {post.url_img && (
                <header className="relative h-[150px] laptop:h-[210px] desktop:h-[270px] mx-1 laptop:mx-2 desktop:mx-5 mt-1 laptop:mt-2 desktop:mt-5">
                  <Image src={post.url_img} alt={post.title} fill className="object-cover" />
                </header>
              )}
              <section className="px-1 laptop:px-2 desktop:px-5 pt-1 laptop:pt-2 desktop:pt-6 pb-1 laptop:pb-5 desktop:pb-10 flex-1">
                <h2 className="text-base laptop:text-lg desktop:text-xl font-bold mb-0 laptop:mb-1 desktop:mb-2 text-gray-800 uppercase line-clamp-3">
                  {post.title}
                </h2>
                <p className="text-gray-600 line-clamp-3 text-sm laptop:text-base">{post.description}</p>
              </section>
              <div className="absolute bottom-2 right-2 desktop:p-1 w-[12px] laptop:w-[20px] desktop:w-[30px] h-auto">
                <ArrowCardSVG />
              </div>
            </article>
          </Link>
        ))}
      </div>
      {!showAllPosts && (
        <button
          type="button"
          className="my-4 mx-auto z-20 hover:text-primary transition-colors duration-200"
          onClick={() => setShowAllPosts(true)}
        >
          <span className="w-[52px] h-auto block mt-2">
            <CirleMoreSVG />
          </span>
        </button>
      )}
    </>
  )
}
