"use client"
import LogoFaroxSVG from "@/components/SVG/LogoFaroxNavbar"
import BurgerMenu from "@/components/UI/BurgerMenu/BurgerMenu"
import ButtonLanguage from "@/components/UI/Buttons/ButtonLanguage"
import Link from "next/link"

function MobileHeader({
  languajeTextColor,
  hoverItemsColor,
  dark = false,
}: {
  languajeTextColor: string
  hoverItemsColor: string
  dark?: boolean
}) {
  return (
    <div className={`${dark ? "bg-[#020202]/70" : "bg-white/70"} w-full fixed top-0 z-100`}>
      <header className="bg-transparent h-auto px-4 py-5 tablet:py-6 flex items-center justify-between gap-3">
        <div>
          <Link href="/">
            <LogoFaroxSVG
              className="w-24"
              textColor={dark ? "white" : undefined}
              charColor={dark ? "#28FFE3" : undefined}
            />
          </Link>
        </div>
        <div className="flex justify-center gap-4">
          <ButtonLanguage hoverItemsColor={hoverItemsColor} languajeTextColor={languajeTextColor} language={"en"} />
          <ButtonLanguage hoverItemsColor={hoverItemsColor} languajeTextColor={languajeTextColor} language={"es"} />
        </div>
        <BurgerMenu lineColor={dark ? "white" : undefined} />
      </header>
    </div>
  )
}

export default MobileHeader
