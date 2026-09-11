"use client"

import DecorativeGlow from "@/components/layout/LightProjects/DecorativeGlow"
import HeadersContainer from "@/components/layout/Header/HeadersContainer"
import { usePathname } from "next/navigation"

export default function LightProjectsLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isDetail = /\/light-projects\/[^/]+\/?$/.test(pathname)

  return (
    <div className="w-full bg-[#020202] relative overflow-clip">
      <HeadersContainer
        hoverItemsColor="hover:text-secondary"
        itemsColor="text-white"
        charColor="#28FFE3"
        textColor="white"
        languajeTextColor="text-white"
        dark
      />
      {isDetail ? (
        <DecorativeGlow
          src="/images/light-projects/green-light-projects-detail.webp"
          width={1274}
          height={1114}
          mode="idle"
          className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none opacity-60 w-100 h-auto laptop:w-227 ml-2 mt-20"
          style={{ aspectRatio: "1274 / 1114" }}
          priority
        />
      ) : (
        <>
          <DecorativeGlow
            src="/images/light-projects/green-light-bg_mobile.webp"
            width={667}
            height={419}
            mode="idle"
            className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none block laptop:hidden opacity-60"
            style={{ width: "667px", height: "419px" }}
            priority
          />
          <DecorativeGlow
            src="/images/light-projects/green-light-bg.webp"
            width={3107}
            height={1687}
            mode="idle"
            className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none hidden laptop:block"
            style={{ width: "3107px", height: "1687px" }}
            priority
          />
        </>
      )}
      <DecorativeGlow
        src="/images/light-projects/green-light-bg_inf_mobile.webp"
        width={199}
        height={201}
        mode="inView"
        className="absolute bottom-0 right-0 pointer-events-none block laptop:hidden"
        style={{ width: "199px", height: "201px" }}
      />
      <DecorativeGlow
        src="/images/light-projects/green-light-bg_inf.webp"
        width={601}
        height={496}
        mode="inView"
        className="absolute bottom-0 right-0 pointer-events-none hidden laptop:block"
        style={{ width: "601px", height: "496px" }}
        priority
      />
      <div className="w-full max-w-7xl mx-auto relative z-10">{children}</div>
    </div>
  )
}
