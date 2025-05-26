"use client"
import CirleMoreSVG from "@/components/SVG/CircleMoreSVG"
import { useCaseStudiesStore } from "@/store/useCaseStudiesStore"
import type { CaseStudy } from "@/types/casestudy.type"
import { fetchCaseStudies } from "@/utils/fetchCaseStudies"
import { nanoid } from "nanoid"
import { useLocale, useTranslations } from "next-intl"
import { useEffect, useState } from "react"
import FeatProjectCard from "../Services/FeatProjectCard"

function WeCollaborate() {
  const t = useTranslations("CulturePage.WeCollaborate")
  const locale = useLocale()
  const [moreCase, setMoreCase] = useState(4)
  const { caseStudies, setIsLoading, setError, currentLocale } = useCaseStudiesStore()

  useEffect(() => {
    if (caseStudies.length === 0 || currentLocale !== locale) {
      fetchCaseStudies(locale, setIsLoading, setError)
    }
  }, [locale, fetchCaseStudies, setIsLoading, setError, caseStudies.length, currentLocale])

  const filteredData = (caseStudies: CaseStudy[]) => {
    return caseStudies.filter((item) => item.tags.some((tag) => tag.toLowerCase() === "intercoop"))
  }
  const filteredItems = filteredData(caseStudies)
  const disableButton = filteredItems.length <= moreCase

  return (
    <article className="w-full bg-[#f1f1f1]">
      <section className="max-w-screen-desktoplg relative mx-auto my-[100px] flex w-full flex-col items-center">
        <div className="flex flex-row w-full z-20 px-8">
          <div className="flex-1 w-full">
            <h2 className="flex flex-row laptop:flex-col gap-4 laptop:gap-0 justify-center text-[27px] tablet:text-4xl laptop:text-6xl desktop:text-7xl text-center laptop:text-left font-bold leading-none text-black">
              <span className="block">{t("title_up")}</span>
              <span className="block pl-0 laptop:pl-[60px] desktop:pl-[70px]">{t("title_down")}</span>
            </h2>
          </div>
        </div>
        <div className="max-w-[1050px] my-4 z-20 tablet:px-[10px] talop:px-[15px] laptop:px-0">
          <p className="text-base tablet:text-xl laptop:text-2xl desktop:text-[34px] text-balance text-center">
            {t("description")}
          </p>
        </div>
        <div className="flex flex-wrap flex-col laptop:flex-row justify-center items-center gap-7 mt-10 z-20 px-4">
          {filteredItems.slice(0, moreCase).map((item) => {
            const uniqueKey = nanoid()
            return (
              <FeatProjectCard
                key={`wecollaborate-${uniqueKey}`}
                title={item.client.toUpperCase()}
                url={`/${locale}/detail/${item.slug}`}
                description={item.description.short}
              />
            )
          })}
        </div>
        <button
          type="button"
          className="mt-[40px] z-20 hover:text-primary transition-colors duration-200"
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

export default WeCollaborate
