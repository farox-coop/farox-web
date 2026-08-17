"use client"
import type { LightingProject } from "@/types/lighting-project.type"
import { useLocale } from "next-intl"
import Link from "next/link"

export default function LightingProjectCard({ project }: { project: LightingProject }) {
  const locale = useLocale()

  return (
    <article
      className="w-[1432px] h-[351px] flex items-center justify-between px-[50px] shrink-0"
      style={{
        background: "linear-gradient(to right, rgba(241,241,241,1) 0%, rgba(241,241,241,0.6) 100%)",
      }}
    >
      <div className="flex flex-col gap-5 max-w-[800px]">
        <p className="text-[#020202] text-[28px] font-normal capitalize tracking-[0.15em]">
          SCHEDULE YOUR MEETING
        </p>
        <h3 className="text-[#020202] text-[52px] font-bold leading-tight">
          {project.title}
        </h3>
        <p className="text-[#020202] text-[25px] font-light leading-relaxed">
          {project.description}
        </p>
      </div>

      <div className="flex gap-3">
        {project.url_gh && (
          <a
            href={project.url_gh}
            target="_blank"
            rel="noopener noreferrer"
            className="w-[196px] h-[55px] flex items-center justify-center text-white text-[16px] font-medium capitalize tracking-wider hover:opacity-80 transition-opacity"
            style={{ background: "linear-gradient(to right, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.79) 48%, #000000 100%)" }}
          >
            Access GitHub
          </a>
        )}
        {project.url_web && (
          <a
            href={project.url_web}
            target="_blank"
            rel="noopener noreferrer"
            className="w-[196px] h-[55px] flex items-center justify-center text-white text-[16px] font-medium capitalize tracking-wider hover:opacity-80 transition-opacity"
            style={{ background: "linear-gradient(to right, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.79) 48%, #000000 100%)" }}
          >
            Access {project.title}
          </a>
        )}
        <Link
          href={`/${locale}/lighting-projects/${project.slug}`}
          className="w-[196px] h-[55px] flex items-center justify-center text-white text-[16px] font-medium capitalize tracking-wider hover:opacity-80 transition-opacity"
          style={{ background: "linear-gradient(to right, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.79) 48%, #000000 100%)" }}
        >
          Learn More
        </Link>
      </div>
    </article>
  )
}
