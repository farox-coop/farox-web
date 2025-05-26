import AHeroSVG from "@/components/SVG/AHeroSVG"
import TriangleDown from "@/components/SVG/TriangleDown"
import UniqueButton from "@/components/UI/Buttons/UniqueButton"
import CodeCoop from "@/components/UI/CodeCoop/CodeCoop"
import TrinagleHero from "@/components/UI/Triangle/TriangleHero"
import { useLocale, useTranslations } from "next-intl"
import { Link as LinkView } from "next-view-transitions"
const HeroSection = () => {
  const t = useTranslations("HomeSection.Hero")
  const locale = useLocale()

  return (
    <section className="relative w-full">
      <div
        className={`relative w-full bg-custom-gradient pt-[110px] mobtab:pb-[50px] mobtab:pt-[130px] tablet:pb-[80px] tablet:pt-[200px] laptop:pb-[110px] desktop:pb-[210px] desktoplg:pb-[260px] desktoplg:pt-[310] desktopxl:pb-[280px] ${locale === "es" ? "laptop:pt-[130px] desktop:pt-[260px] desktopxl:pt-[310px]" : "laptop:pt-[170px] desktop:pt-[300px] desktopxl:pt-[360px]"} px-8`}
      >
        <div className="absolute z-1 top-0 left-0 right-0 mx-auto max-w-[2034px]">
          <AHeroSVG />
        </div>
        <article className="flex mt-20 tablet:mt-0 max-w-screen-desktoplg mx-auto justify-center items-center relative bg-transparent">
          <LinkView
            href={`/${locale}/contact`}
            className={`hidden-mobile absolute tablet:top-[28.4%] tablet:right-[2%] laptop:top-[23%] ${locale === "es" ? "laptop:top-[28.5%] desktop:top-[13.5%] desktoplg:top-[13.5%] desktopxl:top-[13%]" : "laptop:top-[23%] desktop:top-[14%] desktopxl:top-[13%] desktoplg:top-[14%]"} laptop:right-[2%] desktop:right-[1%] transform translate-x-1/2 rotate-90 text-white ${locale === "es" ? "laptop:text-sm desktop:text-xl" : "laptop:text-base desktop:text-xl"} font-medium uppercase transition-colors hover:text-secondary z-10`}
          >
            {t("contact")}
          </LinkView>
          <div className="hidden-mobile flex flex-col justify-center items-center absolute laptop:top-[65%] desktop:top-[59%] left-[-1.5%] desktop:left-[-1%] gap-10 max-h-6">
            <div className="-rotate-90 text-black text-xl leading-3 font-medium">&#169; 2025</div>
            <div className="max-h-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 8.32 131"
                width="4"
                height="65"
                className="overflow-hidden"
              >
                <path
                  fill="none"
                  stroke="#000"
                  strokeMiterlimit="10"
                  strokeWidth="2"
                  d="m1,131c0-6.55,6.32-6.55,6.32-13.1s-6.32-6.55-6.32-13.1,6.32-6.55,6.32-13.1-6.32-6.55-6.32-13.1,6.32-6.55,6.32-13.1-6.32-6.55-6.32-13.1,6.32-6.55,6.32-13.1-6.32-6.55-6.32-13.1,6.32-6.55,6.32-13.11S1,6.55,1,0"
                />
              </svg>
            </div>
          </div>
          <div
            className={`flex flex-row justify-center items-center tablet:mt-9 laptop:mt-20 ${locale === "es" ? "desktop:-mt-12" : "desktop:mt-0"} w-full max-w-screen-desktoplg`}
          >
            <div className="hidden-mobile mb-[180px] laptop:mb-[100px] desktop:mb-[160px]">
              <TriangleDown />
            </div>
            <section className="flex flex-col w-full justify-center items-center">
              <CodeCoop />
              <h1
                className={`text-center ${locale === "es" ? "mt-2 laptop:mt-[10px]" : "mt-2 laptop:mt-[28px]"} text-black leading-[30px] laptop:leading-[30px] desktop:leading-[55px] z-20`}
              >
                <span className="text-[40px] tablet:text-[50px] laptop:text-[60px] desktop:text-[115px] font-bold">
                  {t("title_1")}
                </span>{" "}
                <br />
                <span
                  className={`${locale === "es" ? "text-[22px] tablet:text-[28px] laptop:text-[33px] desktop:text-[65px] mt-0 laptop:mt-2 desktop:mt-0" : "text-[30px] tablet:text-[38px] laptop:text-[46px] desktop:text-[85px]"} font-normal inline-flex items-center justify-center gap-2`}
                >
                  {t("title_2")}
                  <svg
                    id="Capa_1"
                    data-name="Capa 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 36.27 39.91"
                    className={`${locale === "es" ? "mt-[7px] tablet:mt-1 laptop:mt-2 desktop:mt-4 desktopxl:mt-4" : "mt-[11px] tablet:mt-3 laptop:mt-2 desktop:mt-10 desktopxl:mt-8"} w-[13px] h-[15px] mobtab:w-[12px] mobtab:h-[12px] tablet:w-[16px] tablet:h-[16px] laptop:w-[18px] laptop:h-[18px] desktop:w-[35px] desktop:h-[35px]`}
                  >
                    <path
                      className="cls-1"
                      d="m34.66.5H1.6c-.61,0-1.1.49-1.1,1.1,0,.61.49,1.1,1.1,1.1h30.55S3.36,34,3.36,34c-.41.45-.38,1.15.06,1.56.45.41,1.15.38,1.56-.06L35.48,2.35c.3-.32.38-.79.2-1.19s-.57-.66-1.01-.66Z"
                    />
                    <path
                      className="cls-1"
                      d="m34.66,10.21c-.61,0-1.1.49-1.1,1.1v26.99c0,.61.49,1.1,1.1,1.1s1.1-.49,1.1-1.1V11.32c0-.61-.49-1.1-1.1-1.1Z"
                    />
                  </svg>
                </span>
              </h1>
              <p
                className={`${locale === "es" ? "max-w-[270px] laptop:max-w-[500px] desktop:max-w-[550px]" : "max-w-[270px] laptop:max-w-[430px] desktop:max-w-[550px] tablet:px-0"} text-wrap text-center font-normal text-[18px] py-[52px] tablet:py-5 laptop:py-[65px] tablet:text-lg laptop:text-2xl desktop:text-3xl z-20`}
              >
                {t("line_1")}
              </p>
              <div id="contact-link" className="tablet:mt-0 desktopxl:mt-10 z-20">
                <UniqueButton href={`/${locale}/contact`} buttonStyle="primary">
                  {t("text_button")}
                </UniqueButton>
              </div>
            </section>
            <div className="hidden-mobile mb-[180px] laptop:mb-[100px] desktop:mb-[160px]">
              <TriangleDown />
            </div>
          </div>
        </article>
      </div>
      <div className="absolute -mt-32 tablet:mt-0 bottom-0 left-0 right-0 z-10">
        <TrinagleHero color="#fff" />
      </div>
    </section>
  )
}

export default HeroSection
