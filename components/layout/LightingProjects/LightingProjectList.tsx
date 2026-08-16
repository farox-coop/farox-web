"use client"
import CirleMoreSVG from "@/components/SVG/CircleMoreSVG"
import Spinner from "@/components/SVG/Spinner"
import { useLightingProjectsStore } from "@/store/useLightingProjectsStore"
import { fetchLightingProjects } from "@/utils/fetchLightingProjects"
import { useLocale, useTranslations } from "next-intl"
import { useEffect, useState } from "react"
import LightingProjectCard from "./LightingProjectCard"

export default function LightingProjectList() {
  const [loading, setLoading] = useState(false)
  const [showAllProjects, setShowAllProjects] = useState(false)
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
          <p className="text-xl text-white">{t("loading")}</p>
        </article>
      </div>
    )
  }

  if (error || (!loading && projects.length === 0)) {
    return <div className="py-10 text-center text-xl text-white">{t("noProjectsAvailable")}</div>
  }

  const projectsToShow = showAllProjects ? projects : projects.slice(0, 4)

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-16 max-w-screen-desktop mx-auto z-40">
        {projectsToShow.map((project) => (
          <LightingProjectCard key={project.slug} project={project} />
        ))}
      </div>
      {!showAllProjects && projects.length > 4 && (
        <button
          type="button"
          className="my-4 mx-auto z-20 hover:text-primary transition-colors duration-200"
          onClick={() => setShowAllProjects(true)}
        >
          <span className="w-[52px] h-auto block mt-2">
            <CirleMoreSVG />
          </span>
        </button>
      )}
    </>
  )
}
