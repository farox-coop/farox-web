import ArrowCardSVG from "@/components/SVG/ArrowCardSVG"
import { Link as LinkView } from "next-view-transitions"
import type { ReactNode } from "react"

export default function CardService({
  title,
  description,
  secondaryDescription,
  mobileDescription,
  locale,
  scrollDate,
  wide = false,
  externalHref,
}: {
  title: string
  description: ReactNode
  secondaryDescription?: ReactNode
  mobileDescription?: ReactNode
  locale?: string
  scrollDate: string
  wide?: boolean
  externalHref?: string
}) {
  const slug = `/${locale}/services#${scrollDate}`

  const className = `flex flex-col justify-evenly items-center max-w-75 tablet:max-w-123.25 w-full h-57.5 tablet:h-132.25 bg-black/85 text-white fill-primary hover:fill-secondary duration-300 relative px-9 tablet:px-14 laptop:px-12 desktop:px-14 group ${
    wide
      ? "laptop:max-w-241 desktop:max-w-318 desktoplg:max-w-377.5 laptop:h-80 desktop:h-90 desktoplg:h-97.5"
      : "laptop:max-w-77.5 desktop:max-w-103.25 desktoplg:max-w-123.25 laptop:h-120 desktop:h-135 desktoplg:h-147.5"
  }`

  const content = (
    <>
      <div className="absolute h-1 w-[91%] laptop:w-[89%] bg-primary group-hover:bg-secondary transition-colors duration-300 -top-1 left-0 right-0 mx-auto" />
      <div className="absolute h-1 w-[91%] laptop:w-[89%] bg-primary group-hover:bg-secondary transition-colors duration-300 -bottom-1 left-0 right-0 mx-auto" />
      <div className="absolute h-[90%] laptop:h-[93%] w-1 bg-primary group-hover:bg-secondary transition-colors duration-300 -left-1 bottom-0 top-0 my-auto" />
      <div className="absolute h-[90%] laptop:h-[93%] w-1 bg-primary group-hover:bg-secondary transition-colors duration-300 -right-1 bottom-0 top-0 my-auto" />
      <div
        className={`border-white border-0 tablet:border-b pb-4 w-full tablet:pb-10 laptop:pb-8 pt-6 tablet:pt-11 desktop:pb-11 desktop:pt-16 ${wide ? "self-start w-full laptop:w-60 desktop:w-64 desktoplg:w-90" : ""}`}
      >
        <span className="text-[32px] tablet:text-5xl laptop:text-[36px] desktop:text-5xl desktoplg:text-6xl leading-8 tablet:leading-12 laptop:leading-9.5 desktop:leading-14 whitespace-break-spaces text-balance block">
          {title}
        </span>
      </div>
      <div className={`flex flex-col gap-4 h-full pt-0 tablet:pt-6 laptop:pt-8 ${wide ? "w-full" : ""}`}>
        {mobileDescription && (
          <p className="laptop:hidden text-sm tablet:text-2xl leading-5 tablet:leading-9">{mobileDescription}</p>
        )}
        <p
          className={`${mobileDescription ? "hidden laptop:block" : ""} text-sm tablet:text-2xl laptop:text-lg desktoplg:text-2xl leading-5 tablet:leading-9 laptop:leading-7 desktop:leading-9`}
        >
          {description}
        </p>
        {secondaryDescription && (
          <p className="hidden laptop:block laptop:text-lg desktoplg:text-2xl tablet:leading-9">
            {secondaryDescription}
          </p>
        )}
      </div>
      <div className="flex justify-end items-end w-full bottom-4 -left-4 tablet:bottom-9 tablet:-left-9 laptop:bottom-5 laptop:-left-5 desktop:bottom-9 desktop:-left-9 absolute">
        <div className="w-5 h-auto tablet:w-9.5 laptop:w-6 desktop:w-8 desktoplg:w-11.5">
          <ArrowCardSVG />
        </div>
      </div>
    </>
  )

  if (externalHref) {
    return (
      <a href={externalHref} target="_blank" rel="noopener noreferrer" className={className}>
        {content}
      </a>
    )
  }

  return (
    <LinkView href={slug} className={className}>
      {content}
    </LinkView>
  )
}
