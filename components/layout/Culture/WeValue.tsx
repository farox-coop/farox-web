"use client"
import { nanoid } from "nanoid"
import { useTranslations } from "next-intl"
import { useState } from "react"
import CultureCard from "./CultureCard"
import ValueButton from "./ValueButton"

function WeValue() {
  const t = useTranslations("CulturePage.WeValue")
  const values = [
    {
      title: t("cooperativism"),
      description: t("cooperativism_description"),
      imageSrc: "/images/culture/cooperativismo.svg",
    },
    {
      title: t("federalism"),
      description: t("federalism_description"),
      imageSrc: "/images/culture/federalismo.svg",
    },
    {
      title: t("trust"),
      description: t("trust_description"),
      imageSrc: "/images/culture/trust.svg",
    },
    {
      title: t("respect"),
      description: t("respect_description"),
      imageSrc: "/images/culture/respect.svg",
    },
  ]

  const [currentValue, setCurrentValue] = useState(values[0])

  return (
    <article className="flex justify-center w-full relative bg-we-value-gradient2 tablet:bg-we-value-gradient mt-[-1px] px-8">
      <section className="max-w-[340px] tablet:max-w-screen-desktoplg my-0 tablet:my-48 flex w-full flex-col items-center px-0 tablet:px-8 ">
        <h2 className="text-[27px] tablet:text-4xl laptop:text-[57px] text-white font-bold mt-6 z-20">
          {t("title_1")}
        </h2>

        <div className="flex flex-wrap tablet:flex-row justify-center w-full max-w-60 tablet:max-w-screen-desktoplg gap-2 tablet:gap-12 laptop:gap-20 mx-auto mt-6 mb-4 z-20">
          {values.map((value) => {
            const uniqueKey = nanoid()
            return (
              <ValueButton
                key={`wevalue-${uniqueKey}`}
                onClick={() => setCurrentValue(value)}
                isActive={currentValue.title === value.title}
              >
                {value.title}
              </ValueButton>
            )
          })}
        </div>

        <CultureCard
          imageSrc={currentValue.imageSrc}
          title={currentValue.title}
          description={currentValue.description}
        />
      </section>

      {/* <div className="absolute -bottom-1 tablet:bottom-[180px] left-0 right-0">
        <TrinagleComponent color="#f1f1f1" />
      </div> */}
    </article>
  )
}

export default WeValue
