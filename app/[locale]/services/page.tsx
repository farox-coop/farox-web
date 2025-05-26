import Footer from "@/components/layout/Footer"
import HeadersContainer from "@/components/layout/Header/HeadersContainer"
import FeaturedProjects from "@/components/layout/Services/FeaturedProjects"
import HeroServices from "@/components/layout/Services/HeroServices"
import InfoProduct from "@/components/layout/Services/InfoProduct"
import InfoSoftware from "@/components/layout/Services/InfoSoftware"
import InfoTeam from "@/components/layout/Services/InfoTeam"
import OurServices from "@/components/layout/Services/OurServices"

function ServicesPage() {
  return (
    <>
      <HeadersContainer
        hoverItemsColor="hover:text-secondary"
        itemsColor="text-[#fff]"
        textColor="#fff"
        charColor="#fff"
        languajeTextColor="text-[#fff]"
      />
      <main className="flex flex-col justify-center w-full bg-cover bg-[linear-gradient(194deg,rgba(103,67,220,1)_0%,rgba(103,67,220,1)_10%,rgba(209,199,244,1)_30%,rgba(244,242,253,1)_85%)]">
        <HeroServices />
        <OurServices />
        <InfoProduct />
        <InfoSoftware />
        <InfoTeam />
        <FeaturedProjects />
      </main>
      <Footer />
    </>
  )
}

export default ServicesPage
