"use client"
import StickyHeader from "@/components/layout/Header/StickyHeader"
import LogoFaroxSVG from "@/components/SVG/LogoFaroxNavbar"
import LogoPSVG from "@/components/SVG/LogoPSVG"
import BurgerMenu from "@/components/UI/BurgerMenu/BurgerMenu"
import ButtonLanguage from "@/components/UI/Buttons/ButtonLanguage"
import { Link as LinkView } from "next-view-transitions"
import { useLocale } from "next-intl"
import { useEffect, useRef, useState } from "react"

export default function LightProjectsNavbar() {
  const locale = useLocale()
  const navRef = useRef<HTMLDivElement>(null)
  const [showStickyHeader, setShowStickyHeader] = useState(false)

  useEffect(() => {
    const navElement = navRef.current
    if (!navElement) {
      return
    }

    const handleIntersection: IntersectionObserverCallback = ([entry]: IntersectionObserverEntry[]) => {
      const isAboveViewport = entry.boundingClientRect.bottom < 0
      setShowStickyHeader(!entry.isIntersecting && isAboveViewport)
    }

    const observer = new IntersectionObserver(handleIntersection, { threshold: 0 })
    observer.observe(navElement)

    return () => observer.disconnect()
  }, [])

  const handleLogoClick = () => setShowStickyHeader(false)

  return (
    <>
      {showStickyHeader && (
        <StickyHeader
          setShowStickyHeader={setShowStickyHeader}
          logoTextColor="white"
          logoCharColor="#28FFE3"
          contentMaxWidthClassName="max-w-320"
        />
      )}
      <div
        ref={navRef}
        className="w-full sticky laptop:relative top-0 z-50 bg-transparent -mx-auto"
        style={{ width: "100vw", marginLeft: "calc(50% - 50vw)" }}
      >
        <nav className="flex items-center justify-between py-5 tablet:py-6 laptop:py-13 max-w-7xl mx-auto px-4 tablet:px-4 min-[1310px]:px-0">
          <LinkView href={`/${locale}/`} onClick={handleLogoClick}>
            <LogoFaroxSVG className="w-24 laptop:w-30 desktop:w-36" textColor="white" charColor="#28FFE3" />
          </LinkView>

          <LogoPSVG className="hidden laptop:block w-5 laptop:w-6 desktop:w-7 h-auto" />

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

          <BurgerMenu lineColor="white" />
        </nav>
      </div>
    </>
  )
}
