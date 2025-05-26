import { useLocale, useTranslations } from "next-intl"

export default function AnimationWeCreateSolution() {
  const locale = useLocale()
  const t = useTranslations("HomeSection.WeCreateSolutions")

  if (locale === "es") {
    return (
      <>
        {/* MOBILE ES */}
        <section className="w-full max-w-[743px] laptop:max-w-screen-desktopxl relative text-4xl tablet:text-5xl laptop:text-[85px] pb-52 tablet:pb-80 laptop:pb-0 block tablet:hidden">
          <div className="w-full max-h-[45px] tablet:max-h-[62px] laptop:max-h-[106px] overflow-hidden text-center tablet:text-left">
            <h2 className="leading-tight text-black px-6 move-up">{t("white_text_1")}</h2>
            <h2 className="leading-tight text-black px-6 move-up2">{t("white_text_2")}</h2>
            <h2 className="leading-tight text-black px-6 move-up3">{t("white_text_3")}</h2>
          </div>
          <div className="w-full max-h-[45px] tablet:max-h-[62px] laptop:max-h-[106px] overflow-hidden text-center tablet:text-left mx-auto left-0 right-0">
            <h2 className="max-w-[330px] leading-tight text-secondary bg-black px-6 move-up">{t("color_text_1")}</h2>
            <h2 className="max-w-[330px] tablet:max-w-[570px] leading-tight text-secondary bg-black px-6 move-up2">
              {t("color_text_2")}
            </h2>
            <h2 className="max-w-[330px] tablet:max-w-[468px] bg-black text-secondary px-6 leading-tight move-up3">
              {t("color_text_3")}
            </h2>
          </div>
        </section>
        {/* DESKTOP ES */}
        <section className="w-full max-w-[743px] desktop:max-w-screen-desktopxl relative text-3xl tablet:text-5xl desktop:text-[85px] hidden tablet:block">
          <div className="w-full max-h-[60px] desktop:max-h-[106px] overflow-hidden">
            <h2 className="leading-tight bg-black px-6 move-up max-w-[794px] desktop:max-w-[1200px]">
              <span className="text-white">{t("white_text_1")}</span>{" "}
              <span className="text-secondary">{t("color_text_1")}</span>
            </h2>
            <h2 className="leading-tight bg-black px-6 move-up2 max-w-[660px] desktop:max-w-[1136px]">
              <span className="text-white">{t("white_text_2")}</span>{" "}
              <span className="text-secondary">{t("color_text_2")}</span>
            </h2>
            <h2 className="leading-tight bg-black px-6 move-up3 max-w-[670px] desktop:max-w-[1140px]">
              <span className="text-white">{t("white_text_3")}</span>{" "}
              <span className="text-secondary">{t("color_text_3")}</span>
            </h2>
          </div>
        </section>
      </>
    )
  }
  if (locale === "en") {
    return (
      <>
        {/* MOBILE EN */}
        <section className="w-full max-w-[743px] laptop:max-w-screen-desktopxl relative text-4xl tablet:text-5xl laptop:text-[85px] pb-52 tablet:pb-80 laptop:pb-0 block tablet:hidden">
          <div className="w-full max-h-[45px] tablet:max-h-[62px] laptop:max-h-[106px] overflow-hidden text-center mx-auto">
            <h2 className="leading-tight text-black px-6 move-up">{t("white_text_1")}</h2>
            <h2 className="leading-tight text-black px-6 move-up2">{t("white_text_2")}</h2>
            <h2 className="leading-tight text-black px-6 move-up3">{t("white_text_3")}</h2>
          </div>
          <div className="w-full max-h-[45px] tablet:max-h-[62px] laptop:max-h-[106px] overflow-hidden text-center">
            <h2 className="max-w-[238px] leading-tight text-secondary bg-black px-6 move-up mx-auto">
              {t("color_text_1")}
            </h2>
            <h2 className="max-w-[268px] tablet:max-w-[570px] leading-tight text-secondary bg-black px-6 move-up2">
              {t("color_text_2")}
            </h2>
            <h2 className="max-w-[234px] tablet:max-w-[468px] bg-black px-6 leading-tight move-up3 mx-auto">
              <span className="text-white">{t("white_text_3_mobile")}</span>{" "}
              <span className="text-secondary">{t("color_text_3_mobile")}</span>
            </h2>
          </div>
        </section>
        {/* DESKTOP EN */}
        <section className="w-full max-w-[743px] desktop:max-w-screen-desktopxl relative text-3xl tablet:text-5xl desktop:text-[85px] hidden tablet:block">
          <div className="w-full max-h-[60px] desktop:max-h-[106px] overflow-hidden">
            <h2 className="leading-tight bg-black px-6 move-up max-w-[494px] desktop:max-w-[840px]">
              <span className="text-white">{t("white_text_1")}</span>{" "}
              <span className="text-secondary">{t("color_text_1")}</span>
            </h2>
            <h2 className="leading-tight bg-black px-6 move-up2 max-w-[580px] desktop:max-w-[990px]">
              <span className="text-white">{t("white_text_2")}</span>{" "}
              <span className="text-secondary">{t("color_text_2")}</span>
            </h2>
            <h2 className="leading-tight bg-black px-6 move-up3 max-w-[522px] desktop:max-w-[886px]">
              <span className="text-white">{t("white_text_3")}</span>{" "}
              <span className="text-secondary">{t("color_text_3")}</span>
            </h2>
          </div>
        </section>
      </>
    )
  }
}
