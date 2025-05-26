"use client"
import AllCircleGraySVG from "@/components/SVG/AllCircleGraySVG"
import UniqueButton from "@/components/UI/Buttons/UniqueButton"
import TrinagleComponent from "@/components/UI/Triangle/TriangleComponent"
import { useCaseStudiesStore } from "@/store/useCaseStudiesStore"
import { nanoid } from "nanoid"
import { useLocale, useTranslations } from "next-intl"
import CardCase from "./CardCase"

export default function WeBelieveCaseStudies() {
  const t = useTranslations("HomeSection.WeBelieveCaseStudies")
  const locale = useLocale()
  const { caseStudies } = useCaseStudiesStore()

  const dataCase = caseStudies
    .sort((a, b) => (a.order || Number.POSITIVE_INFINITY) - (b.order || Number.POSITIVE_INFINITY))
    .slice(0, 3)

  return (
    <section className="relative w-full" id="case-studies">
      <article className="flex flex-col w-full justify-center items-center px-8 pb-44 tablet:pb-80">
        <section className="flex flex-col w-full justify-center max-w-screen-desktoplg">
          <div className="flex flex-col laptop:flex-row justify-between w-full pr-8">
            <div
              className={`hidden laptop:flex flex-col justify-center 
                ${
                  locale === "es"
                    ? "w-[480px] laptop:w-[461px] desktop:w-[575px] desktoplg:w-[691px]"
                    : "w-[375px] desktop:w-[468px] desktoplg:w-[562px]"
                } 
                ${
                  locale === "es"
                    ? "leading-[46px] laptop:leading-[52px] desktop:leading-[64px] desktoplg:leading-[78px]"
                    : "leading-[40px] laptop:leading-[48px] desktop:leading-[60px] desktoplg:leading-[66px]"
                } text-5xl desktop:text-6xl desktoplg:text-7xl`}
            >
              <h3 className=" font-bold text-left">{t("title_1")}</h3>
              <h3 className=" font-bold text-right">{t("title_2")}</h3>
            </div>
            <div className="mx-auto laptop:mr-20 w-[165px] tablet:w-[260px] desktop:w-[368px]">
              <AllCircleGraySVG />
            </div>
          </div>
          <div
            className={`max-w-[348px] tablet:max-w-[650px] mx-auto ${locale === "es" ? "leading-[56px] tablet:leading-[74px] justify-center items-start tablet:items-center" : "leading-[48px] justify-center items-center"} text-[51px] tablet:text-6xl font-bold w-full flex flex-col laptop:hidden mt-24 laptop:mt-0`}
          >
            <h3>{t("title_1")},</h3>
            <h3 className="text-transparent" style={{ WebkitTextStroke: "1px black" }}>
              {t("title_2")}
            </h3>
          </div>
          <div className="flex flex-col laptop:flex-row justify-center items-center gap-5 mt-10 laptop:mt-16 desktop:mt-24">
            {dataCase.map((item) => {
              const uniqueKey = nanoid()
              return (
                <CardCase
                  key={`webelievecase-${uniqueKey}`}
                  title={item.client.toUpperCase()}
                  description={item.description.short}
                  url={`/${locale}/detail/${item.slug}`}
                />
              )
            })}
          </div>
        </section>
        <UniqueButton
          href={`/${locale}/case-studies/all`}
          buttonStyle="primary"
          className="mt-12 tablet:mt-16 desktop:mt-24"
        >
          {t("button")}
        </UniqueButton>
      </article>
      <div className="absolute bottom-0 left-0 right-0">
        <TrinagleComponent color="#f1f1f1" />
      </div>
    </section>
  )
}
