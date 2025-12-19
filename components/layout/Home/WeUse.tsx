import { ReactSVG, RustSVG, VueSVG } from "@/components/SVG/TechnologyIconSVG"
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
import UniqueButton from "@/components/UI/Buttons/UniqueButton"
import TrinagleComponent from "@/components/UI/Triangle/TriangleComponent"
import { useLocale, useTranslations } from "next-intl"

export default function WeUse() {
  const t = useTranslations("HomeSection.WeUse")
  const locale = useLocale()

  return (
    <section className="relative w-full ">
      <article className="flex flex-col w-full justify-center items-center text-white px-8 pt-48 pb-36 tablet:pb-64 gap-20 relative bg-black">
        <div className="w-full h-3 absolute -top-1 right-0 bg-black" />
        <section className="flex w-full max-w-screen-desktoplg">
          <h3
            className={`flex-col w-full ${locale === "es" ? "max-w-[235px] desktop:max-w-[352px] leading-[46px] desktop:leading-[68px]" : "max-w-[140px] desktop:max-w-[210px] leading-[40px] desktop:leading-[58px]"} hidden laptop:flex text-5xl desktop:text-7xl `}
          >
            <span className="font-bold text-left">{t("title_1")}</span>
            <span className="font-bold text-right">{t("title_2")}</span>
          </h3>
          <h3 className="flex flex-row text-5xl tablet:text-6xl desktop:text-7xl font-bold text-center leading-[40px] desktop:leading-[58px] laptop:hidden gap-2 justify-center w-full">
            <span className="block">{t("title_1")}</span>
            <span className="text-transparent block" style={{ WebkitTextStroke: "2px white" }}>
              {t("title_2")}
            </span>
          </h3>
        </section>
        <section className="flex flex-wrap justify-center w-full items-center max-w-[250px] tablet:max-w-[700px] laptop:max-w-[1230px] gap-4 tablet:gap-6 laptop:gap-9">
          <span className="w-[34px] tablet:w-[47px] laptop:w-[78px]">
            <ErlangSVG />
          </span>
          <span className="w-[41px] tablet:w-[56px] laptop:w-[93px]">
            <ElixirSVG />
          </span>
          <span className="w-[68px] tablet:w-[92px] laptop:w-[153px]">
            <PhoenixSVG />
          </span>
          <span className="w-[86px] tablet:w-[117px] laptop:w-[195px]">
            <PandasSVG />
          </span>
          <span className="w-[35px] tablet:w-[48px] laptop:w-[80px]">
            <ChatGPTSVG />
          </span>
          <span className="w-[36px] tablet:w-[49px] laptop:w-[81px]">
            <PythonSVG />
          </span>
          <span className="w-[60px] tablet:w-[81px] laptop:w-[135px]">
            <DjangoSVG />
          </span>
          <span className="w-[65px] tablet:w-[88px] laptop:w-[147px]">
            <FlaskSVG />
          </span>
          <span className="w-[64px] tablet:w-[88px] laptop:w-[146px]">
            <NextSVG />
          </span>
          <span className="w-[50px] tablet:w-[69px] laptop:w-[114px]">
            <NodeSVG />
          </span>
          <span className="flex items-center justify-center w-[50px] tablet:w-[69px] laptop:w-[100px]">
            <VueSVG width="135" height="115" />
          </span>
          <span className="flex items-center justify-center w-[50px] tablet:w-[69px] laptop:w-[100px]">
            <ReactSVG width="75" height="75" />
          </span>
          <span className="w-[50px] tablet:w-[69px] laptop:w-[114px]">
            <GoSVG />
          </span>
          <span className="w-[34px] tablet:w-[50px] laptop:w-[70px]">
            <RustSVG width="100%" height="100%" />
          </span>
        </section>
        <UniqueButton href={`/${locale}/services`} buttonStyle="secondary">
          {t("button")}
        </UniqueButton>
      </article>
      <div className="absolute -bottom-1 left-0 right-0">
        <TrinagleComponent color="#fff" />
      </div>
    </section>
  )
}
