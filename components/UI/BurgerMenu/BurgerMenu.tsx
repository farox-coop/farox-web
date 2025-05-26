import { useLocale, useTranslations } from "next-intl"
import Link from "next/link"
import { useState } from "react"
import styles from "./BurgerMenu.module.css"

function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const t = useTranslations("Header")
  const locale = useLocale()

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <button
        type="button"
        className={`${styles.menu} ${isOpen ? styles.opened : ""}`}
        onClick={handleToggle}
        aria-expanded={isOpen}
        aria-label="Main Menu"
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
          absolute top-[99%] bg-[#030207] text-white w-[300px] h-[250px]
          transition-all duration-500 ease-in-out
          ${isOpen ? "opacity-100 right-0" : "opacity-0 -right-full"}
          z-50
        `}
      >
        <ul className="flex flex-col h-full text-center py-0">
          <li className="first:border-none border-t border-gray-400 flex-1 flex items-center justify-center hover:bg-primary hover:text-secondary transition duration-300 ease-in-out">
            <Link href={`/${locale}/services`} className="text-lg hover:text-[#5033AD]">
              {t("services")}
            </Link>
          </li>
          <li className=" first:border-none border-t border-gray-400 flex-1 flex items-center justify-center hover:bg-primary hover:text-secondary transition duration-300 ease-in-out">
            <Link href={`/${locale}/case-studies/all`} className="text-lg hover:text-[#5033AD]">
              {t("case studies")}
            </Link>
          </li>
          <li className="first:border-none border-t border-gray-400 flex-1 flex items-center justify-center hover:bg-primary hover:text-secondary transition duration-300 ease-in-out">
            <Link href={`/${locale}/culture`} className="text-lg hover:text-[#5033AD]">
              {t("culture")}
            </Link>
          </li>
          <li className="first:border-none border-t border-gray-400 flex-1 flex items-center justify-center hover:bg-primary hover:text-secondary transition duration-300 ease-in-out">
            <Link href={`/${locale}/blog`} className="text-lg hover:text-[#5033AD]">
              Blog
            </Link>
          </li>
          <li className="first:border-none border-t border-gray-400 flex-1 flex items-center justify-center hover:bg-primary hover:text-secondary transition duration-300 ease-in-out                      ">
            <Link href={`/${locale}/contact`} className="text-lg hover:text-[#5033AD]">
              {t("contact")}
            </Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default BurgerMenu
