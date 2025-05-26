"use client"
import { useTranslations } from "next-intl"
import LogoFactticSVG from "../SVG/LogoFactticSVG"
import LogoFaroxSVG from "../SVG/LogoFaroxNavbar"
import LogoGithubSVG from "../SVG/LogoGithubSVG"
import LogoPatioCoopSVG from "../SVG/LogoPatioCoopSVG"
import { InstagramSVG, LinkedinSVG, XtwitterSVG } from "../SVG/SocialNetworkSVG"

export default function Footer() {
  const t = useTranslations("FooterSection")

  return (
    <footer className="w-full mt-[-2px] z-10">
      <div className="flex w-full flex-col items-center bg-white">
        <LogoFaroxSVG
          textColor="black"
          className="w-[150px] pt-28 desktop:pt-40 tablet:w-[200px] laptop:w-[260px] desktop:w-[19.81rem] mx-auto"
        />

        <div className="py-24 flex justify-around gap-2 mx-auto">
          <a
            href="https://www.linkedin.com/company/farox/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-[34px] h-[34px] laptop:w-[45px] laptop:h-[45px]"
          >
            <LinkedinSVG className="hover:text-primary transition-all duration-300 ease-in-out" />
          </a>
          <a
            href="https://github.com/farox-coop"
            target="_blank"
            rel="noopener noreferrer"
            className="w-[34px] h-[34px] laptop:w-[45px] laptop:h-[45px]"
          >
            <LogoGithubSVG className="hover:text-primary transition-all duration-300 ease-in-out" />
          </a>
          <a
            href="https://www.instagram.com/farox_coop/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-[34px] h-[34px] laptop:w-[45px] laptop:h-[45px]"
          >
            <InstagramSVG className="hover:text-primary transition-all duration-300 ease-in-out" />
          </a>
          <a
            href="https://x.com/faroxcoop"
            target="_blank"
            rel="noopener noreferrer"
            className="w-[34px] h-[34px] laptop:w-[45px] laptop:h-[45px] "
          >
            <XtwitterSVG className="hover:text-primary transition-all duration-300 ease-in-out" />
          </a>
        </div>

        <div className="flex justify-between gap-24 pb-16 laptop:mx-auto px-6 sm:px-0 max-w-[54.80rem] h-auto laptop:justify-around desktop:justify-between items-center">
          <span className="w-[5rem] tablet:w-[10.5rem] sm:w-[9.5rem] h-auto">
            <a
              href="https://facttic.org.ar/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-all duration-300 ease-in-out"
            >
              <LogoFactticSVG />
            </a>
          </span>

          <span className="w-[6rem] tablet:w-[13.5rem] sm:w-[13.87rem] h-auto">
            <a
              href="https://patio.coop/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-all duration-300 ease-in-out"
            >
              <LogoPatioCoopSVG />
            </a>
          </span>
        </div>
      </div>

      <div className="flex py-7 w-full flex-col items-center justify-center space-y-4 bg-black px-4 text-white">
        <div className="text-sm laptop:text-xl desktop:text-[22.19px] text-gray-400">{t("line_1")}</div>
      </div>
    </footer>
  )
}
