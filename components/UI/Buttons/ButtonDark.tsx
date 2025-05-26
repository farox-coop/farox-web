import { Link as LinkView } from "next-view-transitions"

interface DarkButtonProps {
  children: React.ReactNode
  href?: string
  colorText?: string
  className?: string
}

function ButtonDark({ children, href = "#", colorText = "text-white", className }: DarkButtonProps) {
  return (
    <LinkView
      href={href}
      className={`${colorText} flex items-center justify-center rounded-full bg-black px-[18px] text-[20px] py-[6px] tablet:px-6 tablet:py-2 desktop:px-8 desktop:py-3 font-medium laptop:text-xl desktop:text-[27px] transition-colors hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 ${className || ""}`}
    >
      {children}
    </LinkView>
  )
}

export default ButtonDark
