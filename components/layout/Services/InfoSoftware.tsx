import AllCircleGraySVG from "@/components/SVG/AllCircleGraySVG"
import UniqueButton from "@/components/UI/Buttons/UniqueButton"
import TrinagleComponent from "@/components/UI/Triangle/TriangleComponent"
import { useLocale, useTranslations } from "next-intl"

export default function InfoSoftware() {
  const t = useTranslations("ServicesPage.InfoSoftware")
  const locale = useLocale()

  return (
    <article className="w-full bg-white relative px-8 tablet:scroll-mt-5" id="software-consultancy">
      <section className="max-w-screen-desktoplg relative mx-auto mt-1.5 laptop:mt-48 flex w-full flex-col items-center pb-57.5 tablet:pb-64">
        <div className="flex flex-col-reverse laptop:flex-row w-full justify-between">
          <h2 className="text-[28px] text-center laptop:text-left laptop:text-[65px] desktop:text-[75px] font-bold leading-none text-black">
            <span className="block">{t("title_1")}</span>
            <span className="block laptop:pl-20">{t("title_2")}</span>
          </h2>
          <div className="h-auto w-28 laptop:w-75.75 desktop:w-95.75 mb-12.5 laptop:mb-0 ml-auto">
            <AllCircleGraySVG />
          </div>
        </div>
        <div className="flex flex-col text-base laptop:flex-row laptop:gap-15 w-full mt-9.5 laptop:text-2xl desktop:text-3xl desktoplg:text-[34px] text-black max-w-75 tablet:max-w-full">
          <div className="flex-1 w-full tablet:px-37.5 laptop:px-0 laptop:leading-9">
            <p className="laptop:pl-10">
              <span className="text-primary">{t("line_1")}</span>
              {t("line_2")}
            </p>
          </div>
          <div className="flex-1 w-full tablet:px-37.5 laptop:px-0 laptop:leading-9">
            <p className="laptop:pr-10">{t("line_3")}</p>
          </div>
        </div>
        <UniqueButton href={`/${locale}/contact`} buttonStyle="primary" className="mt-20">
          {t("button")}
        </UniqueButton>
      </section>
      <div className="absolute -bottom-1 left-0 right-0">
        <TrinagleComponent color="#f1f1f1" />
      </div>
    </article>
  )
}
