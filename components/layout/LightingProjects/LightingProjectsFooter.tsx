"use client"
import LogoFaroxSVG from "@/components/SVG/LogoFaroxNavbar"
import LogoPSVG from "@/components/SVG/LogoPSVG"
import GithubIconSVG from "@/components/SVG/social/GithubIconSVG"
import InstaIconSVG from "@/components/SVG/social/InstaIconSVG"
import LinkedinIconSVG from "@/components/SVG/social/LinkedinIconSVG"
import XIconSVG from "@/components/SVG/social/XIconSVG"

export default function LightingProjectsFooter() {
  return (
    <footer className="relative w-full max-w-358 mx-auto py-12 laptop:py-16 desktop:py-20 px-4 laptop:px-8">
      <div className="relative z-10 flex items-center justify-between w-full">
        <div className="flex items-center gap-4">
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
            href="https://linkedin.com/company/farox-coop"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-70 transition-opacity"
          >
            <LinkedinIconSVG className="h-9.25 w-auto" />
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

        <LogoPSVG className="h-9.25 w-auto" />

        <LogoFaroxSVG className="h-9.25 w-auto" textColor="white" charColor="#28FFE3" />
      </div>
    </footer>
  )
}
