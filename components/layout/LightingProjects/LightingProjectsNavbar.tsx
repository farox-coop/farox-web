"use client"
import LogoFaroxSVG from "@/components/SVG/LogoFaroxNavbar"
import LogoPSVG from "@/components/SVG/LogoPSVG"
import ButtonLanguage from "@/components/UI/Buttons/ButtonLanguage"
import { Link as LinkView } from "next-view-transitions"
import { useLocale } from "next-intl"

export default function LightingProjectsNavbar() {
  const locale = useLocale()

  return (
    <div className="w-full sticky top-0 z-50 bg-transparent -mx-auto" style={{ width: "100vw", marginLeft: "calc(50% - 50vw)" }}>
      <nav className="flex items-center justify-between py-5 laptop:py-6 desktop:py-[80px] h-16 max-w-[1432px] mx-auto px-4 laptop:px-10 desktop:px-[80px]">
        <LinkView href={`/${locale}/`}>
          <LogoFaroxSVG className="w-24 laptop:w-30 desktop:w-36" textColor="white" charColor="#28FFE3" />
        </LinkView>

        <LogoPSVG className="w-5 laptop:w-6 desktop:w-7 h-auto" />

        <div className="flex items-center gap-1 laptop:gap-1.5 desktop:gap-2">
          <ButtonLanguage
            hoverItemsColor="hover:text-secondary"
            languajeTextColor="text-white"
            language="en"
            activeBgColor="#f1f1f1"
            activeTextColor="#020202"
          />
          <ButtonLanguage
            hoverItemsColor="hover:text-secondary"
            languajeTextColor="text-white"
            language="es"
            activeBgColor="#f1f1f1"
            activeTextColor="#020202"
          />
        </div>
      </nav>
    </div>
  )
}
