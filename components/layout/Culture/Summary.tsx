import LogoFactticSVG from "@/components/SVG/LogoFactticSVG"
import LogoPatioCoopSVG from "@/components/SVG/LogoPatioCoopSVG"
import { useTranslations } from "next-intl"

function Summary() {
  const t = useTranslations("CulturePage.Summary")

  return (
    <article className="flex justify-center w-full bg-black px-8">
      <section className="max-w-screen-desktoplg my-[25px] laptop:my-[100px] flex flex-col justify-center w-full items-center py-24">
        <div className="max-w-[900px] z-20 w-full">
          <p className="text-base tablet:text-[32px] tablet:leading-[34px] text-center text-white">
            {t("description")}
          </p>
        </div>

        <div className="flex flex-col tablet:flex-row justify-center items-center gap-8 tablet:gap-[55px] pt-10 tablet:mt-[90px]">
          <div className="w-[106px] tablet:w-[196px]">
            <a
              href="https://facttic.org.ar/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-all duration-300 ease-in-out"
            >
              <LogoFactticSVG className="text-white hover:text-primary" />
            </a>
          </div>
          <div className="w-[150px] tablet:w-[291px]">
            <a
              href="https://patio.coop/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-all duration-300 ease-in-out"
            >
              <LogoPatioCoopSVG className="text-white hover:text-primary" />
            </a>
          </div>
        </div>
      </section>
    </article>
  )
}

export default Summary
