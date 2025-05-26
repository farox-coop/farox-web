import BlogPost from "@/components/layout/Blog/BlogPost"
import FoundThisHelpful from "@/components/layout/Blog/FoundThisHelpful"
import Footer from "@/components/layout/Footer"
import HeadersContainer from "@/components/layout/Header/HeadersContainer"

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string; locale: string }> }) {
  const { slug } = await params

  return (
    <>
      <HeadersContainer
        hoverItemsColor="hover:text-primary"
        languajeTextColor="text-[#333]"
        itemsColor="text-[#333]"
        textColor="#333"
        charColor="#6843E1"
      />
      <BlogPost slug={slug} />
      <FoundThisHelpful />
      <Footer />
    </>
  )
}
