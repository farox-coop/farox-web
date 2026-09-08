"use client"
import { motion } from "framer-motion"
import type { LightProject } from "@/types/light-project.type"
import { useLocale, useTranslations } from "next-intl"
import Link from "next/link"

const ACCESS_BUTTON_BG = "linear-gradient(to right, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.79) 48%, #000000 100%)"

const VARIANT_STYLES = {
  light: {
    background: "linear-gradient(to right, rgba(241,241,241,1) 0%, rgba(241,241,241,0.6) 100%)",
    borderImage: "linear-gradient(to right, #F1F1F1 0%, #28FFE3 100%)",
    textColor: "text-[#020202]",
    learnMoreBg: ACCESS_BUTTON_BG,
    learnMoreText: "text-white",
    accessHoverClass: "transition-opacity hover:opacity-80",
    learnMoreHoverClass: "transition-opacity hover:opacity-80",
  },
  dark: {
    background:
      "linear-gradient(to right, #000000 0%, #000202 19%, #010c0a 32%, #041b18 43%, #07322c 54%, #0c4f46 64%, #117265 74%, #189c8b 83%, #1fcbb5 92%, #28ffe3 100%)",
    borderImage: "linear-gradient(to right, #28FFE3 0%, #F1F1F1 100%)",
    textColor: "text-[#ffffff]",
    learnMoreBg: "linear-gradient(to right, #f1f1f1 0%, rgba(241,241,241,0.6) 100%)",
    learnMoreText: "text-[#020202]",
    accessHoverClass: "hover:[background:#000000]!",
    learnMoreHoverClass: "hover:[background:#ffffff]!",
  },
} as const

type ProjectCardVariant = keyof typeof VARIANT_STYLES

interface ProjectCardProps {
  project: LightProject
  variant: ProjectCardVariant
  eyebrowText: string
}

export default function ProjectCard({ project, variant, eyebrowText }: ProjectCardProps) {
  const locale = useLocale()
  const t = useTranslations("LightProjectsPage.ListingPage")
  const styles = VARIANT_STYLES[variant]
  const accessUrl = project.url_web || project.url_gh
  const accessLabel = project.url_web ? t("accessWeb", { title: project.title }) : t("accessGithub")

  return (
    <motion.article
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="w-full max-w-7xl laptop:h-75 desktop:h-87.75 flex flex-col laptop:flex-row laptop:items-center justify-center laptop:justify-between gap-6 laptop:gap-0 px-6 py-6 laptop:py-0 laptop:px-10 desktop:px-12.5 shrink-0 border border-solid"
      style={{ background: styles.background, borderImage: `${styles.borderImage} 1` }}
    >
      <div className="flex flex-col gap-3 laptop:gap-4 desktop:gap-5 laptop:max-w-162.5 desktop:max-w-200">
        <p className={`${styles.textColor} text-[17px] laptop:text-[22px] font-normal capitalize tracking-[0.15em]`}>
          {eyebrowText}
        </p>
        <h3 className={`${styles.textColor} text-[25px] laptop:text-[46px] font-bold leading-tight`}>
          {project.title}
        </h3>
        <p
          className={`${styles.textColor} text-[16px] laptop:text-[22px] font-light leading-relaxed max-w-140 pr-2 laptop:pr-0`}
        >
          {project.description}
        </p>
      </div>

      <div className="flex flex-row w-full justify-between laptop:w-auto laptop:justify-start gap-2 laptop:gap-3">
        {accessUrl && (
          <a
            href={accessUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`w-35 laptop:w-42.5 desktop:w-49 h-10 laptop:h-12 desktop:h-13.75 flex items-center justify-center text-white text-[12px] laptop:text-[16px] font-medium tracking-wider ${styles.accessHoverClass}`}
            style={{ background: ACCESS_BUTTON_BG }}
          >
            {accessLabel}
          </a>
        )}
        <Link
          href={`/${locale}/light-projects/${project.slug}`}
          className={`w-35 laptop:w-42.5 desktop:w-49 h-10 laptop:h-12 desktop:h-13.75 flex items-center justify-center ${styles.learnMoreText} text-[12px] laptop:text-[16px] font-medium capitalize tracking-wider ${styles.learnMoreHoverClass}`}
          style={{ background: styles.learnMoreBg }}
        >
          {t("learnMore")}
        </Link>
      </div>
    </motion.article>
  )
}
