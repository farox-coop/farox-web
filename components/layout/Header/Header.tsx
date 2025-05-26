"use client"
import { useLocale, useTranslations } from "next-intl"
import { Link as LinkView } from "next-view-transitions"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import LogoFaroxSVG from "../../SVG/LogoFaroxNavbar"
import ButtonLanguage from "../../UI/Buttons/ButtonLanguage"
import NavItem from "../../UI/Buttons/NavItem"
import StickyHeader from "./StickyHeader"

function Header({
  hoverItemsColor,
  itemsColor,
  charColor,
  textColor,
  languajeTextColor,
}: {
  hoverItemsColor: string
  itemsColor: string
  charColor: string
  textColor: string
  languajeTextColor: string
}) {
  const t = useTranslations("Header")
  const locale = useLocale()
  const pathname = usePathname()
  const [showStickyHeader, setShowStickyHeader] = useState(false)

  useEffect(() => {
    const contactLink = document.querySelector("#contact-link")

    const handleIntersection: IntersectionObserverCallback = ([entry]: IntersectionObserverEntry[]) => {
      const isVisible = entry.isIntersecting
      const rect = entry.boundingClientRect
      const isAboveViewport = rect.bottom < 0

      // Solo mostramos el header si el botón no es visible Y está arriba del viewport
      setShowStickyHeader(!isVisible && isAboveViewport)
    }

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0,
      rootMargin: "0px",
    })

    if (contactLink) {
      observer.observe(contactLink)
    }

    return () => {
      if (contactLink) {
        observer.unobserve(contactLink)
      }
    }
  }, [])

  const handleLogoClick = () => {
    setShowStickyHeader(false)
  }

  return (
    <>
      {showStickyHeader && <StickyHeader setShowStickyHeader={setShowStickyHeader} />}
      <div className="absolute w-full hidden laptop:block z-50 " id="home">
        <header className="bg-transparent laptop:px-9 desktop:px-28 py-20 flex h-16 items-center justify-between gap-3 max-w-screen-desktopxl desktopxl:px-40 mx-auto z-50">
          <div>
            <LinkView href={`/${locale}/`} onClick={handleLogoClick}>
              <LogoFaroxSVG className="w-36" textColor={textColor} charColor={charColor} />
            </LinkView>
          </div>
          <nav className="w-full">
            <ul className="flex items-center justify-around uppercase font-medium desktop:text-xl tracking-widest">
              <li>
                <NavItem
                  hoverItemsColor={hoverItemsColor}
                  itemsColor={itemsColor}
                  href={`/${locale}/services`}
                  isActive={pathname === `/${locale}/services`}
                  activeLineColor={pathname === `/${locale}/services` ? "bg-secondary" : "bg-transparent"}
                >
                  {t("services")}
                </NavItem>
              </li>
              <li>
                <NavItem
                  hoverItemsColor={hoverItemsColor}
                  itemsColor={itemsColor}
                  href={`/${locale}/case-studies/all`}
                  isActive={/^\/[a-z]{2}\/case-studies(\/.*)?$/.test(pathname)}
                  textActiveColor="text-primary"
                  activeLineColor={/^\/[a-z]{2}\/case-studies(\/.*)?$/.test(pathname) ? "bg-primary" : "bg-transparent"}
                >
                  {t("case studies")}
                </NavItem>
              </li>
              <li>
                <NavItem
                  hoverItemsColor={hoverItemsColor}
                  itemsColor={itemsColor}
                  href={`/${locale}/culture`}
                  isActive={pathname === `/${locale}/culture`}
                  activeLineColor={pathname === `/${locale}/culture` ? "bg-secondary" : "bg-transparent"}
                >
                  {t("culture")}
                </NavItem>
              </li>
              <li>
                <NavItem
                  hoverItemsColor={hoverItemsColor}
                  itemsColor={itemsColor}
                  href={`/${locale}/blog`}
                  isActive={pathname.startsWith(`/${locale}/blog`)}
                  textActiveColor="text-primary"
                  activeLineColor={pathname.startsWith(`/${locale}/blog`) ? "bg-primary" : "bg-transparent"}
                >
                  BLOG
                </NavItem>
              </li>
            </ul>
          </nav>
          <div className="flex justify-center gap-6">
            <ButtonLanguage hoverItemsColor={hoverItemsColor} languajeTextColor={languajeTextColor} language={"en"} />
            <ButtonLanguage hoverItemsColor={hoverItemsColor} languajeTextColor={languajeTextColor} language={"es"} />
          </div>
        </header>
      </div>
    </>
  )
}

export default Header
