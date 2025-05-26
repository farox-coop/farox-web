import LogoFaroxBackground from "@/components/SVG/LogoFaroxBackground"
import AnimationWeCreateSolution from "@/components/animation/AnimationWeCreateSolution"
import { useTranslations } from "next-intl"

export default function WeCreateSolutions() {
  const t = useTranslations("HomeSection.WeCreateSolutions")

  return (
    <section className="flex flex-col justify-center items-center h-auto w-full z-10 bg-white pt-44">
      <div className="w-full max-w-screen-desktopxl relative">
        <div className="absolute -top-40 tablet:top-10 right-0 w-[166px] tablet:w-[410px] h-auto left-0 tablet:left-auto mx-auto tablet:mx-0">
          <LogoFaroxBackground />
        </div>
      </div>
      <div className="z-10">
        <h2 className="text-5xl leading-[40px] text-center tablet:text-left tablet:leading-none tablet:text-6xl desktop:text-8xl font-bold">
          {t("title_1")}
        </h2>
        <AnimationWeCreateSolution />
      </div>
    </section>
  )
}
