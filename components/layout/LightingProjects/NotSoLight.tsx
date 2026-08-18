"use client"
import { useTranslations } from "next-intl"

export default function NotSoLight() {
  const t = useTranslations("LightingProjectsPage.NotSoLight")

  return (
    <section className="relative flex flex-col items-center justify-center w-full py-20 laptop:py-30 desktop:py-40 px-4 laptop:px-8">
      <img
        src="/images/lighting/sphere-not-light.svg"
        alt=""
        className="absolute -top-10 laptop:-top-16 desktop:-top-20 -left-20 laptop:-left-16 desktop:-left-10 w-[300px] h-[292px] laptop:w-[500px] laptop:h-[488px] desktop:w-[840px] desktop:h-[820px] pointer-events-none opacity-60"
      />
      <h2 className="relative z-10 text-[#ffffff] text-[36px] laptop:text-[44px] desktop:text-[52px] font-bold uppercase text-center tracking-widest mb-20">
        {t("title")}
      </h2>
      <p className="relative z-10 text-[#ffffff] text-[26px] laptop:text-[32px] desktop:text-[38px] font-medium text-center mt-6 laptop:mt-8 desktop:mt-10 max-w-200 laptop:max-w-225 desktop:max-w-250 mx-auto">
        {t("subtitle")}
      </p>
      <p className="relative z-10 text-[#ffffff] text-[26px] laptop:text-[32px] desktop:text-[38px] font-medium text-center mt-6 laptop:mt-8 desktop:mt-10 max-w-[830px] mx-auto">
        {t("description")}
      </p>
    </section>
  )
}
