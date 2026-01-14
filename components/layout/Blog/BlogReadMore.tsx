"use client"
import ArrowCardSVG from "@/components/SVG/ArrowCardSVG"
import Spinner from "@/components/SVG/Spinner"
import { useStorePost } from "@/store/usePostStore"
import { fetchPosts } from "@/utils/fetchPost"
import { useLocale, useTranslations } from "next-intl"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useLayoutEffect, useRef, useState } from "react"

function TagList({ tags }: { tags?: string[] }) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const measureRef = useRef<HTMLDivElement | null>(null)
  const [visibleCount, setVisibleCount] = useState(tags?.length ?? 0)

  useLayoutEffect(() => {
    const container = containerRef.current
    const measure = measureRef.current
    if (!container || !measure) {
      setVisibleCount(tags?.length ?? 0)
      return
    }

    const compute = () => {
      const tagEls = Array.from(measure.children) as HTMLElement[]
      const gap = 4
      const available = container.clientWidth
      let total = 0
      let count = 0
      for (const el of tagEls) {
        const w = el.getBoundingClientRect().width
        if (count > 0) {
          total += gap
        }
        if (total + w <= available) {
          total += w
          count++
        } else {
          break
        }
      }
      setVisibleCount(count)
    }

    let ro: ResizeObserver | null = null

    const onResize = () => {
      if (window.innerWidth < 768) {
        setVisibleCount(tags?.length ?? 0)
      } else {
        compute()
      }
    }

    if (window.innerWidth < 768) {
      setVisibleCount(tags?.length ?? 0)
    } else {
      compute()
      ro = new ResizeObserver(compute)
      ro.observe(container)
    }

    window.addEventListener("resize", onResize)
    return () => {
      if (ro) {
        ro.disconnect()
      }
      window.removeEventListener("resize", onResize)
    }
  }, [tags])

  return (
    <div className="relative w-full md:max-w-[85%]">
      <div ref={containerRef} className="flex gap-1 flex-wrap md:flex-nowrap md:overflow-hidden md:whitespace-nowrap">
        {(tags ?? []).slice(0, visibleCount).map((tag) => (
          <span key={tag} className="bg-black text-white text-xs px-2 py-1 uppercase flex-shrink-0">
            {tag}
          </span>
        ))}
      </div>

      <div ref={measureRef} className="absolute invisible left-0 top-0 whitespace-nowrap">
        {(tags ?? []).map((tag) => (
          <span key={tag} className="bg-black text-white text-xs px-2 py-1 uppercase inline-block">
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function BlogReadMore() {
  const [loading, setLoading] = useState(false)
  const locale = useLocale()
  const t = useTranslations("Blog.BlogPage")
  const [error, setError] = useState<string | null>(null)
  const { allPosts, allPostsEN } = useStorePost()
  const pathname = usePathname()
  const currentSlug = pathname?.split("/").filter(Boolean).pop()

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

  const sourcePosts = locale === "es" ? allPosts : allPostsEN
  const postsToShow = sourcePosts.filter((p) => p.slug !== currentSlug).slice(0, 3)

  return (
    <article className="flex flex-col w-full">
      <div className="text-[28px] text-center laptop:text-left laptop:text-[65px] desktop:text-[75px] font-bold leading-none uppercase mt-20 max-w-screen-xl w-full mx-auto">
        <span className="block">{t("title_2")}</span>
        <span className="block laptop:pl-20">{t("title_3")}</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 max-w-screen-xl mx-auto z-40 mt-10">
        {postsToShow.map((post) => (
          <Link href={`/${locale}/blog/${post.slug}`} key={post.slug}>
            <article className="bg-[#f1f1f1] overflow-hidden hover:shadow-lg transition-shadow duration-300 w-[344px] desktop:w-[424px] flex flex-col justify-between relative fill-primary hover:fill-secondary">
              {post.url_img && (
                <header className="relative h-[270px] mx-4 desktop:mx-5 mt-4 desktop:mt-5">
                  <Image src={post.url_img} alt={post.title} fill className="object-cover" />
                </header>
              )}
              <section className="px-4 desktop:px-5 pt-3 desktop:pt-6 pb-1 laptop:pb-5 desktop:pb-10 flex-1">
                <h2 className="text-base laptop:text-lg desktop:text-xl font-bold mb-2 text-gray-800 uppercase line-clamp-2 leading-[1.2] min-h-[2.4rem] laptop:min-h-[3.5rem]">
                  {post.title}
                </h2>
                <p className="text-gray-600 line-clamp-3 text-sm laptop:text-base">{post.description}</p>
              </section>
              <footer className="px-4 desktop:px-5 pt-3 desktop:pt-4 pb-4 desktop:pb-6 flex items-start justify-between">
                <TagList tags={post.tags} />
                <div className="w-[18px] laptop:w-[20px] desktop:w-[30px] h-auto self-end">
                  <ArrowCardSVG />
                </div>
              </footer>
            </article>
          </Link>
        ))}
      </div>
    </article>
  )
}
