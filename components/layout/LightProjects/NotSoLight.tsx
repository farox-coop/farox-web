"use client"
import { useTranslations } from "next-intl"
import Image from "next/image"
import NotSoLightList from "./NotSoLightList"

export default function NotSoLight() {
  const t = useTranslations("LightProjectsPage.NotSoLight")

  return (
    <section className="relative flex flex-col items-center justify-center w-full py-20 laptop:py-30 desktop:py-40 mt-20 px-4 laptop:px-0">
      <Image
        src="/images/light-projects/sphere-not-light_mobile.webp"
        alt=""
        width={408}
        height={418}
        className="absolute -top-10 left-1/2 -translate-x-1/2 w-102 h-104.5 pointer-events-none opacity-80 block laptop:hidden"
      />
      <Image
        src="/images/light-projects/sphere-not-light.webp"
        alt=""
        width={840}
        height={820}
        className="absolute laptop:-top-16 desktop:-top-20 laptop:-left-52 laptop:w-125 laptop:h-122 desktop:w-210 desktop:h-205 pointer-events-none opacity-60 hidden laptop:block"
      />
      <h2 className="relative z-10 text-[#ffffff] text-[23px] laptop:text-[38px] font-bold uppercase text-center tracking-widest mt-20 laptop:mt-0">
        {t("title")}
      </h2>
      <p className="relative z-10 text-[#ffffff] text-[18px] laptop:text-[33px] font-light text-center mt-20 laptop:mt-8 max-w-200 laptop:max-w-225 desktop:max-w-250 mx-auto">
        {t("subtitle")}
      </p>
      <p className="relative z-10 text-[#ffffff] text-[18px] laptop:text-[33px] font-light text-center mt-6 laptop:mt-14 max-w-173 mx-auto">
        {t("description")}
      </p>
      <div className="relative z-10 w-full mt-16 laptop:mt-24 desktop:mt-32">
        <NotSoLightList />
      </div>
    </section>
  )
}
