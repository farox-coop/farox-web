"use client"
import { useLocale } from "next-intl"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import styles from "./CodeCoop.module.css"

function CodeCoop() {
  const lineRef = useRef(null)
  const [isMounted, setIsMounted] = useState(false)
  const [isSafari, setIsSafari] = useState(false)
  const gifEs = useRef(`/videos/marcacodea.gif?${Math.random()}`)
  const gifEn = useRef(`/videos/gif-animado-noloop.gif?${Math.random()}`)
  const locale = useLocale()

  useEffect(() => {
    setIsMounted(true)

    // Detección de Safari en iOS/macOS
    const userAgent = navigator.userAgent
    const isIOS = /iPad|iPhone|iPod/.test(userAgent)
    const macosPlatforms = /Macintosh|MacIntel|MacPPC|Mac68K/.test(userAgent)

    setIsSafari(isIOS || macosPlatforms)
  }, [])

  if (locale === "es") {
    return (
      <div className="relative bg-transparent">
        {isSafari != null && isSafari === true ? (
          <Image
            src={gifEs.current}
            width={695}
            height={201}
            alt="Animación de texto, primero muestra COOP y luego cambia a CODE"
            unoptimized
            className="z-50 relative w-[280px] tablet:w-[370px] laptop:w-[420px] desktop:w-[770px] bg-transparent"
            placeholder="empty"
            suppressHydrationWarning
          />
        ) : (
          <video
            src="/videos/marcacodea.webm"
            width={900}
            height={201}
            className="object-contain relative z-50 bg-transparent h-auto w-[259px] tablet:w-[370px] laptop:w-[420px] desktop:w-[770px] mr-4 desktop:mr-12"
            autoPlay
            muted
            controlsList="nodownload"
            playsInline
            controls={false}
          />
        )}
        <div ref={lineRef} className={`${styles.heroLineES} ${isMounted ? styles.heroLineAnimateES : ""} z-10`} />
      </div>
    )
  }

  return (
    <div className="relative bg-transparent">
      {isSafari != null && isSafari === true ? (
        <Image
          src={gifEn.current}
          width={695}
          height={201}
          alt="Animación de texto, primero muestra COOP y luego cambia a CODE"
          unoptimized
          className="z-50 relative max-w-[271px] laptop:max-w-[390px] desktop:max-w-[695px] bg-transparent"
          placeholder="empty"
          style={{ backgroundColor: "transparent" }}
          suppressHydrationWarning
        />
      ) : (
        <video
          src="/videos/COOP-CODE.webm"
          width={695}
          height={201}
          className={styles.video}
          autoPlay
          muted
          controlsList="nodownload"
          playsInline
          style={{ background: "transparent" }}
          controls={false}
        />
      )}
      <div ref={lineRef} className={`${styles.heroLine} ${isMounted ? styles.heroLineAnimate : ""} z-10`} />
    </div>
  )
}

export default CodeCoop
