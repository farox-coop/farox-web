import LightingProjectsNavbar from "@/components/layout/LightingProjects/LightingProjectsNavbar"
import LightingProjectList from "@/components/layout/LightingProjects/LightingProjectList"
import NotSoLight from "@/components/layout/LightingProjects/NotSoLight"
import ContactSection from "@/components/layout/LightingProjects/ContactSection"
import LightingProjectsFooter from "@/components/layout/LightingProjects/LightingProjectsFooter"
import LogoPSVG from "@/components/SVG/LogoPSVG"

function LightingProjectsPage() {
  return (
    <>
      <LightingProjectsNavbar />
      <main className="flex flex-col justify-center items-center w-full h-full relative">
        <div className="flex flex-col items-center justify-start w-full mt-20 laptop:mt-30 desktop:mt-37.5">
          <section className="text-center mb-10 laptop:mb-15 desktop:mb-17.5 z-40 px-4 laptop:px-8">
            <h1 className="flex items-center justify-center gap-8 laptop:gap-12 desktop:gap-16 text-[#ffffff] text-[40px] laptop:text-[58px] desktop:text-[78px] font-bold uppercase tracking-[0.2em]">
              <span>LIGHT</span>
              <span className="flex items-center gap-1">
                <LogoPSVG className="w-6 h-14 laptop:w-8 laptop:h-20 desktop:w-10.75 desktop:h-25 pt-0.5 mr-2 laptop:mr-2.5 desktop:mr-3.25 mt-0.5" />
                ROJECTS
              </span>
            </h1>
            <h2 className="text-[#ffffff] text-[22px] laptop:text-[28px] desktop:text-[33px] font-medium text-center mt-4 laptop:mt-5 desktop:mt-6">
              Open by default.
            </h2>
            <p className="text-[#ffffff] text-[20px] laptop:text-[26px] desktop:text-[30px] font-bold text-center mt-20 laptop:mt-30 desktop:mt-40">
              Open-source initiatives built around everyday problems.
            </p>
            <p className="text-[#ffffff] text-[18px] laptop:text-[24px] desktop:text-[30px] font-medium text-center mt-6 laptop:mt-8 desktop:mt-10 max-w-[600px] laptop:max-w-[700px] desktop:max-w-155 mx-auto">
              We create them to solve real needs we face or identify, then open them so others can use, adapt, and
              improve them.
            </p>
          </section>
          <LightingProjectList />
        </div>
        <NotSoLight />
        <ContactSection />
      </main>
      <LightingProjectsFooter />
    </>
  )
}

export default LightingProjectsPage
