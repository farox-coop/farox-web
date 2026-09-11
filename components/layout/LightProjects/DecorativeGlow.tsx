"use client"

import { motion, useInView, useReducedMotion } from "framer-motion"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"

type DecorativeGlowProps = {
  src: string
  width: number
  height: number
  mode: "idle" | "inView"
  className?: string
  style?: React.CSSProperties
  priority?: boolean
}

export default function DecorativeGlow({ src, width, height, mode, className, style, priority }: DecorativeGlowProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [idleReady, setIdleReady] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)
  const reduceMotion = useReducedMotion()
  const inView = useInView(ref, { margin: "300px", once: true })

  useEffect(() => {
    if (mode !== "idle") {
      return
    }

    const trigger = () => setIdleReady(true)
    if (typeof window.requestIdleCallback === "function") {
      const id = window.requestIdleCallback(trigger)
      return () => window.cancelIdleCallback(id)
    }
    const id = window.setTimeout(trigger, 200)
    return () => window.clearTimeout(id)
  }, [mode])

  const shouldRender = mode === "idle" ? idleReady : inView

  return (
    <div ref={ref} className={className} style={style}>
      {shouldRender && (
        <motion.div
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={reduceMotion ? { opacity: 1 } : { opacity: imageLoaded ? 1 : 0 }}
          transition={reduceMotion ? undefined : { duration: 0.8, ease: "easeOut" }}
          className="w-full h-full"
        >
          <Image
            src={src}
            alt=""
            width={width}
            height={height}
            className="w-full h-full"
            onLoad={() => setImageLoaded(true)}
            priority={priority}
          />
        </motion.div>
      )}
    </div>
  )
}
