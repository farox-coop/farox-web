import LightProjectsNavbar from "@/components/layout/LightProjects/LightProjectsNavbar"
import LightProjectList from "@/components/layout/LightProjects/LightProjectList"
import NotSoLight from "@/components/layout/LightProjects/NotSoLight"
import ContactSection from "@/components/layout/LightProjects/ContactSection"
import LightProjectsFooter from "@/components/layout/LightProjects/LightProjectsFooter"
import LogoPSVG from "@/components/SVG/LogoPSVG"
import { useTranslations } from "next-intl"

function LightProjectsPage() {
  const t = useTranslations("LightProjectsPage.HeroSection")

  return (
    <>
      <LightProjectsNavbar />
      <main className="flex flex-col justify-center items-center w-full h-full relative">
        <div className="flex flex-col items-center justify-start w-full mt-20 laptop:mt-30 desktop:mt-37.5">
          <section className="text-center mb-10 laptop:mb-15 desktop:mb-17.5 z-40 px-4 laptop:px-8 min-[1310px]:px-0">
            <h1 className="flex items-center justify-center gap-4 laptop:gap-12 desktop:gap-16 text-white text-[32px] laptop:text-[90px] font-bold uppercase tracking-widest laptop:tracking-[0.2em]">
              <span>LIGHT</span>
              <span className="flex items-center gap-1">
                <LogoPSVG className="w-4.5 h-auto laptop:w-12 mr-1 laptop:mr-2.5 desktop:mr-3.25 laptop:pt-0.5 laptop:mt-0.5" />
                <span className="sr-only">P</span>
                ROJECTS
              </span>
            </h1>
            <h2 className="text-white text-[16px] laptop:text-[33px] font-medium text-center mt-4 laptop:mt-5 desktop:mt-6">
              {t("subtitle")}
            </h2>
            <p className="text-white text-[18px] laptop:text-[33px] font-light text-center mt-20 laptop:mt-30 desktop:mt-40">
              {t("line_1")}
            </p>
            <p className="text-white text-[18px] laptop:text-[33px] font-light text-center mt-6 laptop:my-10 max-w-150 laptop:max-w-173 mx-auto">
              {t("line_2")}
            </p>
          </section>
          <LightProjectList />
        </div>
        <NotSoLight />
        <ContactSection />
      </main>
      <LightProjectsFooter />
    </>
  )
}

export default LightProjectsPage
