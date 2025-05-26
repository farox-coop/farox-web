"use client"
import TriangleDown from "@/components/SVG/TriangleDown"
import UniqueButton from "@/components/UI/Buttons/UniqueButton"
import { useCaseStudiesStore } from "@/store/useCaseStudiesStore"
import { fetchCaseStudies } from "@/utils/fetchCaseStudies"
import { nanoid } from "nanoid"
import { useLocale, useTranslations } from "next-intl"
import React, { useEffect } from "react"
import FeatProjectCard from "./FeatProjectCard"

function FeaturedProjects() {
  const t = useTranslations("ServicesPage.FeaturedProjects")
  const locale = useLocale()
  const { caseStudies, setIsLoading, setError, currentLocale } = useCaseStudiesStore()

  useEffect(() => {
    if (caseStudies.length === 0 || currentLocale !== locale) {
      fetchCaseStudies(locale, setIsLoading, setError)
    }
  }, [locale, fetchCaseStudies, setIsLoading, setError, caseStudies.length, currentLocale])

  const dataCase = caseStudies
    .sort((a, b) => (a.order || Number.POSITIVE_INFINITY) - (b.order || Number.POSITIVE_INFINITY))
    .slice(0, 4)

  return (
    <article className="w-full bg-white">
      <section className="max-w-screen-desktoplg relative mx-auto mt-20 tablet:mt-48 flex w-full flex-col items-center">
        <h2 className="text-[28px] tablet:text-[62px] text-center leading-none px-48 tablet:px-36 laptop:px-0 laptop:text-[75px] font-bold mb-4">
          {t("title_1")}
        </h2>
        <TriangleDown />
        <div className="flex flex-wrap flex-col laptop:px-[100px] desktop:px-0 laptop:flex-row justify-center items-center gap-7 mt-10">
          {dataCase.map((item) => {
            const uniqueKey = nanoid()
            return (
              <FeatProjectCard
                key={`freatured-${uniqueKey}`}
                title={item.client.toUpperCase()}
                description={item.description.short}
                url={`/${locale}/detail/${item.slug}`}
              />
            )
          })}
        </div>
        <UniqueButton href={`/${locale}/case-studies/all`} buttonStyle="primary" className="my-10">
          {t("button")}
        </UniqueButton>
      </section>
    </article>
  )
}

export default FeaturedProjects
