"use client"
import { useLocale, useTranslations } from "next-intl"
import Link from "next/link"
import { usePathname } from "next/navigation"
import LogoFaroxSVG from "../../SVG/LogoFaroxNavbar"
import NavItem from "../../UI/Buttons/NavItem"
import ServicesDropdown from "./ServicesDropdown"

interface StickyHeaderProps {
  setShowStickyHeader: (value: boolean) => void
}

function StickyHeader({ setShowStickyHeader }: StickyHeaderProps) {
  const t = useTranslations("Header")
  const locale = useLocale()
  const pathname = usePathname()

  const handleLogoClick = () => {
    setShowStickyHeader(false)
  }

  return (
    <div
      className="fixed top-0 w-full hidden bg-[#565656]/80
    laptop:block mx-auto z-50 px-8 scroll-smooth"
    >
      <header className="bg-transparent py-5 grid grid-cols-[1fr_auto_1fr] items-center max-w-screen-desktoplg mx-auto">
        <div>
          <Link href={`/${locale}#home`} onClick={handleLogoClick}>
            <LogoFaroxSVG className="w-36" textColor="white" charColor="#6843E1" />
          </Link>
        </div>
        <nav>
          <ul className="flex items-center gap-10 uppercase font-medium desktop:text-xl tracking-widest">
            <ServicesDropdown
              hoverItemsColor="hover:text-secondary"
              itemsColor="text-white"
              activeLineColor={pathname === `/${locale}/services` ? "bg-secondary" : "bg-transparent"}
              isSticky
            />
            <li>
              <NavItem
                hoverItemsColor="hover:text-secondary"
                itemsColor="text-white"
                href={`/${locale}/case-studies/all`}
                isActive={pathname === `/${locale}/case-studies/all`}
                activeLineColor={pathname === `/${locale}/case-studies/all` ? "bg-secondary" : "bg-transparent"}
              >
                {t("case studies")}
              </NavItem>
            </li>
            <li>
              <NavItem
                hoverItemsColor="hover:text-secondary"
                itemsColor="text-white"
                href={`/${locale}/culture`}
                isActive={pathname === `/${locale}/culture`}
                activeLineColor={pathname === `/${locale}/culture` ? "bg-secondary" : "bg-transparent"}
              >
                {t("culture")}
              </NavItem>
            </li>
            <li>
              <NavItem
                hoverItemsColor="hover:text-secondary"
                itemsColor="text-white"
                href={`/${locale}/blog`}
                isActive={pathname === `/${locale}/blog`}
                activeLineColor={pathname === `/${locale}/blog` ? "bg-secondary" : "bg-transparent"}
              >
                BLOG
              </NavItem>
            </li>
            <li>
              <NavItem hoverItemsColor="hover:text-secondary" itemsColor="text-white" href={`/${locale}/contact`}>
                {t("contact")}
              </NavItem>
            </li>
          </ul>
        </nav>
        <div aria-hidden />
      </header>
    </div>
  )
}

export default StickyHeader
