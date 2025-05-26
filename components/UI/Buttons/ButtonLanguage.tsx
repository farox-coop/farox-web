"use client"
import { useParams, usePathname, useRouter } from "next/navigation"
import { useTransition } from "react"

interface ButtonLanguageProps {
  hoverItemsColor: string
  languajeTextColor: string
  language: "en" | "es"
}

function ButtonLanguage({ hoverItemsColor, language, languajeTextColor }: ButtonLanguageProps) {
  const [, startTransition] = useTransition()
  const router = useRouter()
  const { locale } = useParams()
  const pathname = usePathname()

  const handleClick = () => {
    startTransition(() => {
      let newPathname = ""
      if (pathname === "/") {
        newPathname = `/${language}`
      } else {
        newPathname = pathname.replace(`/${locale}`, `/${language}`)
      }
      router.replace(newPathname)
    })
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`lg:relative ${languajeTextColor} text-[12px] w-auto laptop:w-14 tablet:h-16 laptop:h-auto uppercase font-semibold laptop:text-base desktop:text-xl px-2 py-3 tablet:px-4 laptop:px-0 ${hoverItemsColor} ${locale === language
          ? 'bg-black rounded-se-full rounded-ss-full laptop:rounded-ss-none laptop:rounded-se-none rounded-ee-full rounded-es-full text-white laptop:before:absolute laptop:before:top-[-100vh] laptop:before:left-0 laptop:before:w-full laptop:before:h-[100vh] laptop:before:bg-black laptop:before:content-[""]'
          : "laptop:border-0 laptop:border-slate-600 border-0 bg-transparent"
        }`}
    >
      {language}
    </button>
  )
}

export default ButtonLanguage
