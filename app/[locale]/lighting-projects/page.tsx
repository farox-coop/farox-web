import LightingProjectList from "@/components/layout/LightingProjects/LightingProjectList"
import LightingProjectsNavbar from "@/components/layout/LightingProjects/LightingProjectsNavbar"
import FoundThisHelpful from "@/components/layout/Blog/FoundThisHelpful"
import Footer from "@/components/layout/Footer"
import { useTranslations } from "next-intl"

function LightingProjectsPage() {
  const t = useTranslations("LightingProjectsPage.ListingPage")

  return (
    <>
      <LightingProjectsNavbar />
      <main className="flex flex-col justify-center items-center w-full h-full mb-20 relative">
        <div className="flex flex-col items-center justify-start w-full min-h-screen mt-[150px] tablet:mt-[200px]">
          <section className="text-center mb-[70px] tablet:mb-[90px] z-40">
            <h1>
              <span className="block text-primary text-[60px] desktop:text-[120px] font-bold uppercase">
                {t("title")}
              </span>
            </h1>
          </section>
          <LightingProjectList />
        </div>
      </main>
      <FoundThisHelpful />
      <Footer />
    </>
  )
}

export default LightingProjectsPage
