import LightingProjectsNavbar from "@/components/layout/LightingProjects/LightingProjectsNavbar"
import LightingProjectList from "@/components/layout/LightingProjects/LightingProjectList"
import LogoPSVG from "@/components/SVG/LogoPSVG"

function LightingProjectsPage() {
  return (
    <>
      <LightingProjectsNavbar />
      <main className="flex flex-col justify-center items-center w-full h-full relative">
        <div className="flex flex-col items-center justify-start w-full min-h-screen mt-37.5 tablet:mt-50">
          <section className="text-center mb-17.5 tablet:mb-22.5 z-40">
            <h1 className="flex items-center justify-center gap-16 text-[#ffffff] text-[78px] font-bold uppercase tracking-[0.2em]">
              <span>LIGHT</span>
              <span className="flex items-center gap-1">
                <LogoPSVG className="w-10.75 h-25 pt-0.5 mr-3.25 mt-0.5" />
                ROJECTS
              </span>
            </h1>
            <h2 className="text-[#ffffff] text-[33px] font-medium text-center mt-6">Open by default.</h2>
            <p className="text-[#ffffff] text-[30px] font-bold text-center mt-40">
              Open-source initiatives built around everyday problems.
            </p>
            <p className="text-[#ffffff] text-[30px] font-medium text-center mt-10 max-w-155 mx-auto">
              We create them to solve real needs we face or identify, then open them so others can use, adapt, and
              improve them.
            </p>
          </section>
          <LightingProjectList />
        </div>
      </main>
    </>
  )
}

export default LightingProjectsPage
