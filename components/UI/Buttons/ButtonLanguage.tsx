"use client"
import { useParams, usePathname, useRouter } from "next/navigation"
import { useTransition } from "react"

interface ButtonLanguageProps {
  hoverItemsColor: string
  languajeTextColor: string
  language: "en" | "es"
  activeBgColor?: string
  activeTextColor?: string
}

function ButtonLanguage({
  hoverItemsColor,
  language,
  languajeTextColor,
  activeBgColor = "black",
  activeTextColor = "white",
}: ButtonLanguageProps) {
  const [, startTransition] = useTransition()
  const router = useRouter()
  const { locale } = useParams()
  const pathname = usePathname()

  const handleClick = () => {
    startTransition(() => {
      router.replace(pathname.replace(`/${locale}`, `/${language}`))
    })
  }

  const isActive = locale === language

  return (
    <button
      type="button"
      onClick={handleClick}
      style={
        {
          "--active-bg": activeBgColor,
          "--active-text": activeTextColor,
        } as React.CSSProperties
      }
      className={`lg:relative cursor-pointer ${languajeTextColor} text-[12px] w-auto laptop:w-14 tablet:h-16 laptop:h-auto uppercase font-semibold laptop:text-base desktop:text-xl px-2 py-3 tablet:px-4 laptop:px-0 ${hoverItemsColor} ${
        isActive
          ? 'btn-language-active rounded-se-full rounded-ss-full laptop:rounded-ss-none laptop:rounded-se-none rounded-ee-full rounded-es-full laptop:before:absolute laptop:before:top-[-100vh] laptop:before:left-0 laptop:before:w-full laptop:before:h-screen laptop:before:content-[""]'
          : "laptop:border-0 laptop:border-slate-600 border-0 bg-transparent"
      }`}
    >
      {language}
    </button>
  )
}

export default ButtonLanguage
