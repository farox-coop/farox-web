import LogoFactticSVG from "@/components/SVG/LogoFactticSVG"
import LogoPatioCoopSVG from "@/components/SVG/LogoPatioCoopSVG"
import TrinagleComponent from "@/components/UI/Triangle/TriangleComponent"
import { useTranslations } from "next-intl"
import Image from "next/image"

function InfoTeam() {
  const t = useTranslations("CulturePage.WeBelieve")

  return (
    <article className="w-full bg-[#f1f1f1] relative z-20 pt-20 tablet:pt-0 tablet:mt-[-185px] px-8">
      <div className="absolute -top-96 tablet:-top-28 laptop:-top-48 left-0 right-0 z-0">
        <TrinagleComponent color="" className="bg-white tablet:bg-[#f1f1f1]" />
      </div>
      <div className="absolute top-0 left-0 right-0 z-10 rotate-180 block tablet:hidden">
        <TrinagleComponent color="#ffffff" />
      </div>
      <section className="max-w-screen-desktoplg relative mx-auto tablet:mt-14 laptop:my-24 flex w-full flex-col items-center z-30">
        <div className="flex flex-col laptop:flex-row laptop:justify-center items-center w-full laptop:gap-8">
          <div className="flex-1 w-full pt-28">
            <h2 className="flex flex-row laptop:flex-col gap-4 laptop:gap-0 justify-center text-[27px] tablet:text-4xl laptop:text-6xl desktop:text-7xl text-center laptop:text-left font-bold leading-none text-black">
              <span className="block">{t("title_up")}</span>
              <span className="block pl-0 laptop:pl-[60px] desktop:pl-[70px]">{t("title_down")}</span>
            </h2>
            <div className="flex-1 w-full mt-[50px] laptop:mt-[90px] px-0 tablet:px-[150px] laptop:px-0 laptop:leading-9">
              <p className="text-base tablet:text-xl laptop:text-2xl desktop:text-[34px] text-black laptop:pl-[40px]">
                {t("description")}
              </p>
              <div className="flex flex-row justify-center items-center gap-[55px] mt-[60px] ">
                <div className="w-[68px] tablet:w-[153px]">
                  <a
                    href="https://facttic.org.ar/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-all duration-300 ease-in-out"
                  >
                    <LogoFactticSVG />
                  </a>
                </div>
                <div className="w-[102px] tablet:w-[226px]">
                  <a
                    href="https://patio.coop/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-all duration-300 ease-in-out"
                  >
                    <LogoPatioCoopSVG />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 w-full mobtab:max-w-[500px] tablet:max-w-[614px] laptop:max-w-[515px] desktop:max-w-[717px] mt-[60px] tablet:mt-[30px] desktop:mt-0">
            <Image
              src="/images/culture/mapamundi.svg"
              width={817}
              height={817}
              alt="Believe mapamundi"
              className="px-4"
            />
          </div>
        </div>
      </section>
      <div className="absolute bg-white -bottom-1 h-[50px] tablet:h-[70px] left-0 right-0 laptop:hidden z-10" />
    </article>
  )
}

export default InfoTeam
