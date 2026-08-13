import { useLocale, useTranslations } from "next-intl"
import CardService from "./CardService"

export default function WeDo() {
  const t = useTranslations("HomeSection.WeDo")
  const locale = useLocale()

  return (
    <article className="flex flex-col w-full justify-center items-center px-8 gap-20 clip-gradient" id="services">
      <section className="flex flex-col w-full max-w-screen-desktop desktop:max-w-screen-desktop desktoplg:max-w-screen-desktoplg">
        <div
          className={`flex flex-col ${locale === "es" ? "hidden laptop:block laptop:w-66.5 desktop:w-100" : "hidden laptop:block w-29 desktop:w-43"}`}
        >
          <h3 className="text-5xl desktop:text-7xl font-bold text-left leading-10 desktop:leading-14.5">
            {t("title_1")}
          </h3>
          <h3 className="text-5xl desktop:text-7xl font-bold text-right leading-10 desktop:leading-14.5">
            {t("title_2")}
          </h3>
        </div>
        <h3
          className={`text-5xl tablet:text-6xl desktop:text-7xl font-bold text-center ${locale === "es" ? "leading-12.5" : "leading-10"} desktop:leading-14.5 block laptop:hidden`}
        >
          <span>{t("title_1")} </span>
          <span className="text-transparent" style={{ WebkitTextStroke: "2px black" }}>
            {t("title_2")}
          </span>
        </h3>
        <div className="flex flex-col items-center gap-4 mt-10 desktop:mt-20 z-10 fill-primary">
          <div className="flex flex-col laptop:flex-row justify-center items-center gap-4 w-full">
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
          <CardService
            title={t("card_4.title")}
            description={t("card_4.description")}
            secondaryDescription={t("card_4.description_2")}
            mobileDescription={t("card_4.description_3")}
            locale={locale}
            scrollDate=""
            externalHref="https://www.genia.coop"
            wide
          />
        </div>
      </section>
    </article>
  )
}
