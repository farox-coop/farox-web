import DataValues from "@/components/layout/Culture/DataValues"
import FactTic from "@/components/layout/Culture/FactTic"
import HeroCulture from "@/components/layout/Culture/HeroCulture"
import PatioCoop from "@/components/layout/Culture/PatioCoop"
import Summary from "@/components/layout/Culture/Summary"
import WeAre from "@/components/layout/Culture/WeAre"
import WeBelieve from "@/components/layout/Culture/WeBelieve"
import WeCollaborate from "@/components/layout/Culture/WeCollaborate"
import WeCoop from "@/components/layout/Culture/WeCoop"
import WeValue from "@/components/layout/Culture/WeValue"
import Footer from "@/components/layout/Footer"
import HeadersContainer from "@/components/layout/Header/HeadersContainer"
import { useTranslations } from "next-intl"

function CulturePage() {
  const t = useTranslations("CulturePage.DataValues")

  const dataValues1 = [
    { data: "+10", title: t("provinces") },
    { data: "+30", title: t("cooperatives") },
    { data: "+500", title: t("professionals") },
  ]
  const dataValues2 = [
    { data: "+800", title: t("co_operators") },
    { data: "+60", title: t("cooperatives") },
    { data: "+37", title: t("digital_services") },
  ]

  return (
    <>
      <HeadersContainer
        hoverItemsColor="hover:text-secondary"
        itemsColor="text-[#fff]"
        textColor="#fff"
        charColor="#fff"
        languajeTextColor="text-[#fff]"
      />
      <main className="flex flex-col justify-center w-full bg-[#f1f1f1] bg-cover">
        <div className="w-full bg-culture-gradient">
          <HeroCulture />
          <WeAre />
        </div>
        <WeValue />
        <WeBelieve />
        <FactTic />
        <DataValues dataValues={dataValues1} />
        <PatioCoop />
        <DataValues dataValues={dataValues2} />
        <WeCollaborate />
        <Summary />
        <WeCoop />
      </main>
      <Footer />
    </>
  )
}

export default CulturePage
