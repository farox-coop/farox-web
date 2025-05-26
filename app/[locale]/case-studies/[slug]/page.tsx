import HeroCaseStudies from "@/components/layout/CaseStudies/HeroCaseStudies"
import WeThrive from "@/components/layout/CaseStudies/WeThrive"
import Footer from "@/components/layout/Footer"
import HeadersContainer from "@/components/layout/Header/HeadersContainer"
import ReadyToStartSection from "@/components/layout/Home/ReadyToStart"

export default async function CaseStudiesPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const slug = (await params).slug

  return (
    <>
      <HeadersContainer
        hoverItemsColor="hover:text-primary"
        languajeTextColor="text-[#333]"
        itemsColor="text-[#333]"
        textColor="#333"
        charColor="#6843E1"
      />
      <main className="flex flex-col justify-center bg-[#f1f1f1] items-center w-full">
        <HeroCaseStudies />
        <WeThrive filter={slug} />
        <ReadyToStartSection />
      </main>
      <Footer />
    </>
  )
}
