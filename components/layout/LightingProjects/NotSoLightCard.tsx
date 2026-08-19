"use client"
import type { LightingProject } from "@/types/lighting-project.type"
import { useLocale } from "next-intl"
import Link from "next/link"

const GRADIENT_BG = "linear-gradient(to right, #000000 0%, #000202 19%, #010c0a 32%, #041b18 43%, #07322c 54%, #0c4f46 64%, #117265 74%, #189c8b 83%, #1fcbb5 92%, #28ffe3 100%)"

export default function NotSoLightCard({ project }: { project: LightingProject }) {
  const locale = useLocale()

  return (
    <article
      className="w-full max-w-[1432px] h-[250px] laptop:h-[300px] desktop:h-[351px] flex items-center justify-between px-5 laptop:px-10 desktop:px-[50px] shrink-0 border border-white/30"
      style={{ background: GRADIENT_BG }}
    >
      <div className="flex flex-col gap-3 laptop:gap-4 desktop:gap-5 max-w-[500px] laptop:max-w-[650px] desktop:max-w-[800px]">
        <p className="text-[#ffffff] text-[16px] laptop:text-[22px] desktop:text-[28px] font-normal capitalize tracking-[0.15em]">
          TAKE CONTROL OF YOUR AI
        </p>
        <h3 className="text-[#ffffff] text-[28px] laptop:text-[40px] desktop:text-[52px] font-bold leading-tight">
          {project.title}
        </h3>
        <p className="text-[#ffffff] text-[14px] laptop:text-[20px] desktop:text-[25px] font-light leading-relaxed">
          {project.description}
        </p>
      </div>

      <div className="flex flex-col laptop:flex-row gap-2 laptop:gap-3">
        {project.url_web && (
          <a
            href={project.url_web}
            target="_blank"
            rel="noopener noreferrer"
            className="w-[140px] laptop:w-[170px] desktop:w-[196px] h-[40px] laptop:h-[48px] desktop:h-[55px] flex items-center justify-center text-white text-[12px] laptop:text-[14px] desktop:text-[16px] font-medium capitalize tracking-wider hover:opacity-80 transition-opacity"
            style={{ background: "linear-gradient(to right, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.79) 48%, #000000 100%)" }}
          >
            Access {project.title}
          </a>
        )}
        <Link
          href={`/${locale}/lighting-projects/${project.slug}`}
          className="w-[140px] laptop:w-[170px] desktop:w-[196px] h-[40px] laptop:h-[48px] desktop:h-[55px] flex items-center justify-center text-[#020202] text-[12px] laptop:text-[14px] desktop:text-[16px] font-medium capitalize tracking-wider hover:opacity-80 transition-opacity"
          style={{ background: "linear-gradient(to right, #f1f1f1 0%, rgba(241,241,241,0.6) 100%)" }}
        >
          Learn More
        </Link>
      </div>
    </article>
  )
}
