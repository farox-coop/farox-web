import TriangleDown from "@/components/SVG/TriangleDown"
import { useLocale, useTranslations } from "next-intl"
import { Link as LinkView } from "next-view-transitions"
import MainTitle from "./MainTitle"
import MainTitleES from "./MainTitleES"

function HeroServices() {
  const t = useTranslations("CulturePage.HeroSection")
  const locale = useLocale()

  return (
    <article className="w-full laptop:flex laptop:flex-row justify-center items-center mt-[180px] relative ">
      <section className="max-w-screen-desktoplg mx-auto flex w-full flex-col items-center relative z-20">
        <div className="hidden-mobile laptop:absolute laptop:left-0 laptop:top-[20%] flex justify-start w-full laptop:w-auto">
          <TriangleDown />
        </div>
        {locale === "es" ? <MainTitleES /> : <MainTitle />}
        <h2
          id="contact-link"
          className="tablet:text-[20px] laptop:text-[34px] text-center my-10 laptop:my-[80px] max-w-[160px] tablet:max-w-[200px] laptop:max-w-[660px]"
        >
          {t("title_2_up")}
          <br />
          {t("title_2_down")}
        </h2>
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
