"use client"
import Spinner from "@/components/SVG/Spinner"
import { useLightingProjectsStore } from "@/store/useLightingProjectsStore"
import { fetchLightingProjects } from "@/utils/fetchLightingProjects"
import { useLocale, useTranslations } from "next-intl"
import { useEffect, useState } from "react"
import LightingProjectCard from "./LightingProjectCard"

export default function LightingProjectList() {
  const [loading, setLoading] = useState(false)
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

  return (
    <div className="flex flex-col items-center gap-10 w-full z-40">
      {projects.slice(0, 4).map((project) => (
        <LightingProjectCard key={project.slug} project={project} />
      ))}
    </div>
  )
}
