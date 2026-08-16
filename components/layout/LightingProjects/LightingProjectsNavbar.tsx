"use client"
import LogoFaroxSVG from "@/components/SVG/LogoFaroxNavbar"
import LogoPSVG from "@/components/SVG/LogoPSVG"
import ButtonLanguage from "@/components/UI/Buttons/ButtonLanguage"
import { Link as LinkView } from "next-view-transitions"
import { useLocale } from "next-intl"

export default function LightingProjectsNavbar() {
  const locale = useLocale()

  return (
    <div className="w-full sticky top-0 z-50 bg-transparent">
      <nav className="flex items-center justify-between py-[80px] h-16">
        <LinkView href={`/${locale}/`}>
          <LogoFaroxSVG className="w-36" textColor="white" charColor="#28FFE3" />
        </LinkView>

        <LogoPSVG className="w-7 h-auto" />

        <div className="flex items-center gap-2">
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
