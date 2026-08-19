"use client"
import Spinner from "@/components/SVG/Spinner"
import { useNotSoLightStore } from "@/store/useNotSoLightStore"
import { fetchNotSoLightProjects } from "@/utils/fetchNotSoLightProjects"
import { useLocale, useTranslations } from "next-intl"
import { useEffect, useState } from "react"
import NotSoLightCard from "./NotSoLightCard"

export default function NotSoLightList() {
  const [loading, setLoading] = useState(false)
  const locale = useLocale()
  const t = useTranslations("LightingProjectsPage.ListingPage")
  const [error, setError] = useState<string | null>(null)
  const { projects, currentLocale } = useNotSoLightStore()

  useEffect(() => {
    if (currentLocale !== locale || projects.length === 0) {
      fetchNotSoLightProjects(locale, setLoading, setError)
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
      {projects.slice(0, 2).map((project) => (
        <NotSoLightCard key={project.slug} project={project} />
      ))}
    </div>
  )
}
