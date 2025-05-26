import LogoFaroxFullFillBackground from "@/components/SVG/LogoFaroxFullFillBackground"
import { useTranslations } from "next-intl"
import CardWeAre from "./CardWeAre"

function WeAre() {
  const t = useTranslations("CulturePage.WeAre")

  return (
    <article className="w-full">
      <section className="max-w-screen-desktoplg relative mx-auto flex w-full flex-col items-center gap-[26px] my-[150px] tablet:px-[10px] desktop:px-[20px]">
        <div className="absolute -top-52 laptop:top-[-300px] w-[298px] tablet:w-[410px] desktop:w-[820px] h-auto mx-auto laptop:mx-0 z-10 mb-20 tablet:mb-0">
          <LogoFaroxFullFillBackground />
        </div>

        <h2 className="text-[27px] tablet:text-4xl laptop:text-[57px] text-white font-bold mt-6 z-20">
          {t("title_1")}
        </h2>
        <div className="max-w-[330px] tablet:max-w-[670px] laptop:max-w-[894px] my-6 z-20">
          <p className="text-base tablet:text-2xl laptop:text-[32px] text-center text-white">{t("description")}</p>
        </div>
        <CardWeAre title={t("transparent")} description={t("transparent_description")} />
        <CardWeAre title={t("reliable")} description={t("reliable_description")} />
        <CardWeAre title={t("innovative")} description={t("innovative_description")} />
        <CardWeAre title={t("collaborative")} description={t("collaborative_description")} />
      </section>
    </article>
  )
}

export default WeAre
