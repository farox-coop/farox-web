"use client"
import LogoFaroxSVG from "@/components/SVG/LogoFaroxNavbar"
import LogoPSVG from "@/components/SVG/LogoPSVG"
import GithubIconSVG from "@/components/SVG/social/GithubIconSVG"
import InstaIconSVG from "@/components/SVG/social/InstaIconSVG"
import LinkedinIconSVG from "@/components/SVG/social/LinkedinIconSVG"
import XIconSVG from "@/components/SVG/social/XIconSVG"

export default function LightProjectsFooter() {
  return (
    <footer className="relative w-full max-w-7xl mx-auto py-12 laptop:py-16 desktop:py-20 px-4 laptop:px-8 min-[1310px]:px-0">
      <div className="relative z-10 flex flex-col items-center gap-6 laptop:flex-row laptop:items-center laptop:justify-between laptop:gap-0 w-full">
        <LogoFaroxSVG
          className="order-1 h-8 w-auto laptop:order-3 laptop:h-9.25"
          textColor="white"
          charColor="#28FFE3"
        />

        <div className="order-2 flex items-center gap-4 laptop:order-1">
          <a
            href="https://linkedin.com/company/farox-coop"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-70 transition-opacity"
          >
            <LinkedinIconSVG className="h-9.25 w-auto" />
          </a>
          <a
            href="https://github.com/farox-coop"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-70 transition-opacity"
          >
            <GithubIconSVG className="h-9.25 w-auto" />
          </a>
          <a
            href="https://instagram.com/farox.coop"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-70 transition-opacity"
          >
            <InstaIconSVG className="h-9.25 w-auto" />
          </a>
          <a
            href="https://x.com/faroxcoop"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-70 transition-opacity"
          >
            <XIconSVG className="h-9.25 w-auto" />
          </a>
        </div>

        <LogoPSVG className="hidden h-9.25 w-auto laptop:order-2 laptop:block" />
      </div>
    </footer>
  )
}
