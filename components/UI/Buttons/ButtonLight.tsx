import { Link as LinkView } from "next-view-transitions"

interface GetInTouchButtonProps {
  href?: string
  className?: string
  children: React.ReactNode
}

function ButtonLight({ href = "#", className, children }: GetInTouchButtonProps) {
  return (
    <LinkView
      href={href}
      className={`flex items-center justify-center rounded-full border border-secondary bg-secondary  laptop:text-xl desktop:text-[27px] font-medium text-black transition-all duration-500 ease-in-out hover:bg-transparent hover:text-white px-[18px] text-[20px] py-[6px] ${className} desktop:px-8 desktop:py-3`}
    >
      {children}
    </LinkView>
  )
}

export default ButtonLight
