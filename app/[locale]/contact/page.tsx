import TriangleDown from "@/components/SVG/TriangleDown"
import ContactForm from "@/components/contact/ContactForm"
import Footer from "@/components/layout/Footer"
import HeadersContainer from "@/components/layout/Header/HeadersContainer"
import { useLocale, useTranslations } from "next-intl"

function ContactPage() {
  const t = useTranslations("ContactPage")
  const locale = useLocale()

  return (
    <>
      <HeadersContainer
        hoverItemsColor="hover:text-primary"
        languajeTextColor="text-[#333]"
        itemsColor="text-[#333]"
        textColor="#333"
        charColor="#6843E1"
      />
      <div className="w-full max-w-screen-desktoplg laptop:flex laptop:flex-row justify-center items-center mx-auto mt-[150px] tablet:mt-[200px] relative">
        <div className="hidden-mobile laptop:absolute laptop:left-0 laptop:top-[20%] flex justify-start w-full laptop:w-auto px-8">
          <TriangleDown />
        </div>

        <div className="flex flex-col items-center justify-center w-full">
          <section className="text-center mb-[70px] tablet:mb-[90px]">
            <h1 className="font-bold text-[30px] tablet:text-[77px]">
              {t("title_1")} <span className="text-primary">{t("title_2")}</span>
            </h1>
            <h2 className="text-[16px] tablet:text-[27px]">{t("subtitle")}</h2>
          </section>
          <ContactForm />
        </div>
        <div
          className={`hidden-mobile absolute tablet:top-[28.4%] tablet:right-[2%] laptop:top-[7%] laptop:right-[4.2%] desktop:right-[3.2%] transform translate-x-1/2 rotate-90 text-primary laptop:text-base desktop:text-xl font-medium uppercase transition-colors z-10 before:content-[''] before:absolute before:w-[26px] before:h-[3px] before:bg-primary before:laptop:top-[11px] before:desktop:top-[13px] ${locale === "es" ? "laptop:before:right-[90px] before:desktop:right-[110px]" : "laptop:before:right-[80px] before:desktop:right-[100px]"}`}
        >
          {t("contact")}
        </div>
        <div className="hidden-mobile laptop:absolute laptop:left-0 laptop:top-[20%] laptop:right-0 flex justify-end w-full laptop:w-auto  px-8">
          <TriangleDown />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default ContactPage
