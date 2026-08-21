"use client"
import Spinner from "@/components/SVG/Spinner"
import { useLightingProjectsStore } from "@/store/useLightingProjectsStore"
import type { LightingProject } from "@/types/lighting-project.type"
import { fetchLightingProjects } from "@/utils/fetchLightingProjects"
import { useLocale, useTranslations } from "next-intl"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import MarkdownRenderer from "../Blog/MarkdownRenderer"

export default function LightingProjectDetail({ slug }: { slug: string }) {
  const [project, setProject] = useState<LightingProject | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const locale = useLocale()
  const t = useTranslations("LightingProjectsPage.DetailPage")
  const { projects } = useLightingProjectsStore()

  useEffect(() => {
    let isMounted = true

    if (projects.length > 0) {
      const currentProject = projects.find((p) => p.slug === slug || p.aliases?.includes(slug))
      setProject(currentProject || null)
      setLoading(false)
    } else {
      fetchLightingProjects(locale, setLoading, () => {})
        .then(() => {
          if (!isMounted) {
            return
          }
          const updatedProjects = useLightingProjectsStore.getState().projects
          const currentProject = updatedProjects.find((p) => p.slug === slug || p.aliases?.includes(slug))
          setProject(currentProject || null)
        })
        .catch((error) => {
          if (isMounted) {
            setProject(null)
            setLoading(false)
            console.error("Error fetching lighting projects:", error)
          }
        })
    }

    return () => {
      isMounted = false
    }
  }, [locale, slug, projects])

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
          <Link href={`/${locale}/lighting-projects`} className="text-secondary hover:underline text-lg">
            {t("backToList")}
          </Link>
        </article>
      </div>
    )
  }

  return (
    <main className="flex flex-col justify-center items-center w-full relative h-full px-2">
      <article className="flex flex-col justify-center items-center max-w-screen-2xl mx-auto rounded-lg px-4 z-10 pb-20">
        <header className="w-full max-w-screen-xl pt-36 tablet:pt-72 text-center">
          <h1 className="text-3xl tablet:text-5xl laptop:text-7xl font-semibold text-white uppercase">
            {project.title}
          </h1>
          <p className="text-lg tablet:text-3xl text-gray-300 text-center mt-10 tablet:mt-16 mb-10 tablet:mb-24">
            {project.description}
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400 uppercase mb-10">
            {project.location && (
              <span>
                {t("location")}: {project.location}
              </span>
            )}
            {project.client && (
              <span>
                {t("client")}: {project.client}
              </span>
            )}
          </div>
        </header>
        <section className="flex flex-col items-center w-full max-w-screen-xl gap-8">
          {Array.isArray(project.url_img) ? (
            project.url_img.filter(Boolean).map((img, i) => (
              <div key={i} className="w-full max-w-[1280px] aspect-[1280/720] relative">
                <Image
                  src={img}
                  alt={`${project.title} ${i + 1}`}
                  fill
                  sizes="(max-width: 1280px) 100vw, 1280px"
                  className="object-cover object-center"
                />
              </div>
            ))
          ) : project.url_img ? (
            <div className="w-full max-w-[1280px] aspect-[1280/720] relative">
              <Image
                src={project.url_img}
                alt={project.title}
                fill
                sizes="(max-width: 1280px) 100vw, 1280px"
                className="object-cover object-center"
              />
            </div>
          ) : null}
          <div className="prose max-w-3xl">
            <MarkdownRenderer content={project.markdownContent || ""} />
          </div>
        </section>
        {project.tags && project.tags.length > 0 && (
          <div className="flex gap-1 flex-wrap mt-10 w-full max-w-3xl">
            {project.tags.map((tag) => (
              <span key={tag} className="bg-black text-white text-sm px-[2px] py-[1px] uppercase flex-shrink-0">
                {tag}
              </span>
            ))}
          </div>
        )}
        {project.technologies && project.technologies.length > 0 && (
          <div className="flex flex-col mt-6 w-full max-w-3xl">
            <p className="text-sm uppercase font-semibold mb-2">{t("technologies")}:</p>
            <div className="flex gap-2 flex-wrap">
              {project.technologies.map((tech) => (
                <span key={tech} className="bg-primary/10 text-primary text-sm px-3 py-1 uppercase flex-shrink-0">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}
      </article>
    </main>
  )
}
