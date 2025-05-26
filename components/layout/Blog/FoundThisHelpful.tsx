import UniqueButton from "@/components/UI/Buttons/UniqueButton"
import { useLocale, useTranslations } from "next-intl"
import TriangleDown from "../../SVG/TriangleDown"

export default function FoundThisHelpful() {
  const t = useTranslations("Blog.FoundThisHelpful")
  const locale = useLocale()

  return (
    <section className="flex h-[40.31rem] w-full mx-auto items-start justify-center bg-primary px-4 pt-[9.87rem] relative z-30">
      <div className="w-full max-w-screen-desktoplg laptop:flex laptop:flex-row justify-center items-center relative">
        {/* Left Triangle */}
        <div className="hidden-mobile laptop:absolute laptop:left-0 flex justify-start w-full laptop:w-auto">
          <TriangleDown />
        </div>
        <div className="flex flex-col items-center justify-center text-center z-20">
          <h2
            className={`${locale === "es" ? "w-auto" : "w-[240px]"} text-center laptop:w-auto text-5xl laptop:text-6xl desktop:text-[69px] font-medium tracking-tight text-white z-10`}
          >
            {t("title")}
          </h2>
          <p className="w-full max-w-[250px] tablet:max-w-[250px] laptop:max-w-[450px] desktop:max-w-[650px] laptop:w-auto text-xl laptop:text-4xl desktop:text-5xl text-white font-light mt-12 text-pretty z-10">
            {t("description")}
          </p>
          <UniqueButton href={`/${locale}/contact`} buttonStyle="secondary" className="mt-20">
            {t("text_button")}
          </UniqueButton>
        </div>
        {/* Right Triangle */}
        <div className="hidden-mobile laptop:absolute laptop:right-0 flex justify-end w-full laptop:w-auto">
          <TriangleDown />
        </div>
      </div>
    </section>
  )
}
