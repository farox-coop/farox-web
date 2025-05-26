import AllCircleGraySVG from "@/components/SVG/AllCircleGraySVG"
import TriangleDown from "@/components/SVG/TriangleDown"
import { useTranslations } from "next-intl"

function WeeCoop() {
  const t = useTranslations("CulturePage.WeCoop")

  return (
    <article className="w-full bg-white relative px-8" id="we-coop" data-scroll-section>
      <section className="max-w-screen-desktoplg relative mx-auto my-[95px] flex w-full flex-col items-center">
        <div className="absolute w-[230px] laptop:w-[383px] right-0 top-0] hidden tablet:block">
          <AllCircleGraySVG />
        </div>
        <h2 className="text-[28px] tablet:text-[55px] laptop:text-[75px] font-bold mb-4 z-20">{t("title_1")}</h2>
        <TriangleDown />
        <h2 className="tablet:text-[20px] laptop:text-[34px] text-center my-[40px]">
          {t("title_2_up")} <br />
          {t("title_2_down")}
        </h2>

        <form
          //   onSubmit={handleSubmit}
          className="w-full mx-auto px-0 tablet:px-[8px] laptop:px-[160px] desktop:px-[218px] text-[18px] tablet:text-[20px]"
        >
          <div className="flex flex-col lg:flex-row laptop:gap-[50px] desktop:gap-[50px] desktoplg:gap-[106px] mb-6">
            <label className="flex-1 mb-7 lg:mb-0 text-[22px] block">
              <span className="block mb-2 pl-9 tablet:pl-11">{t("name")}</span>
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder={t("placeholder_name")}
                className={
                  "w-full  rounded-full bg-[#eeeeee] placeholder:text-[22px] placeholder:font-light py-[15px] px-[30px]"
                }
                required
              />
            </label>
            <label className="flex-1">
              <span className="block mb-2 pl-9 text-[22px] tablet:pl-11">{t("email")}</span>
              <input
                type="email"
                id="lastName"
                name="lastName"
                placeholder={t("placeholder_email")}
                className={
                  "w-full rounded-full bg-[#eeeeee] placeholder:text-[22px] placeholder:font-light py-[15px] px-[30px]"
                }
                required
              />
            </label>
          </div>

          <label className="mb-6 block">
            <span className="block mb-2 pl-12 text-[22px] tablet:pl-11">{t("text")}</span>
            <textarea
              id="message"
              name="message"
              placeholder={t("placeholder_text")}
              className="w-full tablet:text-[22px] px-9 tablet:px-14 py-[35px] rounded-[40px] bg-[#eeeeee] placeholder:italic placeholder:text-[22px] placeholder:font-light min-h-[263px] resize-y"
              required
            />
          </label>

          <button
            type="submit"
            className="flex items-center justify-center mt-14 mx-auto rounded-full font-medium text-secondary bg-black text-[20px] laptop:text-xl desktop:text-[27px] px-[18px] py-[6px] border desktop:px-8 desktop:py-3 transition-all duration-300 ease-in-out hover:text-black hover:border-secondary hover:bg-transparent"
          >
            {t("button")}
          </button>
        </form>
      </section>
    </article>
  )
}

export default WeeCoop
