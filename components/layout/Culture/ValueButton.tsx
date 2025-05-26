import React, { type ReactNode } from "react"

type ValueButtonProps = {
  children: ReactNode
  className?: string
  onClick?: () => void
  isActive?: boolean
}

function ValueButton({ children, className, onClick, isActive }: ValueButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`${className} ${isActive ? "text-white" : "text-[#606060]"} focus-visible:text-primary laptop:hover:text-primary laptop:text-3xl desktop:text-[40px] font-bold px-2 tablet:px-0`}
    >
      {children}
    </button>
  )
}

export default ValueButton
