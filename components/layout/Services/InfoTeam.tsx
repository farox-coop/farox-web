import UniqueButton from "@/components/UI/Buttons/UniqueButton"
import { useLocale, useTranslations } from "next-intl"

function InfoTeam() {
  const t = useTranslations("ServicesPage.InfoTeam")
  const locale = useLocale()

  return (
    <article className="w-full bg-[#f1f1f1] relative px-8" id="team-extension">
      <section className="max-w-screen-desktoplg relative mx-auto mt-6 tablet:mt-14 laptop:mt-24 flex w-full flex-col items-center">
        <div className="flex flex-col laptop:flex-row w-full">
          <div className="flex-1 w-full">
            <h2 className="text-[28px] text-center laptop:text-left laptop:text-[65px] desktop:text-[75px] font-bold leading-none text-black">
              <span className="block">{t("title_1")}</span>
              <span className="block laptop:pl-20">{t("title_2")}</span>
            </h2>
          </div>
          <div className="flex-1 w-full" />
        </div>
        <div className="flex flex-col text-base laptop:flex-row laptop:gap-[60px] w-full mt-[38px] laptop:text-2xl desktop:text-3xl desktoplg:text-[34px] max-w-[300px] tablet:max-w-full">
          <div className="flex-1 w-full tablet:px-[150px] laptop:px-0 laptop:leading-9">
            <p className="laptop:pl-[40px]">
              <span className="text-primary">{t("line_1")}</span>
              {t("line_2")}
            </p>
          </div>
          <div className="flex-1 w-full tablet:px-[150px] laptop:px-0 laptop:leading-9">
            <p className="laptop:pr-[40px]">{t("line_3")}</p>
          </div>
        </div>
        <UniqueButton href={`/${locale}/contact`} buttonStyle="primary" className="my-20">
          {t("button")}
        </UniqueButton>
      </section>
    </article>
  )
}

export default InfoTeam
