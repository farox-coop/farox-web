"use client"
import ArrowCardSVG from "@/components/SVG/ArrowCardSVG"
import CirleMoreSVG from "@/components/SVG/CircleMoreSVG"
import Spinner from "@/components/SVG/Spinner"
import { useStorePost } from "@/store/usePostStore"
import { fetchPosts } from "@/utils/fetchPost"
import { useLocale, useTranslations } from "next-intl"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useLayoutEffect, useRef, useState } from "react"

/**
 * Calcula cuántos tags caben en el ancho disponible del contenedor
 */
function calculateVisibleTags(measureElement: HTMLElement, availableWidth: number, gap: number): number {
  const tagEls = Array.from(measureElement.children) as HTMLElement[]
  let total = 0
  let count = 0

  for (const el of tagEls) {
    const width = el.getBoundingClientRect().width
    const needsGap = count > 0
    const requiredSpace = total + (needsGap ? gap : 0) + width

    if (requiredSpace <= availableWidth) {
      total = requiredSpace
      count++
    } else {
      break
    }
  }

  return count
}

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

    const mediaQuery = window.matchMedia("(min-width: 768px)")
    const GAP = 4

    const compute = () => {
      // En mobile, muestra todos los tags
      if (!mediaQuery.matches) {
        setVisibleCount(tags?.length ?? 0)
        return
      }
      // En desktop, calcula cuántos caben
      const count = calculateVisibleTags(measure, container.clientWidth, GAP)
      setVisibleCount(count)
    }

    compute()
    const ro = new ResizeObserver(compute)
    ro.observe(container)

    const handleMediaChange = () => compute()
    mediaQuery.addEventListener("change", handleMediaChange)

    return () => {
      ro.disconnect()
      mediaQuery.removeEventListener("change", handleMediaChange)
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
            <article className="bg-[#f1f1f1] overflow-hidden hover:shadow-lg transition-shadow duration-300 w-[344px] desktop:w-[454px] flex flex-col justify-between relative fill-primary hover:fill-secondary">
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
      {!showAllPosts && (allPosts.length > 4 || allPostsEN.length > 4) && (
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
