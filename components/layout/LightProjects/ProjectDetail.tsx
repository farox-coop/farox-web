"use client"
import ArrowUpRightSVG from "@/components/SVG/ArrowUpRightSVG"
import Spinner from "@/components/SVG/Spinner"
import { useLightProjectsStore } from "@/store/useLightProjectsStore"
import { useNotSoLightStore } from "@/store/useNotSoLightStore"
import type { LightProject } from "@/types/light-project.type"
import { fetchLightProjects } from "@/utils/fetchLightProjects"
import { fetchNotSoLightProjects } from "@/utils/fetchNotSoLightProjects"
import { useLocale, useTranslations } from "next-intl"
import Link from "next/link"
import { useEffect, useState } from "react"
import ProjectImageGallery from "./ProjectImageGallery"

export default function ProjectDetail({ slug }: { slug: string }) {
  const [project, setProject] = useState<LightProject | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const locale = useLocale()
  const t = useTranslations("LightProjectsPage.DetailPage")
  const lightProjects = useLightProjectsStore((s) => s.projects)
  const lightLocale = useLightProjectsStore((s) => s.currentLocale)
  const darkProjects = useNotSoLightStore((s) => s.projects)
  const darkLocale = useNotSoLightStore((s) => s.currentLocale)

  useEffect(() => {
    let isMounted = true

    const findProject = () => {
      const all = [...useLightProjectsStore.getState().projects, ...useNotSoLightStore.getState().projects]
      return all.find((p) => p.slug === slug) || null
    }

    const needsLight = lightProjects.length === 0 || lightLocale !== locale
    const needsDark = darkProjects.length === 0 || darkLocale !== locale

    if (!needsLight && !needsDark) {
      setProject(findProject())
      setLoading(false)
      return () => {
        isMounted = false
      }
    }

    setLoading(true)
    const noop = () => {}
    Promise.all([
      needsLight ? fetchLightProjects(locale, noop, noop) : Promise.resolve(),
      needsDark ? fetchNotSoLightProjects(locale, noop, noop) : Promise.resolve(),
    ])
      .then(() => {
        if (isMounted) {
          setProject(findProject())
        }
      })
      .catch((error) => {
        if (isMounted) {
          setProject(null)
          console.error("Error fetching projects:", error)
        }
      })
      .finally(() => {
        if (isMounted) {
          setLoading(false)
        }
      })

    return () => {
      isMounted = false
    }
  }, [locale, slug, lightProjects, lightLocale, darkProjects, darkLocale])

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center w-full h-screen">
        <article className="flex flex-col justify-center items-center max-w-4xl p-6 md:p-8 z-10">
          <div className="grid w-full place-items-center">
            <Spinner />
          </div>
          <p className="text-xl text-white">{t("location")}</p>
        </article>
      </div>
    )
  }

  if (!project) {
    return (
      <div className="flex flex-col items-center justify-center w-full h-screen">
        <article className="max-w-4xl mx-auto p-6 md:p-8 z-10 text-center">
          <p className="text-xl text-white">{t("projectNotFound")}</p>
          <Link href={`/${locale}/light-projects`} className="text-secondary hover:underline text-lg">
            {t("backToList")}
          </Link>
        </article>
      </div>
    )
  }

  return (
    <main className="flex flex-col justify-center items-center w-full relative h-full">
      <article className="flex flex-col justify-center items-center w-full mx-auto rounded-lg px-4 laptop:px-8 min-[1310px]:px-0 z-10 pb-20">
        <header className="w-full pt-36 tablet:pt-20 text-center">
          <h1 className="text-3xl tablet:text-5xl laptop:text-[93px] font-semibold text-white">{project.title}</h1>
          <p className="text-lg tablet:text-3xl laptop:text-[33px] text-gray-300 text-center mt-10 tablet:mt-16 mb-10 max-w-248.5 mx-auto">
            {project.description}
          </p>
        </header>
        <section className="flex flex-col items-center w-full gap-8">
          <ProjectImageGallery images={project.url_img} title={project.title} />
          {project.url_web && (
            <a
              href={project.url_web}
              target="_blank"
              rel="noopener noreferrer"
              className="w-35 laptop:w-42.5 desktop:w-49 h-10 laptop:h-12 desktop:h-13.75 flex items-center justify-center text-[#020202] text-[12px] laptop:text-[16px] font-medium capitalize tracking-wider hover:[background:#ffffff]! mt-10"
              style={{ background: "linear-gradient(to right, #f1f1f1 0%, rgba(241,241,241,0.6) 100%)" }}
            >
              {t("discoverProject", { title: project.title })}
            </a>
          )}
          <p className="text-lg tablet:text-3xl laptop:text-[33px] text-gray-300 text-center mt-10 tablet:mt-16 mb-10 max-w-248.5 mx-auto">
            {project.intro}
          </p>
          <section className="w-full max-w-7xl flex flex-col laptop:flex-row items-center justify-between gap-10 laptop:gap-0">
            <div className="flex flex-col gap-16 max-w-202.5">
              {project.features.map((feature) => (
                <div key={feature.title} className="flex flex-col items-start gap-1">
                  <span className="block w-6 h-6 text-secondary rotate-180 -scale-x-100">
                    <ArrowUpRightSVG />
                  </span>
                  <p className="text-white font-semibold text-lg tablet:text-xl pl-8">{feature.title}</p>
                  <p className="text-gray-300 pl-8">{feature.description}</p>
                </div>
              ))}
            </div>
            {project.url_gh && (
              <a
                href={project.url_gh}
                target="_blank"
                rel="noopener noreferrer"
                className="w-35 laptop:w-42.5 desktop:w-49 h-10 laptop:h-12 desktop:h-13.75 flex items-center justify-center border border-solid bg-transparent text-white text-[12px] laptop:text-[16px] font-medium capitalize tracking-wider hover:opacity-80 transition-opacity mt-10 laptop:mt-0"
                style={{ borderImage: "linear-gradient(to right, #28FFE3 0%, #F1F1F1 100%) 1" }}
              >
                {t("accessGithub")}
              </a>
            )}
          </section>
        </section>
      </article>
    </main>
  )
}
