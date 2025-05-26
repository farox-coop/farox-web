"use client"

import { cubicBezier, motion, useScroll, useSpring, useTransform } from "framer-motion"
import { useRef } from "react"

const AnimateLine = () => {
  const ref = useRef<HTMLDivElement>(null)

  // Usamos useScroll con target y offset para hacer el scroll relativo al elemento
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  })

  // Aplicamos spring a scrollY para suavizar todas las animaciones
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  // Creamos una función de ease usando cubicBezier
  const customEase = cubicBezier(0.43, 0.13, 0.23, 0.96)

  // Transformación para mover la línea hacia abajo
  const translateY = useTransform(
    smoothProgress,
    [0, 0.5], // Usamos la primera mitad del scroll para la caída
    [0, 200], // Cae 200px
    { ease: customEase },
  )

  // Transformación para rotar la línea 90 grados después de caer
  const rotate = useTransform(
    smoothProgress,
    [0.5, 0.75], // Usamos el siguiente cuarto del scroll para la rotación
    [0, 90], // Rota de 0 a 90 grados
    { ease: customEase },
  )

  // Transformación para cambiar el tamaño de la línea cuando esté horizontal
  const width = useTransform(smoothProgress, [300, 301], ["2px", "2px"])
  const height = useTransform(smoothProgress, [0, 0.5, 0.6, 0.8], ["100px", "100px", "400px", "800px"], {
    ease: customEase, // Curva de easeo personalizada
  }) // Crece al triple del tamaño original

  return (
    <div ref={ref} className="hidden h-[700px] w-full laptop:flex items-center justify-center">
      <motion.div
        style={{
          width: width,
          height: height,
          backgroundColor: "black",
          y: translateY,
          rotate: rotate,
          transformOrigin: "center",
        }}
        transition={{
          y: { duration: 0.8 }, // Añadimos duración específica para y
          height: { duration: 0.8 }, // Añadimos duración específica para height
          rotate: { duration: 0.8 }, // Y para rotate
        }}
      />
    </div>
  )
}

export default AnimateLine
