// import Link from 'next/link';
import { Link as LinkView } from "next-view-transitions"
import { useCallback } from "react"

interface NavItemProps {
  hoverItemsColor: string
  href: string
  children: React.ReactNode
  itemsColor?: string
  isActive?: boolean
  activeLineColor?: string
  textActiveColor?: string
}

function NavItem({
  href,
  children,
  hoverItemsColor,
  itemsColor,
  isActive,
  activeLineColor,
  textActiveColor = "text-secondary",
}: NavItemProps) {
  const handleClick = useCallback(
    (e: React.MouseEvent) => {
      if (href.includes("#")) {
        e.preventDefault()
        const sectionId = href.split("#")[1]
        const section = document.getElementById(sectionId)
        const stickyHeaderHeight = 135

        if (section) {
          const elementPosition = section.getBoundingClientRect().top + window.scrollY
          const offsetPosition = elementPosition - stickyHeaderHeight

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          })
        }
      }
    },
    [href],
  )

  return (
    <LinkView
      href={href}
      onClick={handleClick}
      className={`relative laptop:text-base desktop:text-xl font-medium uppercase transition-colors ${hoverItemsColor} ${isActive ? textActiveColor : itemsColor}`}
    >
      {children}
      {isActive && (
        <span
          className={`${activeLineColor} absolute left-1/2 top-[-24px] block w-[2px] h-5 -translate-x-1/2 `}
          aria-hidden="true"
        />
      )}
    </LinkView>
  )
}

export default NavItem
