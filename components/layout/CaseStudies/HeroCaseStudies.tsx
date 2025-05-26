import AHeroCaseSVG from "@/components/SVG/AHeroCaseSVG"
import TriangleDown from "@/components/SVG/TriangleDown"
import UniqueButton from "@/components/UI/Buttons/UniqueButton"
import { useLocale, useTranslations } from "next-intl"
import { Link as LinkView } from "next-view-transitions"
import MainTitle from "./MainTitle"
import MainTitleES from "./MainTitleES"

function HeroCaseStudies() {
  const t = useTranslations("CaseStudiesPage.HeroSection")
  const locale = useLocale()

  return (
    <article className="w-full laptop:flex laptop:flex-row justify-center items-center mt-[250px] mb-[81px] relative px-8">
      <section className="max-w-screen-desktoplg mx-auto flex w-full flex-col items-center relative">
        <div className="absolute -top-[550px] tablet:top-[-800px] laptop:top-[-1000px] desktop:top-[-1100px] desktoplg:top-[-1250px] h-auto w-[1557px] tablet:w-[2200px] laptop:w-[2600px] desktop:w-[3000px] desktoplg:w-[3443px] -right-0 left-[-90%] tablet:left-auto tablet:right-[-80%] laptop:right-[-60%] z-0">
          <AHeroCaseSVG />
        </div>
        <div className="hidden-mobile laptop:absolute laptop:left-0 laptop:top-[20%] flex justify-start w-full laptop:w-auto z-20">
          <TriangleDown />
        </div>
        {locale === "es" ? <MainTitleES /> : <MainTitle />}
        <h2 className="text-base tablet:text-xl laptop:text-2xl desktop:text-[34px] text-center my-10 tablet:my-16 laptop:my-20 z-20 max-w-[250px] tablet:max-w-[310px] laptop:max-w-[410px] desktop:max-w-[580px]">
          {t("title_1")}
        </h2>
        <LinkView
          href={`/${locale}/contact`}
          className="hidden-mobile absolute tablet:top-[28.4%] tablet:right-[2%] laptop:top-[0%] laptop:right-[2%] desktop:right-[1%] transform translate-x-1/2 rotate-90 text-black laptop:text-base desktop:text-xl font-medium uppercase transition-colors hover:text-primary z-20"
        >
          {t("contact")}
        </LinkView>
        <div className="hidden-mobile laptop:absolute laptop:left-0 laptop:top-[20%] laptop:right-0 flex justify-end w-full laptop:w-auto z-20">
          <TriangleDown />
        </div>

        <div id="contact-link" className="z-20">
          <UniqueButton href={`/${locale}/contact`} buttonStyle="primary">
            {t("button")}
          </UniqueButton>
        </div>
      </section>
    </article>
  )
}

export default HeroCaseStudies
