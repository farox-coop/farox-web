"use client"
import MoreLightSVG from "@/components/SVG/MoreLightSVG"
import Spinner from "@/components/SVG/Spinner"
import { useLightProjectsStore } from "@/store/useLightProjectsStore"
import { fetchLightProjects } from "@/utils/fetchLightProjects"
import { useLocale, useTranslations } from "next-intl"
import { useEffect, useState } from "react"
import ProjectCard from "./ProjectCard"

const INITIAL_VISIBLE = 4
const LOAD_MORE_COUNT = 2

export default function LightProjectList() {
  const [loading, setLoading] = useState(false)
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE)
  const locale = useLocale()
  const t = useTranslations("LightProjectsPage.ListingPage")
  const [error, setError] = useState<string | null>(null)
  const projects = useLightProjectsStore((s) => s.projects)
  const currentLocale = useLightProjectsStore((s) => s.currentLocale)

  useEffect(() => {
    if (currentLocale !== locale || projects.length === 0) {
      fetchLightProjects(locale, setLoading, setError)
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
    <div className="flex flex-col items-center gap-10 w-full z-40 px-4 laptop:px-8 min-[1310px]:px-0 mt-10 laptop:mt-0">
      {projects.slice(0, visibleCount).map((project) => (
        <ProjectCard key={project.slug} project={project} variant="light" eyebrowText={t("eyebrowMeeting")} />
      ))}

      <div className="flex items-center gap-10 mt-4">
        {hasMore && (
          <button
            type="button"
            onClick={handleShowMore}
            className="flex items-center gap-5 text-[#28FFE3] text-[21px] font-normal uppercase hover:opacity-80 transition-opacity cursor-pointer"
          >
            <MoreLightSVG className="w-4 h-auto" />
            {t("more")}
          </button>
        )}
        {hasLess && (
          <button
            type="button"
            onClick={handleShowLess}
            className="flex items-center gap-5 text-[#28FFE3] text-[21px] font-normal uppercase hover:opacity-80 transition-opacity cursor-pointer"
          >
            <MoreLightSVG className="w-4 h-auto rotate-180" />
            {t("less")}
          </button>
        )}
      </div>
    </div>
  )
}
