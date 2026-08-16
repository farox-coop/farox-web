"use client"
import ArrowCardSVG from "@/components/SVG/ArrowCardSVG"
import type { LightingProject } from "@/types/lighting-project.type"
import { useLocale, useTranslations } from "next-intl"
import Image from "next/image"
import Link from "next/link"

export default function LightingProjectCard({ project }: { project: LightingProject }) {
  const locale = useLocale()
  const t = useTranslations("LightingProjectsPage.ListingPage")

  return (
    <Link href={`/${locale}/lighting-projects/${project.slug}`}>
      <article className="bg-[#1a1a1a] overflow-hidden hover:shadow-lg transition-shadow duration-300 w-[344px] desktop:w-[454px] flex flex-col justify-between relative fill-primary hover:fill-secondary">
        {project.url_img && (
          <header className="relative h-[270px] mx-4 desktop:mx-5 mt-4 desktop:mt-5">
            <Image
              src={project.url_img}
              alt={project.title}
              fill
              sizes="(max-width: 767px) 344px, (max-width: 1365px) 344px, 454px"
              className="object-cover"
            />
          </header>
        )}
        <section className="px-4 desktop:px-5 pt-3 desktop:pt-6 pb-1 laptop:pb-5 desktop:pb-10 flex-1">
          <div className="text-base laptop:text-lg desktop:text-xl leading-[1.2] h-[2.4em] mb-2 overflow-hidden">
            <h2 className="font-bold text-white uppercase line-clamp-2">{project.title}</h2>
          </div>
          <p className="text-gray-300 line-clamp-3 text-sm laptop:text-base">{project.description}</p>
          {project.location && (
            <p className="text-gray-400 text-xs mt-2 uppercase">
              {t("location")}: {project.location}
            </p>
          )}
        </section>
        <footer className="px-4 desktop:px-5 pt-3 desktop:pt-4 pb-4 desktop:pb-6 flex items-start justify-between">
          <div className="flex gap-1 flex-wrap flex-1">
            {project.tags?.map((tag) => (
              <span key={tag} className="bg-black text-white text-xs px-2 py-1 uppercase flex-shrink-0">
                {tag}
              </span>
            ))}
          </div>
          <div className="w-[18px] laptop:w-[20px] desktop:w-[30px] h-auto self-end">
            <ArrowCardSVG />
          </div>
        </footer>
      </article>
    </Link>
  )
}
