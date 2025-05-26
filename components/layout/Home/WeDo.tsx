import { useLocale, useTranslations } from "next-intl"
import CardService from "./CardService"

export default function WeDo() {
  const t = useTranslations("HomeSection.WeDo")
  const locale = useLocale()

  return (
    <article className="flex flex-col w-full justify-center items-center px-8 gap-20 clip-gradient" id="services">
      <section className="flex flex-col w-full max-w-screen-desktop desktop:max-w-screen-desktop desktoplg:max-w-screen-desktoplg">
        <div
          className={`flex flex-col ${locale === "es" ? "hidden laptop:block laptop:w-[266px] desktop:w-[400px]" : "hidden laptop:block w-[116px] desktop:w-[172px]"}`}
        >
          <h3 className="text-5xl desktop:text-7xl font-bold text-left leading-[40px] desktop:leading-[58px]">
            {t("title_1")}
          </h3>
          <h3 className="text-5xl desktop:text-7xl font-bold text-right leading-[40px] desktop:leading-[58px]">
            {t("title_2")}
          </h3>
        </div>
        <h3
          className={`text-5xl tablet:text-6xl desktop:text-7xl font-bold text-center ${locale === "es" ? "leading-[50px]" : "leading-[40px]"} desktop:leading-[58px] block laptop:hidden`}
        >
          <span>{t("title_1")} </span>
          <span className="text-transparent" style={{ WebkitTextStroke: "2px black" }}>
            {t("title_2")}
          </span>
        </h3>
        <div className="flex flex-col laptop:flex-row justify-center items-center gap-4 mt-10 desktop:mt-20 z-10 fill-primary">
          <CardService
            title={t("card_1.title")}
            description={t("card_1.description")}
            locale={locale}
            scrollDate="product-development"
          />
          <CardService
            title={t("card_2.title")}
            description={t("card_2.description")}
            locale={locale}
            scrollDate="software-consultancy"
          />
          <CardService
            title={t("card_3.title")}
            description={t("card_3.description")}
            locale={locale}
            scrollDate="team-extension"
          />
        </div>
      </section>
    </article>
  )
}
