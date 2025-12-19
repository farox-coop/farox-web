"use client"
import LinkSVG from "@/components/SVG/LinkSVG"
import LogoFaroxBackground from "@/components/SVG/LogoFaroxBackground"
import Spinner from "@/components/SVG/Spinner"
import UniqueButton from "@/components/UI/Buttons/UniqueButton"
import TrinagleComponent from "@/components/UI/Triangle/TriangleComponent"
import { useCaseStudiesStore } from "@/store/useCaseStudiesStore"
import { fetchCaseStudies } from "@/utils/fetchCaseStudies"
import { nanoid } from "nanoid"
import { useTranslations } from "next-intl"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
import TechnologyIcons from "./TechnologyIcons"

interface HeroCSDetailProps {
  locale: string
}

// biome-ignore lint/complexity/noExcessiveCognitiveComplexity: <explanation>
export default function HeroCSDetail({ locale }: HeroCSDetailProps) {
  const t = useTranslations("Blog.BlogPage")
  const [imgError, setImgError] = useState(false)
  const { slug } = useParams()
  const { caseStudies, setIsLoading, setError, currentLocale } = useCaseStudiesStore()
  const caseStudy = caseStudies.find((item) => item.slug === slug) || null
  const isLoaded = caseStudies.length > 0
  const notFound = isLoaded && !caseStudy
  useEffect(() => {
    if (caseStudies.length === 0 || currentLocale !== locale) {
      fetchCaseStudies(locale, setIsLoading, setError)
    }
  }, [locale, fetchCaseStudies, setIsLoading, setError, caseStudies.length, currentLocale])

  const translateTag = (tag: string, locale: string): string => {
    const translations: { [key: string]: string } = {
      "Free Software": "SOFTWARE LIBRE",
      "Case Study": "Casos de Estudio",
    }
    if (locale === "es" && translations[tag]) {
      return translations[tag]
    }
    return tag
  }

  if (notFound) {
    return (
      <article className="w-full min-h-screen mt-[82px] tablet:mt-[112px] laptop:mt-[160px] bg-white laptop:bg-[#f1f1f1] relative">
        <div
          className="absolute z-0 w-full h-[640px] laptop:h-[600px] bg-[#7743DB]"
          style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 61%)" }}
        />
        <section className="max-w-screen-desktoplg mx-auto flex w-full flex-col items-center gap-[35px] laptop:h-auto z-20 laptop:pb-[100px] relative">
          <div className="max-w-screen-desktoplg min-h-screen mx-auto flex w-full justify-center items-center">
            <div className="flex flex-col items-center gap-4">
              <span className="text-6xl font-bold">Error 404</span>
              <span className="text-lg">{t("error_message")}</span>
              <UniqueButton href={`/${locale}/case-studies/all`} buttonStyle="primary" className="mt-20">
                {t("button")}
              </UniqueButton>
            </div>
          </div>
        </section>
        <div className="mt-auto z-0">
          <TrinagleComponent color="#fff" />
        </div>
      </article>
    )
  }

  if (!caseStudy) {
    return (
      <article className="w-full min-h-screen mt-[82px] tablet:mt-[112px] laptop:mt-[160px] bg-white laptop:bg-[#f1f1f1] relative">
        <div
          className="absolute z-0 w-full h-[640px] laptop:h-[600px] bg-[#7743DB]"
          style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 61%)" }}
        />
        <div className="flex flex-col items-center justify-center w-full">
          <article className="flex flex-col justify-center items-center max-w-4xl p-6 md:p-8 z-10">
            <div className="grid w-full place-items-center">
              <Spinner />
            </div>
            <p className="text-xl text-white">{t("loading")}</p>
          </article>
        </div>
        <div className="mt-auto z-0">
          <TrinagleComponent color="#fff" />
        </div>
      </article>
    )
  }

  const { logo, title, tags, description, objective, contribution, url_gh, url_web, url_logo, client } = caseStudy
  return (
    <article className="w-full min-h-screen mt-[82px] tablet:mt-[112px] laptop:mt-[160px] bg-white laptop:bg-[#f1f1f1] relative">
      <div
        className="absolute z-0 w-full h-[640px] laptop:h-[600px] bg-[#7743DB]"
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 80%, 0 61%)",
        }}
      />
      <section className="max-w-screen-desktoplg mx-auto flex w-full flex-col items-center gap-[35px] laptop:h-auto z-20 laptop:pb-[100px] relative">
        <div className="absolute hidden-mobile z-30 top-[35px] right-[-40px] desktop:right-[-75px] w-[190px] laptop:w-[270px] desktop:w-[336px]">
          <LogoFaroxBackground color="#28FFE3" strokeW="1" opacity="1" />
        </div>
        <div className="flex flex-col gap-[5px] laptop:gap-[54px] w-full px-[40px] laptop:px-[95px] pt-[110px] z-20">
          <h1 className="text-[25px] laptop:px-0 text-center laptop:text-left laptop:text-[50px] uppercase laptop:capitalize font-bold text-[#f1f1f1] laptop:pr-[190px] z-40">
            {title}
          </h1>
          <div
            id="contact-link"
            className="flex flex-wrap justify-center laptop:justify-start gap-[15px] py-[27px] laptop:py-0"
          >
            {tags.map((tag: string) => {
              const uniqueKey = nanoid()
              if (["Case Study", "Free Software", "Intercoop"].includes(tag)) {
                return (
                  <span
                    key={`herocsdetail-${uniqueKey}`}
                    className="text-base laptop:text-[28px] bg-secondary rounded-full px-[20px] py-0 laptop:py-2"
                  >
                    {translateTag(tag, locale)}
                  </span>
                )
              }
              if (["BACKEND", "AI-DSE", "FULL-STACK"].includes(tag)) {
                return (
                  <span
                    key={`herocsdetail-${uniqueKey}`}
                    className="text-base laptop:text-[28px] bg-black text-white rounded-full px-[20px] py-0 laptop:py-2"
                  >
                    {tag}
                  </span>
                )
              }
            })}
          </div>
          <div className="flex justify-center items-center laptop:hidden w-full">
            {logo && !imgError ? (
              <img
                src={logo}
                alt={`Una imagen que muestra el logo de ${client || "el cliente"}`}
                className="object-contain max-h-[50px] max-w-[200px]"
                onError={() => setImgError(true)}
              />
            ) : null}
          </div>
        </div>
        <div className="w-full laptop:px-[45px] desktop:px-[95px] flex flex-col laptop:flex-row items-center mt-[200px] extramob:mt-[300px] laptop:mt-0 laptop:gap-[15px] desktop:gap-0">
          <article
            className="flex-1 flex flex-col laptop:gap-[40px] desktop:pr-[145px] laptop:mt-[-270px]"
            style={{ flex: "0 0 40%" }}
          >
            <h2 className="text-[27px] px-[40px] laptop:px-0  laptop:text-[28px] text-center laptop:text-left font-bold text-primary leading-[35px] pb-[52px] laptop:pb-0">
              {description.short}
            </h2>
            <p className="text-[16px] laptop:text-[23px] px-[40px] laptop:px-0 pb-[30px] laptop:pb-0 leading-[30px]">
              {description.long}
            </p>
            <div className="flex gap-3 flex-wrap justify-center laptop:justify-start px-[40px] laptop:px-0 w-full uppercase">
              {caseStudy?.coop
                ? caseStudy.coop.map((item) => {
                    const uniqueKey = nanoid()
                    return (
                      <span key={`coop-item-${uniqueKey}`} className="text-base font-semibold">
                        {item}
                      </span>
                    )
                  })
                : null}
            </div>
            <div className="flex flex-col items-center laptop:flex-row laptopitems-start gap-4 pt-[50px] laptop:pt-0 pb-[100px] laptop:pb-0 laptop:gap-[58px]">
              {url_gh ? (
                <a
                  href={url_gh}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black w-[120px] laptop:w-auto h-[27px] laptop:h-auto text-white text-[20px] laptop:text-[29px] rounded-full px-[10px] laptop:px-[25px] flex flex-row justify-around items-center gap-[15px] border border-black hover:text-black hover:bg-transparent hover:border-secondary group"
                >
                  GitHub
                  <LinkSVG />
                </a>
              ) : null}
              {url_web ? (
                <a
                  href={url_web}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black w-[120px] laptop:w-auto h-[27px] laptop:h-auto text-white text-[20px] laptop:text-[29px] rounded-full px-[10px] laptop:px-[25px] flex flex-row justify-around items-center gap-[15px] border border-black hover:text-black hover:bg-transparent hover:border-secondary group"
                >
                  Web
                  <LinkSVG />
                </a>
              ) : null}
            </div>
          </article>
          <article className="laptop:flex-1 bg-black laptop:bg-opacity-84  relative z-30 " style={{ flex: "0 0 60%" }}>
            <div className="absolute h-[2px] w-[70%] tablet:h-[5px] laptop:w-[60%] bg-secondary  group-hover:bg-secondary transition-colors duration-300 -top-[1px] tablet:-top-[5px] left-[-5px] right-0  hidden-mobile" />
            <div className="absolute h-[90%] tablet:h-[10%] w-[2px] tablet:w-[5px] bg-secondary  group-hover:bg-secondary transition-colors duration-300 -left-[1px] tablet:-left-[5px] bottom-0 top-[-5px]  hidden-mobile" />
            {/* Contenido */}
            <div className="laptop:px-[40px] desktop:px-[84px] pt-0 laptop:py-[35px] desktop:py-[45px] desktopm:py-[58px] mb-[90px] flex flex-col laptop:gap-[30px] desktop:gap-[52px]">
              <div className="flex w-full hidden-mobile">
                <div className="w-[275px] h-[50px] ml-auto flex items-center justify-center overflow-hidden">
                  {logo && !imgError ? (
                    url_logo ? (
                      <a
                        href={url_logo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full h-full flex items-center justify-center"
                      >
                        <img
                          src={logo}
                          alt={`Una imagen que muestra el logo de ${client || "el cliente"}`}
                          className="object-contain max-h-[50px] max-w-[275px]"
                          onError={() => setImgError(true)}
                        />
                      </a>
                    ) : (
                      <img
                        src={logo}
                        alt={`Una imagen que muestra el logo de ${client || "el cliente"}`}
                        className="object-contain max-h-[50px] max-w-[275px]"
                        onError={() => setImgError(true)}
                      />
                    )
                  ) : null}
                </div>
              </div>
              <h3 className="text-white mx-auto pt-[110px] laptop:pt-[0] pb-[70px] laptop:pb-0 laptop:mx-0 text-[27px] laptop:text-[42px] font-bold">
                {locale === "es" ? "OBJETIVO" : "GOAL"}
              </h3>
              <p className="text-white mx-auto laptop:mx-0 text-[16px] laptop:text-[25px] laptop:pr-[70px] desktop:pr-[153px] px-[40px] laptop:px-0 leading-[30px]">
                {objective}
              </p>
              <h3 className="text-white px-[50px] laptop:px-0 text-center pt-[70px] pb-[50px] laptop:pb-0 tablet:pt-[110px] laptop:pt-[0] laptop:text-left mx-auto laptop:mx-0 text-[27px] laptop:text-[42px] font-bold">
                {locale === "es" ? "NUESTRA CONTRIBUCIÓN" : "OUR CONTRIBUTION"}
              </h3>
              <ul className="px-[40px] laptop:px-0 laptop:pr-[70px] desktop:pr-[153px] text-[16px] laptop:text-[26px] text-white leading-[30px] space-y-5 laptop:mb-0">
                {contribution?.map((item: string) => {
                  const uniqueKey = nanoid()
                  return (
                    <li key={`contribution-${uniqueKey}`} className="flex items-start gap-[20px]">
                      <div className="w-[29px] h-[29px] pt-[5px]">
                        <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M29.8098 0.870117H25.9898L15.2398 13.1001L4.4798 0.870117H0.649841L13.3298 15.2802L0.549805 29.8301L4.31982 29.9102L15.2498 17.4601L26.1998 29.9001H30.0298L17.1598 15.2802L29.8098 0.870117Z"
                            stroke="white"
                            strokeWidth="0.5"
                            strokeMiterlimit="10"
                          />
                        </svg>
                      </div>
                      {item}
                    </li>
                  )
                })}
              </ul>
              <div className="flex flex-row items-center justify-center laptop:justify-start laptop:items-center  my-[50px] laptop:my-0 mx-auto laptop:mx-0 flex-wrap laptop:mt-0 px-[40px] gap-[30px] laptop:px-0 z-20">
                {caseStudy?.technologies && <TechnologyIcons technologies={caseStudy.technologies} />}
              </div>
            </div>
            <div
              className="hidden-mobile absolute bottom-[-2px] left-0 right-[-1px] w-[calc(100%+2px)] h-[90px]"
              style={{
                background: "linear-gradient(to bottom right, transparent 49%, #f1f1f1 50%)",
              }}
            />
            <div
              className="laptop:hidden absolute bottom-[-1px] left-0 right-[-1px] w-[calc(100%+1px)] h-[90px]"
              style={{
                background: "linear-gradient(to bottom right, transparent 49%, #fff 50%)",
              }}
            />
          </article>
        </div>
      </section>
      <div className="mt-auto z-0">
        <TrinagleComponent color="#fff" />
      </div>
    </article>
  )
}
