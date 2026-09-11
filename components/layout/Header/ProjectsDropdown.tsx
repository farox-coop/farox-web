"use client"

import { Link as LinkView } from "next-view-transitions"
import { useLocale, useTranslations } from "next-intl"
import { usePathname } from "next/navigation"
import { useEffect, useRef, useState } from "react"
import ArrowUpRightSVG from "../../SVG/ArrowUpRightSVG"
import ChevronDownSVG from "../../SVG/ChevronDownSVG"
import NavItem from "../../UI/Buttons/NavItem"

interface ProjectsDropdownProps {
  itemsColor: string
  textActiveColor?: string
  activeLineColor: string
  isSticky?: boolean
}

const projectsItems = [
  {
    key: "case_studies",
    label: "projects_menu.case_studies",
    description: "projects_menu.case_studies_description",
    href: "/case-studies/all",
  },
  {
    key: "light_projects",
    label: "projects_menu.light_projects",
    description: "projects_menu.light_projects_description",
    href: "/light-projects",
  },
] as const

function ProjectsDropdown({
  itemsColor,
  textActiveColor = "text-secondary",
  activeLineColor,
  isSticky = false,
}: ProjectsDropdownProps) {
  const t = useTranslations("Header")
  const locale = useLocale()
  const pathname = usePathname()
  const isProjectsActive = /^\/[a-z]{2}\/(case-studies|light-projects)(\/.*)?$/.test(pathname)
  const [isOpen, setIsOpen] = useState(false)
  const containerRef = useRef<HTMLLIElement>(null)

  useEffect(() => {
    if (!isOpen) {
      return
    }

    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [isOpen])

  return (
    <li ref={containerRef} className="relative group" onMouseLeave={() => setIsOpen(false)}>
      <div
        className={`flex items-center gap-1.5 px-2 py-1 transition-colors duration-200 ${isSticky ? "" : "group-hover:bg-black/54"}`}
      >
        <NavItem
          hoverItemsColor={isSticky ? "group-hover:text-secondary" : "group-hover:text-white"}
          itemsColor={itemsColor}
          href={`/${locale}/case-studies/all`}
          isActive={isProjectsActive}
          activeLineColor={isProjectsActive ? activeLineColor : "bg-transparent"}
          textActiveColor={textActiveColor}
        >
          {t("projects")}
        </NavItem>
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          aria-label={t("projects")}
          className={`${itemsColor} shrink-0 transition-all duration-150 group-hover:rotate-180 ${isSticky ? "group-hover:text-secondary" : "group-hover:text-white"} ${isOpen ? `rotate-180 ${isSticky ? "text-secondary" : "text-white"}` : ""}`}
        >
          <span className="block h-1.5 w-2.5">
            <ChevronDownSVG />
          </span>
        </button>
      </div>
      <div
        className={`pointer-events-none absolute left-0 top-full z-50 hidden w-115 ${isSticky ? "pt-6" : "pt-1"} opacity-0 transition-all duration-150 ease-in-out group-hover:block group-hover:pointer-events-auto group-hover:opacity-100 ${isOpen ? "block! pointer-events-auto! opacity-100!" : ""}`}
      >
        <ul className="flex flex-col divide-y divide-white/10 bg-black/54 p-2 shadow-[0_20px_50px_rgba(0,0,0,0.3)] backdrop-blur-lg">
          {projectsItems.map((item) => (
            <li key={item.key} className="transition-colors duration-150 hover:bg-white/10">
              <LinkView
                href={`/${locale}${item.href}`}
                className="group/item flex items-center justify-between gap-4 px-4 py-3 text-left"
              >
                <span>
                  <span className="block text-[17px] font-medium normal-case tracking-normal text-white transition-colors duration-150 group-hover/item:text-secondary">
                    {t(item.label)}
                  </span>
                  <span className="mt-1 block text-sm font-normal normal-case tracking-normal text-white/70">
                    {t(item.description)}
                  </span>
                </span>
                <span className="h-2.5 w-2.25 shrink-0 text-white transition-colors duration-150 group-hover/item:text-secondary">
                  <ArrowUpRightSVG />
                </span>
              </LinkView>
            </li>
          ))}
        </ul>
      </div>
    </li>
  )
}

export default ProjectsDropdown
