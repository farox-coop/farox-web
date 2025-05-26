"use client"
import LogoFaroxSVG from "@/components/SVG/LogoFaroxNavbar"
import BurgerMenu from "@/components/UI/BurgerMenu/BurgerMenu"
import ButtonLanguage from "@/components/UI/Buttons/ButtonLanguage"
import Link from "next/link"

function MobileHeader({
  languajeTextColor,
  hoverItemsColor,
}: {
  languajeTextColor: string
  hoverItemsColor: string
}) {
  return (
    <div className="bg-[#fff]/70 w-full fixed top-0 z-[100]">
      <header className="bg-transparent h-auto px-4 py-5 tablet:py-6 flex items-center justify-between gap-3">
        <div>
          <Link href="/">
            <LogoFaroxSVG className="w-24" />
          </Link>
        </div>
        <div className="flex justify-center gap-4">
          <ButtonLanguage hoverItemsColor={hoverItemsColor} languajeTextColor={languajeTextColor} language={"en"} />
          <ButtonLanguage hoverItemsColor={hoverItemsColor} languajeTextColor={languajeTextColor} language={"es"} />
        </div>
        <BurgerMenu />
      </header>
    </div>
  )
}

export default MobileHeader
