import UniqueButton from "@/components/UI/Buttons/UniqueButton"
import { useLocale, useTranslations } from "next-intl"

function OwnCode() {
  const t = useTranslations("HomeSection.OwnCode")
  const locale = useLocale()

  return (
    <article
      id="culture"
      className={`${locale === "es" ? "" : ""} relative w-full desktop:pb-32 desktop:mb-0 bg-[#f1f1f1] flex items-center justify-center -mt-1`}
    >
      <section
        className={`${locale === "es" ? "" : ""} py-10 flex flex-col items-center laptop:flex-row w-full laptop:justify-between max-w-[1800px] h-auto desktop:mt-10 laptop:gap-[3.75rem] desktop:gap-[110px]`}
      >
        <div className="laptop:w-1/2 flex flex-col justify-center items-center h-auto">
          <div className={`${locale === "es" ? "" : ""} laptop:hidden mx-auto mb-5`}>
            <h3
              className={`${locale === "es" ? "text-[40px]" : "text-[51px]"} font-bold text-transparent block relative z-50`}
              style={{ WebkitTextStroke: "1px black" }}
            >
              {t("title_1")} <span className="text-black leading-[20px]">{t("title_2")}</span>
            </h3>
          </div>
          <div
            className={`flex flex-col z-20 ${locale === "es" ? "hidden laptop:block laptop:w-[480px] desktop:w-[570px] desktoplg:w-[700px] desktopxl:w-[800px]" : "hidden laptop:block laptop:w-[420px] desktop:w-[550px] desktoplg:w-[700px]"} ml-0 desktoplg:ml-4`}
          >
            <h3
              className={`${locale === "es" ? "laptop:text-[90px] desktop:text-[120px] desktoplg:text-[145px] desktoplg:leading-[200px]" : "laptop:text-[120px] desktop:text-[160px] desktoplg:text-[200px]"} font-bold text-left laptop:leading-[100px] desktop:leading-[140px] desktoplg:leading-[180px] text-transparent`}
              style={{ WebkitTextStroke: "1px black" }}
            >
              {t("title_1")}
            </h3>
            <h3
              className={`${locale === "es" ? "laptop:text-[90px] desktop:text-[120px] desktoplg:text-[145px] desktoplg:leading-[200px]" : "laptop:text-[120px] desktop:text-[160px] desktoplg:text-[200px]"} font-bold text-right laptop:leading-[100px] desktop:leading-[140px] desktoplg:leading-[180px]`}
            >
              {t("title_2")}
            </h3>
          </div>
        </div>
        <div
          className={`laptop:hidden absolute h-7 z-0 bg-primary right-0 ${locale === "es" ? "top-[11%] extramob:top-[11%] mobtab:top-[10.5%] tablet:top-[9%] w-[46%] mobtab:w-[48.5%] tablet:w-[48%] talop:top-[9%]" : "top-[12%]  mobile:top-[12%] extramob:top-[12%] mobtab:top-[10.8%] tablet:top-[12%] talop:top-[12%] w-[51%]"} mobtab:top-[14%] tablet:top-[10.5%] talop:top-[12%] self-end font-bold laptop:pl-[108px] desktop:pl-32`}
        />
        <div
          className={`absolute z-10 laptop:h-16 desktop:h-20 desktoplg:h-28 desktop:top-[53%] desktoplg:top-[56%] right-0 laptop:left-0 w-full laptop:max-w-[50%] bg-[#6B46FF] transform -translate-y-1/2 ${locale === "es" ? "desktop:max-w-[50%] laptop:top-[61%] laptop:max-w-[48%]" : "max-w-[48%] tablet:max-w-[48%] laptop:top-[62%] laptop:max-w-[46%]"} desktop:max-w-[50%] desktoplg:max-w-[50%]`}
        />
        <div className="tablet:w-1/2 flex flex-col justify-center items-center text-center laptop:pr-[34px] desktop:pr-[50px] desktoplg:pr-[100px] desktopxl:pr-[140px] laptop:text-left">
          <div className="w-[400px] laptop:w-full laptop:self-start">
            <h3
              className={`${locale === "es" ? "px-[60px] tablet:px-2 desktop:px-0 tablet:text-3xl desktop:text-4xl " : "text-[22px] px-[85px] laptop:px-0 desktop:text-[40px]"} laptop:text-3xl desktop:text-4xl break-words font-medium leading-[20px] laptop:leading-[40px] desktop:leading-[53px] desktop:text-pretty`}
            >
              {t("title_3")}
            </h3>
          </div>
          <p
            className={`${locale === "es" ? "max-w-[320px] laptop:max-w-none px-0 tablet:px-[10px] laptop:px-0 tablet:text-lg laptop:mt-8 laptop:text-xl desktop:text-[37px]" : "max-w-[400px] tablet:max-w-none desktop:max-w-none px-[60px] tablet:px-0 talop:px-[30px] laptop:px-0 desktop:mt-14 text-[18px] tablet:text-lg desktop:text-[40px]"} mt-6 tablet:mt-6  laptop:text-2xl font-light desktop:pl-0 desktop:leading-[47px] text-pretty`}
          >
            {t("line_1")}
            <br /> {t("line_2")}
          </p>
          <UniqueButton href={`/${locale}/culture`} buttonStyle="primary" className="my-8 tablet:mt-8 laptop:self-end">
            {t("text_button")}
          </UniqueButton>
        </div>
      </section>
    </article>
  )
}

export default OwnCode
