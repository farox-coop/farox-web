import { useLocale, useTranslations } from "next-intl"
import Link from "next/link"
import { useState } from "react"
import ChevronDownSVG from "@/components/SVG/ChevronDownSVG"
import styles from "./BurgerMenu.module.css"

const servicesItems = [
  { key: "product_development", label: "services_menu.product_development", href: "#product-development" },
  { key: "software_consultancy", label: "services_menu.software_consultancy", href: "#software-consultancy" },
  { key: "team_extension", label: "services_menu.team_extension", href: "#team-extension" },
  { key: "genia", label: "services_menu.genia", href: "#" },
] as const

const projectsItems = [
  { key: "case_studies", label: "projects_menu.case_studies", href: "/case-studies/all" },
  { key: "light_projects", label: "projects_menu.light_projects", href: "/light-projects" },
] as const

function BurgerMenu({ lineColor = "black" }: { lineColor?: string }) {
  const [isOpen, setIsOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isProjectsOpen, setIsProjectsOpen] = useState(false)

  const t = useTranslations("Header")
  const locale = useLocale()
  const baseServicesPath = `/${locale}/services`

  const handleToggle = () => {
    setIsOpen(!isOpen)
    if (isOpen) {
      setIsServicesOpen(false)
      setIsProjectsOpen(false)
    }
  }

  const handleServicesToggle = () => {
    setIsServicesOpen((prev) => !prev)
  }

  const handleProjectsToggle = () => {
    setIsProjectsOpen((prev) => !prev)
  }

  const handleLinkClick = () => {
    setIsOpen(false)
    setIsServicesOpen(false)
    setIsProjectsOpen(false)
  }

  return (
    <>
      <button
        type="button"
        className={`${styles.menu} ${isOpen ? styles.opened : ""}`}
        onClick={handleToggle}
        aria-expanded={isOpen}
        aria-label="Main Menu"
        style={{ "--menu-line-color": lineColor } as React.CSSProperties}
      >
        <svg width={50} height={40} viewBox="0 0 100 100">
          <path
            className={`${styles.line} ${styles.line1}`}
            d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
          />
          <path className={`${styles.line} ${styles.line2}`} d="M 20,50 H 80" />
          <path
            className={`${styles.line} ${styles.line3}`}
            d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
          />
        </svg>
      </button>
      <nav
        className={`
          absolute top-[99%] bg-[#030207] text-white w-75
          transition-all duration-500 ease-in-out overflow-hidden
          ${isOpen ? "opacity-100 right-0" : "opacity-0 -right-full max-h-0"}
          z-50
        `}
      >
        <ul className="flex flex-col text-center py-0">
          <li className="first:border-none border-t border-gray-400">
            <button
              type="button"
              onClick={handleServicesToggle}
              aria-expanded={isServicesOpen}
              className="flex h-12.5 w-full items-center justify-center gap-2 text-lg hover:bg-primary hover:text-secondary transition duration-300 ease-in-out"
            >
              {t("services")}
              <span
                className={`h-1.5 w-2.5 shrink-0 transition-transform duration-200 ${isServicesOpen ? "rotate-180" : ""}`}
              >
                <ChevronDownSVG />
              </span>
            </button>
            <div
              className={`overflow-hidden bg-white/10 transition-all duration-300 ease-in-out ${
                isServicesOpen ? "max-h-75" : "max-h-0"
              }`}
            >
              <ul>
                {servicesItems.map((item) =>
                  item.key === "genia" ? (
                    <li key={item.key} className="border-t border-gray-400/40 first:border-none">
                      <a
                        href="https://www.genia.coop"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={handleLinkClick}
                        className="flex h-11.75 w-full items-center justify-center text-base font-normal normal-case tracking-normal text-white/80 hover:text-secondary transition duration-300 ease-in-out"
                      >
                        {t(item.label)}
                      </a>
                    </li>
                  ) : (
                    <li key={item.key} className="border-t border-gray-400/40 first:border-none">
                      <Link
                        href={`${baseServicesPath}${item.href}`}
                        onClick={handleLinkClick}
                        className="flex h-11.75 w-full items-center justify-center text-base font-normal normal-case tracking-normal text-white/80 hover:text-secondary transition duration-300 ease-in-out"
                      >
                        {t(item.label)}
                      </Link>
                    </li>
                  ),
                )}
              </ul>
            </div>
          </li>
          <li className="first:border-none border-t border-gray-400">
            <button
              type="button"
              onClick={handleProjectsToggle}
              aria-expanded={isProjectsOpen}
              className="flex h-12.5 w-full items-center justify-center gap-2 text-lg hover:bg-primary hover:text-secondary transition duration-300 ease-in-out"
            >
              {t("projects")}
              <span
                className={`h-1.5 w-2.5 shrink-0 transition-transform duration-200 ${isProjectsOpen ? "rotate-180" : ""}`}
              >
                <ChevronDownSVG />
              </span>
            </button>
            <div
              className={`overflow-hidden bg-white/10 transition-all duration-300 ease-in-out ${
                isProjectsOpen ? "max-h-75" : "max-h-0"
              }`}
            >
              <ul>
                {projectsItems.map((item) => (
                  <li key={item.key} className="border-t border-gray-400/40 first:border-none">
                    <Link
                      href={`/${locale}${item.href}`}
                      onClick={handleLinkClick}
                      className="flex h-11.75 w-full items-center justify-center text-base font-normal normal-case tracking-normal text-white/80 hover:text-secondary transition duration-300 ease-in-out"
                    >
                      {t(item.label)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </li>
          <li className="first:border-none border-t border-gray-400 h-12.5 flex items-center justify-center hover:bg-primary hover:text-secondary transition duration-300 ease-in-out">
            <Link
              href={`/${locale}/culture`}
              onClick={handleLinkClick}
              className="flex h-full w-full items-center justify-center text-lg"
            >
              {t("culture")}
            </Link>
          </li>
          <li className="first:border-none border-t border-gray-400 h-12.5 flex items-center justify-center hover:bg-primary hover:text-secondary transition duration-300 ease-in-out">
            <Link
              href={`/${locale}/blog`}
              onClick={handleLinkClick}
              className="flex h-full w-full items-center justify-center text-lg"
            >
              Blog
            </Link>
          </li>
          <li className="first:border-none border-t border-gray-400 h-12.5 flex items-center justify-center hover:bg-primary hover:text-secondary transition duration-300 ease-in-out">
            <Link
              href={`/${locale}/contact`}
              onClick={handleLinkClick}
              className="flex h-full w-full items-center justify-center text-lg"
            >
              {t("contact")}
            </Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default BurgerMenu
