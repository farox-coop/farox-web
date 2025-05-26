import HeroCSDetail from "@/components/layout/CaseStudiesDetail/HeroCSDetail"
import Footer from "@/components/layout/Footer"
import HeadersContainer from "@/components/layout/Header/HeadersContainer"

async function DetailPage({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>
}) {
  const { locale } = await params

  return (
    <>
      <HeadersContainer
        hoverItemsColor="hover:text-primary"
        languajeTextColor="text-[#333]"
        itemsColor="text-[#333]"
        textColor="#333"
        charColor="#6843E1"
      />
      <main className="flex flex-col justify-center w-full">
        <HeroCSDetail locale={locale} />
      </main>
      <Footer />
    </>
  )
}

export default DetailPage
