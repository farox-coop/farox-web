"use client"
import MoreLightSVG from "@/components/SVG/MoreLightSVG"
import Spinner from "@/components/SVG/Spinner"
import { useLightingProjectsStore } from "@/store/useLightingProjectsStore"
import { fetchLightingProjects } from "@/utils/fetchLightingProjects"
import { useLocale, useTranslations } from "next-intl"
import { useEffect, useState } from "react"
import LightingProjectCard from "./LightingProjectCard"

const INITIAL_VISIBLE = 4
const LOAD_MORE_COUNT = 2

export default function LightingProjectList() {
  const [loading, setLoading] = useState(false)
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE)
  const locale = useLocale()
  const t = useTranslations("LightingProjectsPage.ListingPage")
  const [error, setError] = useState<string | null>(null)
  const { projects, currentLocale } = useLightingProjectsStore()

  useEffect(() => {
    if (currentLocale !== locale || projects.length === 0) {
      fetchLightingProjects(locale, setLoading, setError)
    }
  }, [locale, currentLocale, projects.length])

  if (loading && projects.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center w-full">
        <article className="flex flex-col justify-center items-center max-w-4xl p-6 md:p-8 z-10">
          <div className="grid w-full place-items-center">
            <Spinner />
          </div>
          <p className="text-xl text-[#28FFE3]">{t("loading")}</p>
        </article>
      </div>
    )
  }

  if (error || (!loading && projects.length === 0)) {
    return <div className="py-10 text-center text-xl text-[#28FFE3]">{t("noProjectsAvailable")}</div>
  }

  const hasMore = visibleCount < projects.length
  const hasLess = visibleCount > INITIAL_VISIBLE

  const handleShowMore = () => {
    setVisibleCount((prev) => Math.min(prev + LOAD_MORE_COUNT, projects.length))
  }

  const handleShowLess = () => {
    setVisibleCount(INITIAL_VISIBLE)
  }

  return (
    <div className="flex flex-col items-center gap-10 w-full z-40">
      {projects.slice(0, visibleCount).map((project) => (
        <LightingProjectCard key={project.slug} project={project} />
      ))}

      <div className="flex items-center gap-10 mt-4">
        {hasMore && (
          <button
            type="button"
            onClick={handleShowMore}
            className="flex items-center gap-5 text-[#28FFE3] text-[21px] font-normal uppercase hover:opacity-80 transition-opacity"
          >
            <MoreLightSVG className="w-4 h-auto" />
            {t("more")}
          </button>
        )}
        {hasLess && (
          <button
            type="button"
            onClick={handleShowLess}
            className="flex items-center gap-5 text-[#28FFE3] text-[21px] font-normal uppercase hover:opacity-80 transition-opacity"
          >
            <MoreLightSVG className="w-4 h-auto rotate-180" />
            {t("less")}
          </button>
        )}
      </div>
    </div>
  )
}
