import LogoFaroxBackground from "@/components/SVG/LogoFaroxBackground"
import { RustSVG } from "@/components/SVG/TechnologyIconSVG"
import {
  ChatGPTSVG,
  ClaudeSVG,
  DjangoSVG,
  ElixirSVG,
  ErlangSVG,
  FlaskSVG,
  GoSVG,
  NextSVG,
  NodeSVG,
  PandasSVG,
  PhoenixSVG,
  PythonSVG,
} from "@/components/SVG/TechnologyIconWeUse"
import TriangleDown from "@/components/SVG/TriangleDown"
import { useLocale, useTranslations } from "next-intl"
import CardOurService from "./CardOurService"

function OurServices() {
  const t = useTranslations("ServicesPage.OurServices")
  const locale = useLocale()

  return (
    <article className="w-full px-8 clip-gradient-product-dev pb-2 tablet:pb-[26px]">
      <section className="max-w-screen-desktoplg relative mx-auto mb-24 mt-48 laptop:mb-48 laptop:mt-48 flex w-full flex-col items-center">
        <div className="absolute -top-40 laptop:top-[-850px] laptop:right-[-10%] w-[223px] tablet:w-[410px] h-auto laptopleft-0 laptop:left-auto mx-auto laptop:mx-0 z-10">
          <LogoFaroxBackground color="#000000" strokeW="0.5" />
        </div>
        <div className="hidden-mobile flex flex-col justify-center items-center absolute desktop:top-10 left-[-1.5%] desktop:left-[-1%] gap-10 max-h-6">
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

        <h2 className="text-[28px] tablet:text-[55px] laptop:text-[75px] font-bold mb-4 z-20">{t("title_1")}</h2>
        <TriangleDown />
        <div className="flex flex-col laptop:flex-row justify-center items-center flex-wrap laptop:flex-nowrap w-full desktop:px-0 gap-5 mt-[20px] laptop:mt-[55px] desktop:mt-[85px] z-20">
          <CardOurService title="IA, Machine Learning, LLMs" url={`/${locale}/case-studies/dse-ia#we-thrive`}>
            <div className="flex justify-center tablet:justify-between items-center gap-3 w-full">
              <div className="w-[45px] tablet:w-[55px] flex justify-center items-center">
                <PythonSVG />
              </div>
              <div className="w-[100px] flex justify-center items-center">
                <PandasSVG />
              </div>
              <div className="w-[100px] flex justify-center items-center">
                <ClaudeSVG />
              </div>
              <div className="w-[35px] tablet:w-[45px] flex justify-center items-center">
                <ChatGPTSVG />
              </div>
            </div>
          </CardOurService>
          <CardOurService title="Backend development" url={`/${locale}/case-studies/backend#we-thrive`}>
            <div className="flex justify-center tablet:justify-between  items-center gap-3 w-full">
              <div className="w-[40px] flex justify-center items-center">
                <ErlangSVG />
              </div>
              <div className="w-[55px] flex justify-center items-center">
                <ElixirSVG />
              </div>
              <div className="w-[45px] flex justify-center items-center">
                <PythonSVG />
              </div>
              <div className="w-[60px] flex justify-center items-center">
                <NodeSVG />
              </div>
              <div className="w-[60px] flex justify-center items-center">
                <GoSVG />
              </div>
              <div className="w-[24px] tablet:w-[40px] laptop:w-[34px] desktop:w-[40px] flex justify-center items-center">
                <RustSVG />
              </div>
            </div>
          </CardOurService>
          <CardOurService title="Full-stack development" url={`/${locale}/case-studies/full-stack#we-thrive`}>
            <div className="flex justify-center items-center tablet:justify-between gap-3 w-full">
              <div className="w-[90px] flex justify-center items-center">
                <NextSVG />
              </div>
              <div className="w-[100px] flex justify-center items-center">
                <PhoenixSVG />
              </div>
              <div className="w-[100px] flex justify-center items-center">
                <DjangoSVG />
              </div>
              <div className="w-[75px] flex justify-center items-center">
                <FlaskSVG />
              </div>
            </div>
          </CardOurService>
        </div>
      </section>
    </article>
  )
}

export default OurServices
