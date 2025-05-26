"use client"
import { useEffect, useState } from "react"
import { useMediaQuery } from "react-responsive"
import Header from "./Header"
import MobileHeader from "./MobileHeader"

function HeadersContainer({
  hoverItemsColor,
  itemsColor,
  charColor,
  textColor,
  languajeTextColor,
}: {
  hoverItemsColor: string
  itemsColor: string
  charColor: string
  textColor: string
  languajeTextColor: string
}) {
  const [isMounted, setIsMounted] = useState(false)
  const isDesktopOrLaptop = useMediaQuery({ query: "(min-width: 1024px)" })

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <>
      {isDesktopOrLaptop ? (
        <Header
          hoverItemsColor={hoverItemsColor}
          itemsColor={itemsColor}
          textColor={textColor}
          charColor={charColor}
          languajeTextColor={languajeTextColor}
        />
      ) : (
        <MobileHeader hoverItemsColor={hoverItemsColor} languajeTextColor={languajeTextColor} />
      )}
    </>
  )
}

export default HeadersContainer
