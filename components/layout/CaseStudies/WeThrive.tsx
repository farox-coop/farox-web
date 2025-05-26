"use client"
import CirleMoreSVG from "@/components/SVG/CircleMoreSVG"
import FilterButton from "@/components/UI/Buttons/FilterButton"
import { useCaseStudiesStore } from "@/store/useCaseStudiesStore"
import type { CaseStudy } from "@/types/casestudy.type"
import { fetchCaseStudies } from "@/utils/fetchCaseStudies"
import { nanoid } from "nanoid"
import { useLocale, useTranslations } from "next-intl"
import { useEffect, useState } from "react"
import FeatProjectCard from "../Services/FeatProjectCard"

function WeThrive({ filter }: { filter: string }) {
  const t = useTranslations("CaseStudiesPage.WeThrive")
  const locale = useLocale()
  const [moreCase, setMoreCase] = useState(4)
  const decodedFilter = decodeURIComponent(filter).toLowerCase().trim()
  const [filterState, setFilterState] = useState(decodedFilter)

  const { caseStudies, setIsLoading, setError, currentLocale } = useCaseStudiesStore()
  useEffect(() => {
    if (caseStudies.length === 0 || currentLocale !== locale) {
      fetchCaseStudies(locale, setIsLoading, setError)
    }
  }, [locale, fetchCaseStudies, setIsLoading, setError, caseStudies.length, currentLocale])

  const handleFilterChange = (filter: string) => {
    setFilterState((current) => (current === filter ? "all" : filter))
  }

  const filteredData = (data: CaseStudy[]) => {
    if (filterState === "all") {
      return data
    }
    return data.filter((item) =>
      item.tags.some((tag: string) => {
        const normalizedTag = tag?.toLowerCase().trim() ?? ""
        const normalizedFilter = filterState.toLowerCase().trim()
        if (normalizedFilter === "free software" || normalizedFilter === "software libre") {
          return normalizedTag === "free software" || normalizedTag === "software libre"
        }
        return normalizedTag === normalizedFilter
      }),
    )
  }
  const filteredItems = filteredData(caseStudies)
  const disableButton = filteredItems.length <= moreCase

  return (
    <article className="w-full bg-[#f1f1f1] mb-28 px-0 tablet:px-8 scroll-mt-[-79px]" id="we-thrive">
      <section className="max-w-screen-desktoplg relative mx-auto mt-48 flex w-full flex-col items-center">
        <div className="flex flex-row w-full z-20">
          <div className="flex-0 tablet:flex-1 w-full">
            <h2 className="flex flex-row justify-center tablet:flex-col text-5xl tablet:text-6xl desktop:text-7xl font-bold leading-none text-black">
              <span className="block">{t("title_1")}</span>
              <span className="block pl-4 tablet:pl-16 desktop:pl-20">{t("title_2")}</span>
            </h2>
          </div>
          <div className="flex-1 w-full" />
        </div>
        <div className="flex flex-wrap gap-2 justify-center items-center z-20 my-4 w-full max-w-[370px] tablet:max-w-screen-desktop">
          <FilterButton
            filter="dse-ia"
            setFilterState={handleFilterChange}
            title="DSE - IA"
            isActive={filterState === "dse-ia"}
          />
          <FilterButton
            filter="backend"
            setFilterState={handleFilterChange}
            title="BACKEND"
            isActive={filterState === "backend"}
          />
          <FilterButton
            filter="full-stack"
            setFilterState={handleFilterChange}
            title="FULL - STACK"
            isActive={filterState === "full-stack"}
          />
          <FilterButton
            filter={"free software"}
            setFilterState={handleFilterChange}
            title={t("button_filter_1")}
            isActive={filterState === "free software"}
          />
        </div>
        {(filterState === "free software" || filterState === "software libre") && (
          <div className="max-w-[1050px] my-4 z-20 px-4">
            <p className="text-base tablet:text-xl laptop:text-2xl desktop:text-[34px] text-balance text-center">
              {t("description_1")}
            </p>
          </div>
        )}
        <div className="flex flex-wrap flex-col laptop:flex-row justify-center items-center gap-7 mt-10 z-20">
          {filteredItems.slice(0, moreCase).map((item) => {
            const uniqueKey = nanoid()
            return (
              <FeatProjectCard
                key={`wethrive-${uniqueKey}`}
                title={item.client.toUpperCase()}
                url={`/${locale}/detail/${item.slug}`}
                description={item.description.short}
              />
            )
          })}
        </div>
        <button
          type="button"
          className="my-4 z-20 hover:text-primary transition-colors duration-200"
          hidden={disableButton}
          onClick={() => {
            setMoreCase(filteredItems.length)
          }}
        >
          <span className="w-[52px] h-auto block mt-2">
            <CirleMoreSVG />
          </span>
        </button>
      </section>
    </article>
  )
}

export default WeThrive
