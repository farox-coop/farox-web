import AHeroSVG from "@/components/SVG/AHeroSVG"
import LogoFaroxBackground from "@/components/SVG/LogoFaroxBackground"
import TriangleDown from "@/components/SVG/TriangleDown"
import BlogList from "@/components/layout/Blog/BlogList"
import FoundThisHelpful from "@/components/layout/Blog/FoundThisHelpful"
import Footer from "@/components/layout/Footer"
import HeadersContainer from "@/components/layout/Header/HeadersContainer"
import { useLocale, useTranslations } from "next-intl"
import { Link as LinkView } from "next-view-transitions"

function BlogPage() {
  const t = useTranslations("ContactPage")
  const locale = useLocale()

  return (
    <>
      <HeadersContainer
        hoverItemsColor="hover:text-primary"
        itemsColor="#333"
        textColor="#333"
        charColor="#6843E1"
        languajeTextColor="#333"
      />
      <main className="flex flex-col justify-center items-center w-full h-full mb-20 relative bg-white tablet:bg-custom-gradient-blog">
        <div className="absolute z-1 top-0 left-0 right-0 mx-auto max-w-[2034px] hidden tablet:block">
          <AHeroSVG />
        </div>
        <div className="w-full laptop:flex laptop:flex-row justify-center items-center mx-auto mt-[150px] tablet:mt-[200px] relative max-w-screen-desktoplg">
          <div className="absolute top-[130px] laptop:top-[330px] -right-[7%] hidden laptop:block laptop:w-[200px] desktop:w-[250px] h-auto mx-auto ml-8 z-10">
            <LogoFaroxBackground color="#28FFE3" strokeW="1" opacity="1" />
          </div>
          <div className="hidden-mobile laptop:absolute laptop:left-0 laptop:top-[320px] flex justify-start w-full laptop:w-auto z-20">
            <TriangleDown />
          </div>
          <div className="hidden-mobile laptop:absolute laptop:right-0 laptop:top-[320px] flex justify-end w-full laptop:w-auto z-20">
            <TriangleDown />
          </div>
          <LinkView
            href={`/${locale}/contact`}
            className="hidden-mobile absolute tablet:top-[28.4%] laptop:top-[230px] tablet:right-[2%] laptop:right-[2%] desktop:right-[20px] transform translate-x-1/2 rotate-90 text-black laptop:text-base desktop:text-xl font-medium uppercase transition-colors hover:text-primary z-10"
          >
            {t("contact")}
          </LinkView>
          <div className="flex flex-col items-center justify-start w-full min-h-screen">
            <section className="text-center mb-[70px] tablet:mb-[90px] z-40">
              <h1 id="contact-link">
                <span
                  className="block text-primary text-[90px] desktop:text-[150px] font-bold"
                  style={{
                    textShadow: "-3px -3px 0 rgb(250, 250, 250), -4px -4px 0 #000",
                  }}
                >
                  BLOG
                </span>
              </h1>
            </section>
            <BlogList />
          </div>
        </div>
      </main>
      <FoundThisHelpful />
      <Footer />
    </>
  )
}

export default BlogPage
