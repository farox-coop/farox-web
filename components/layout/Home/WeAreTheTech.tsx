import TriangleDown from "@/components/SVG/TriangleDown"
import UniqueButton from "@/components/UI/Buttons/UniqueButton"
import { useLocale, useTranslations } from "next-intl"

export default function WeAreTheTech() {
  const locale = useLocale()
  const t = useTranslations("HomeSection.WeAreTheTech")

  return (
    <article className="flex w-full justify-center items-center px-8 pt-28 gap-16 pb-24 laptop:pb-0">
      <div className="flex flex-row justify-center items-center w-full max-w-screen-desktoplg">
        <div className="hidden tablet:block mb-96">
          <TriangleDown />
        </div>
        <section className="flex flex-col w-full justify-center items-center gap-16">
          <h1 className="text-center text-2xl tablet:text-5xl font-medium max-w-[210px] tablet:max-w-[790px] leading-8 tablet:leading-[48px] text-primary">
            {t("title")}
          </h1>
          <p
            className={`text-center text-2xl tablet:text-5xl font-light ${locale === "es" ? "max-w-[320px] tablet:max-w-[638px]" : "max-w-[252px] tablet:max-w-[520px]"} leading-8 tablet:leading-[48px]`}
          >
            <span className="block">{t("description_1")}</span>
            <span className="block">{t("description_2")}</span>
          </p>
          <UniqueButton href={`/${locale}/contact`} buttonStyle="primary">
            {t("button")}
          </UniqueButton>
        </section>
        <div className="hidden tablet:block mb-96">
          <TriangleDown />
        </div>
      </div>
    </article>
  )
}
