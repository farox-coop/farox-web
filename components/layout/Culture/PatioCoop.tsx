import LogoPatioCoopSVG from "@/components/SVG/LogoPatioCoopSVG"
import { useLocale, useTranslations } from "next-intl"
import Image from "next/image"

function PatioCoop() {
  const t = useTranslations("CulturePage.PatioCoop")
  const locale = useLocale()

  const imageSrc = locale === "es" ? "/images/culture/diagrama-patio-es.svg" : "/images/culture/diagrama-patio.svg"

  const imageSrcMobile =
    locale === "es" ? "/images/culture/diagrama-patio-mobile-es.svg" : "/images/culture/diagrama-patio-mobile.svg"

  return (
    <article className="w-full bg-white ">
      <section className="max-w-screen-desktoplg mx-auto  flex w-full flex-col items-center pt-[50px] pb-[0px]">
        <div className="w-[188px] tablet:w-[280px] laptop:w-[359px] py-[50px] px-8">
          <LogoPatioCoopSVG />
        </div>
        <p className="my-5 text-base tablet:text-[32px] tablet:leading-[34px] text-left tablet:text-center max-w-[948px] px-8">
          {t("description")}
        </p>

        {/* Contenedor de imágenes */}
        <div className="relative w-full max-w-[1300px] h-[850px] tablet:h-[565px] laptop:h-[680px] mx-auto">
          {/* Imagen del mapa (fondo) */}
          <div className="absolute laptop:mt-0 inset-0 w-[600px] h-[700px]  mobtab:w-full mobtab:h-[500px] laptop:w-full laptop:h-full z-40">
            <Image
              src="/images/culture/mapamundi.webp"
              width={1300}
              height={665}
              alt="Mapa Mundi"
              className="w-full h-[400px] mobtab:w-full mobtab:h-full tablet:w-full tablet:h-full object-cover"
            />
          </div>

          {/* Imagen del diagrama (superpuesta) */}
          <div className="absolute inset-0 w-full h-full flex items-center justify-center my-1 tablet:py-0 px-8 tablet:pb-[20px] laptop:pb-0">
            <Image
              src={imageSrc}
              width={1300}
              height={665}
              alt="Patio Coop"
              className="object-contain hidden tablet:block pb-[50px]"
            />

            <Image
              src={imageSrcMobile}
              width={414}
              height={918}
              alt="Patio Coop"
              className="object-contain block tablet:hidden max-w-[310px]"
            />
          </div>
        </div>
      </section>
    </article>
  )
}

export default PatioCoop
