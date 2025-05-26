"use client"
import { useLocale, useTranslations } from "next-intl"
import Link from "next/link"
import { usePathname } from "next/navigation"
import LogoFaroxSVG from "../../SVG/LogoFaroxNavbar"
import NavItem from "../../UI/Buttons/NavItem"

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
      <header className="bg-transparent py-[20px] flex items-center justify-between gap-[170px] max-w-screen-desktoplg mx-auto">
        <div>
          <Link href={`/${locale}#home`} onClick={handleLogoClick}>
            <LogoFaroxSVG className="w-36" textColor="white" charColor="#6843E1" />
          </Link>
        </div>
        <nav className="w-full">
          <ul className="flex items-center justify-between uppercase font-medium desktop:text-xl tracking-widest">
            <li>
              <NavItem
                hoverItemsColor="hover:text-secondary"
                itemsColor="text-white"
                href={`/${locale}/services`}
                isActive={pathname === `/${locale}/services`}
                activeLineColor={pathname === `/${locale}/services` ? "bg-secondary" : "bg-transparent"}
              >
                {t("services")}
              </NavItem>
            </li>
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
      </header>
    </div>
  )
}

export default StickyHeader
