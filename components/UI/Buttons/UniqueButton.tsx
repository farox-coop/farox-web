import { Link as LinkView } from "next-view-transitions"

interface UniqueButtonProps {
  children: React.ReactNode
  className?: string
  href: string
  buttonStyle?: "primary" | "secondary"
}

function UniqueButton({ children, className, href, buttonStyle }: UniqueButtonProps) {
  const primary = "text-secondary bg-black border-black hover:text-black hover:bg-transparent hover:border-secondary"
  const secondary =
    "bg-secondary text-black hover:bg-transparent hover:text-white border-secondary hover:border-secondary"

  if (buttonStyle === "primary") {
    return (
      <LinkView
        href={href}
        className={`
        flex items-center justify-center 
        rounded-full font-medium 
        text-[18px] laptop:text-xl desktop:text-[27px] 
        px-[18px] py-[6px] border desktop:px-8 desktop:py-3 
        transition-all duration-300 ease-in-out
        ${primary} ${className}
      `}
      >
        {children}
      </LinkView>
    )
  }

  if (buttonStyle === "secondary") {
    return (
      <LinkView
        href={href}
        className={`
        flex items-center justify-center 
        rounded-full font-medium 
        text-[18px] laptop:text-xl desktop:text-[27px] 
        px-[18px] py-[6px] border desktop:px-8 desktop:py-3 
        transition-all duration-300 ease-in-out
        ${secondary} ${className}
      `}
      >
        {children}
      </LinkView>
    )
  }
}

export default UniqueButton
