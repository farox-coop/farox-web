import AnimateLine from "@/components/UI/AnimateLine/AnimateLine"
import Footer from "@/components/layout/Footer"
import HeadersContainer from "@/components/layout/Header/HeadersContainer"
import BePart from "@/components/layout/Home/BePart"
import HeroSection from "@/components/layout/Home/Hero"
import OwnCode from "@/components/layout/Home/OwnCode"
import ReadyToStartSection from "@/components/layout/Home/ReadyToStart"
import WeAreTheTech from "@/components/layout/Home/WeAreTheTech"
import WeBelieveCaseStudies from "@/components/layout/Home/WeBelieveCaseStudies"
import WeCreateSolutions from "@/components/layout/Home/WeCreateSolution"
import WeDo from "@/components/layout/Home/WeDo"
import WeUse from "@/components/layout/Home/WeUse"

export default function HomePage() {
  return (
    <>
      <HeadersContainer
        hoverItemsColor="hover:text-primary"
        itemsColor="#333"
        textColor="#333"
        charColor="#6843E1"
        languajeTextColor="#333"
      />
      <main className="flex flex-col justify-center items-center w-full h-full">
        <HeroSection />
        <WeCreateSolutions />
        <AnimateLine />
        <WeDo />
        <WeUse />
        <WeAreTheTech />
        <AnimateLine />
        <WeBelieveCaseStudies />
        <OwnCode />
        <ReadyToStartSection />
        <BePart />
      </main>
      <Footer />
    </>
  )
}
