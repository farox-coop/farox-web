"use client"
import { useEffect, useState } from "react"
import { useMediaQuery } from "react-responsive"

export default function TrinagleHero({ color }: { color: string }) {
  const referenceWidth = 1630 // Ancho de referencia en px
  const leftHeight = 117 // Altura del lado izquierdo en px
  const rightHeight = 800 // Altura del lado derecho en px

  // Calculamos las proporciones relativas a 1366px
  const leftHeightPercentage = (leftHeight / referenceWidth) * 100
  const rightHeightPercentage = (rightHeight / referenceWidth) * 100

  const isMicroScreen = useMediaQuery({
    query: "(max-width:510px)",
  })
  const isXSmallScreen = useMediaQuery({
    query: "(min-width:511px) and (max-width:677px)",
  })
  const isSmallScreen = useMediaQuery({
    query: "(min-width:678px) and (max-width:767px)",
  })
  const isMediumScreen = useMediaQuery({
    query: "(min-width: 768px) and (max-width:1023px)",
  })
  const isLargeScreen = useMediaQuery({
    query: "(min-width: 1024px) and (max-width:1365px)",
  })
  const isXLScreen = useMediaQuery({
    query: "(min-width: 1364px)",
  })

  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const calculateHeight = (): string => {
    if (isMicroScreen) {
      return "285px"
    }
    if (isXSmallScreen) {
      return "165px"
    }
    if (isSmallScreen) {
      return "100px"
    }
    if (isMediumScreen) {
      return "120px"
    }
    if (isLargeScreen) {
      return "200px"
    }
    if (isXLScreen) {
      return "200px"
    }
    return "130px"
  }

  const calculateClipPath = (): string => {
    return `polygon(
      0 100%,
      0 ${100 - (leftHeightPercentage / rightHeightPercentage) * 100}%,
      100% 0,
      100% 100%
    )`
  }

  if (!isMounted) {
    return null
  }
  return (
    <div
      className="relative w-full desktop:pb-3 desktop:mb-0 bg-[#f1f1f1] flex items-center justify-center h-[1200px] tablet:h-[250px] laptop:h-auto "
      style={{
        height: calculateHeight(),
        clipPath: isXSmallScreen || isMicroScreen || isSmallScreen ? "none" : calculateClipPath(),
        backgroundColor: color,
      }}
    />
  )
}
