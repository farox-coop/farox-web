import UniqueButton from "@/components/UI/Buttons/UniqueButton"
import { useLocale, useTranslations } from "next-intl"
import TriangleDown from "../../SVG/TriangleDown"

export default function ReadyToStartSection() {
  const t = useTranslations("HomeSection.ReadyToStart")
  const locale = useLocale()

  return (
    <section className="flex h-[40.31rem] w-full mx-auto items-start justify-center bg-primary px-4 pt-[9.87rem] relative">
      <svg
        className="svg-background -z-10"
        width={200}
        height={721}
        viewBox="0 0 180 721"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M77.1294 630.6V702.5H18.3694V606.99H0.769531V720.1H178.939V702.5H94.7295V630.6H77.1294Z"
          stroke="#28FFE3"
          strokeMiterlimit={10}
        />
        <path
          d="M178.939 662.28V639.74L34.7795 524.53H178.939V506.93H0.769531V519.47L178.939 662.28Z"
          stroke="#28FFE3"
          strokeMiterlimit={10}
        />
        <path
          d="M44.6394 182.39C31.3394 190.28 20.5895 201.04 12.6895 214.34C4.77945 227.67 0.769531 242.61 0.769531 258.74V263.79C0.769531 275.51 3.02949 286.88 7.47949 297.59C11.9295 308.3 18.3794 317.95 26.6494 326.31C34.9894 334.57 44.6494 341.02 55.3594 345.47C66.0694 349.92 77.3993 352.18 89.0393 352.18C105.249 352.18 120.229 348.17 133.559 340.26C146.869 332.37 157.62 321.62 165.52 308.31C173.43 294.98 177.449 280 177.449 263.79V258.74C177.449 242.61 173.44 227.67 165.52 214.34C157.62 201.03 146.869 190.28 133.569 182.39C120.229 174.48 105.259 170.46 89.0493 170.46C72.8393 170.46 57.9894 174.47 44.6494 182.39H44.6394ZM124.709 197.58C135.369 203.91 143.989 212.53 150.319 223.19C156.639 233.83 159.839 245.79 159.839 258.74V263.79C159.839 276.82 156.639 288.82 150.319 299.46C143.989 310.12 135.379 318.74 124.709 325.07C114.069 331.39 102.069 334.59 89.0493 334.59C79.7993 334.59 70.7494 332.78 62.1694 329.2C53.5894 325.62 45.8294 320.45 39.1394 313.83C32.5094 307.13 27.3395 299.37 23.7495 290.78C20.1795 282.2 18.3694 273.12 18.3694 263.79V258.74C18.3694 245.79 21.5694 233.83 27.8794 223.19C34.2194 212.52 42.8295 203.91 53.4995 197.58C64.1395 191.26 76.0993 188.06 89.0493 188.06C101.999 188.06 114.079 191.26 124.709 197.58Z"
          stroke="#28FFE3"
          strokeMiterlimit={10}
        />
        <path
          d="M0.769531 2.57V26.07L75.8394 92.02L0.769531 158.08V181.58L89.2095 103.76L178.53 182.22L179.02 159.08L102.589 91.98L178.99 24.75V1.25L89.2295 80.24L0.769531 2.57Z"
          stroke="#28FFE3"
          strokeMiterlimit={10}
        />
        <path
          d="M54.5393 367.9C25.7893 367.9 1.49951 391.5 1.49951 419.44V482.62H178.899L178.789 465.24H18.8794V419.44C18.8794 400.92 35.2093 385.28 54.5393 385.28C73.8693 385.28 88.4495 400.6 88.4495 419.44V446.02L178.319 388.05L178.889 387.68V366.85L105.659 414.27C103.099 388.1 81.0393 367.91 54.5393 367.91V367.9Z"
          stroke="#28FFE3"
          strokeMiterlimit={10}
        />
      </svg>
      <div className="w-full max-w-screen-desktoplg laptop:flex laptop:flex-row justify-center items-center relative">
        {/* Left Triangle */}
        <div className="hidden-mobile laptop:absolute laptop:left-0 flex justify-start w-full laptop:w-auto">
          <TriangleDown />
        </div>

        <div className="flex flex-col items-center justify-center text-center z-20">
          <h2
            className={`${locale === "es" ? "w-auto" : "w-[210px]"} text-center laptop:w-auto text-5xl laptop:text-6xl desktop:text-[69px] font-medium tracking-tight text-white z-10`}
          >
            {t("title_1")} <span className="text-stroke-to-start">{t("title_2")}</span>
          </h2>
          <p className="w-[250px] laptop:w-auto text-xl laptop:text-4xl desktop:text-5xl text-white font-light mt-12 text-pretty z-10">
            {t("line_1")} <br />
            {t("line_2")}
          </p>
          <UniqueButton href={`/${locale}/contact`} buttonStyle="secondary" className="mt-20">
            {t("text_button")}
          </UniqueButton>
        </div>

        {/* Right Triangle */}
        <div className="hidden-mobile laptop:absolute laptop:right-0 flex justify-end w-full laptop:w-auto">
          <TriangleDown />
        </div>
      </div>
    </section>
  )
}
