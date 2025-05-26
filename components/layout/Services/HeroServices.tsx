import TriangleDown from "@/components/SVG/TriangleDown"
import UniqueButton from "@/components/UI/Buttons/UniqueButton"
import { useLocale, useTranslations } from "next-intl"
import { Link as LinkView } from "next-view-transitions"
import MainTitle from "./MainTitle"
import MainTitleES from "./MainTitleES"

function HeroServices() {
  const t = useTranslations("ServicesPage.HeroSection")
  const locale = useLocale()

  return (
    <article className="w-full laptop:flex laptop:flex-row justify-center items-center mt-[180px] relative px-0 tablet:px-8">
      <section className="max-w-screen-desktoplg mx-auto flex w-full flex-col items-center relative z-20">
        <div className="hidden-mobile laptop:absolute laptop:left-0 laptop:top-[20%] flex justify-start w-full laptop:w-auto">
          <TriangleDown />
        </div>
        {locale === "es" ? <MainTitleES /> : <MainTitle />}
        <h2
          className={`tablet:text-[20px] laptop:text-[34px] text-center ${locale === "es" ? "max-w-[290px] tablet:max-w-[350px] laptop:max-w-[590px] my-[50px]" : "max-w-[230px] tablet:max-w-[280px] laptop:max-w-[480px] my-[50px]"}`}
        >
          {t("title_1")}
        </h2>
        <div id="contact-link">
          <UniqueButton href={`/${locale}/contact`} buttonStyle="primary">
            {t("button")}
          </UniqueButton>
        </div>
        <LinkView
          href={`/${locale}/contact`}
          className="hidden-mobile absolute tablet:top-[28.4%] tablet:right-[2%] laptop:top-[7%] laptop:right-[2%] desktop:right-[1%] transform translate-x-1/2 rotate-90 text-white laptop:text-base desktop:text-xl font-medium uppercase transition-colors hover:text-secondary z-10"
        >
          {t("contact")}
        </LinkView>
        <div className="hidden-mobile laptop:absolute laptop:left-0 laptop:top-[20%] laptop:right-0 flex justify-end w-full laptop:w-auto">
          <TriangleDown />
        </div>
      </section>
    </article>
  )
}

export default HeroServices
