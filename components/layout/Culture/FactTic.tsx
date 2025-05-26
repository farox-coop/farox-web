import LogoFactticSVG from "@/components/SVG/LogoFactticSVG"
import { useLocale, useTranslations } from "next-intl"
import Image from "next/image"
import ArgentinaMapSVG from "./ArgentinaMapSVG"

function FactTic() {
  const t = useTranslations("CulturePage.FactTic")
  const locale = useLocale()

  const imageSrc =
    locale === "es" ? "/images/culture/diagrama-commitment_es.svg" : "/images/culture/diagrama-commitment.svg"

  const imageSrcMobile =
    locale === "es"
      ? "/images/culture/diagrama-commitment-mobile_es.svg"
      : "/images/culture/diagrama-commitment-mobile.svg"

  return (
    <article className="w-full bg-white relative px-8 z-30">
      <section className="max-w-screen-desktoplg relative mx-auto flex w-full flex-col items-center pb-[50px] pt-[20px]">
        <div className="absolute w-[600px] laptop:-right-20 desktop:right-0 top-[80px] z-20">
          <ArgentinaMapSVG />
        </div>
        <div className="w-[128px] tablet:w-[200px] laptop:w-[292px] py-[50px]">
          <LogoFactticSVG />
        </div>
        <p className="text-base tablet:text-[32px] tablet:leading-[34px] text-left tablet:text-center max-w-[276px] tablet:max-w-[948px]">
          {t("description")}
        </p>

        <Image src={imageSrc} width={1136} height={588} alt="FACTTIC" className="pt-[32px] px-20 hidden tablet:block" />

        <Image
          src={imageSrcMobile}
          width={472}
          height={722}
          alt="FACTTIC"
          className="pt-16 px-2 pb-8 block tablet:hidden max-w-[310px]"
        />
      </section>
    </article>
  )
}

export default FactTic
