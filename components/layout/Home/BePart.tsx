"use client"
import UniqueButton from "@/components/UI/Buttons/UniqueButton"
import { useCaseStudiesStore } from "@/store/useCaseStudiesStore"
import { fetchCaseStudies } from "@/utils/fetchCaseStudies"
import { useLocale, useTranslations } from "next-intl"
import { useEffect } from "react"

function BePart() {
  const t = useTranslations("HomeSection.BePart")
  const locale = useLocale()
  const { setIsLoading, setError, clearCaseStudies } = useCaseStudiesStore()

  useEffect(() => {
    clearCaseStudies()
    fetchCaseStudies(locale, setIsLoading, setError)
  }, [locale, clearCaseStudies])

  return (
    <article id="contact" className="w-full">
      <section className="max-w-screen-desktoplg mx-auto flex w-full flex-col items-center pb-2 bg-white">
        <div className="hidden laptop:flex tablet:w-[700px] laptop:w-auto  justify-center items-center h-auto mt-16 desktop:mt-[280px] tablet:mt-[150px] laptop:mt-[10.72rem]">
          <p className="uppercase w-[205px] laptop:w-auto text-center font-bold text-3xl tablet:text-5xl laptop:text-6xl desktop:text-[84px] leading-none">
            {t("title_1")} <br className="hidden tablet:block" />
            <span
              style={{
                WebkitTextStroke: "1px black",
                color: "white",
              }}
            >
              {t("title_2")}
            </span>
          </p>
        </div>
        <div className="laptop:hidden flex tablet:w-[500px] laptop:w-auto  justify-center items-center h-auto mt-16 desktop:mt-[280px] tablet:mt-[150px] laptop:mt-[10.72rem]">
          <h3 className="uppercase text-center font-bold text-[51px] laptop:text-6xl desktop:text-[84px] leading-none">
            {t("titleMobile_1")} <br />
            <span>{t("titleMobile_2")}</span>
            <span
              style={{
                WebkitTextStroke: "1px black",
                color: "white",
              }}
            >
              {" "}
              {t("titleMobile_3")}
            </span>{" "}
            <br />
            <span
              style={{
                WebkitTextStroke: "1px black",
                color: "white",
              }}
            >
              {t("titleMobile_4")}
            </span>
          </h3>
        </div>
        <div className="mt-5 px-20 laptop:px-0 tablet:mt-[70px] laptop:mt-[5.63rem] w-auto">
          <p className="text-center text-base tablet:text-2xl laptop:text-4xl desktop:text-5xl font-light">
            {t("line_1")} <br />
            {t("line_2")} <br /> {t("line_3")}
          </p>
        </div>
        <UniqueButton
          href={`/${locale}/culture#we-coop`}
          buttonStyle="primary"
          className="mt-12 tablet:mt-[70px] laptop:mt-[8.35rem]"
        >
          {t("text_button")}
        </UniqueButton>
      </section>
    </article>
  )
}

export default BePart
