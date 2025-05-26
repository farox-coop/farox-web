import ArrowCardSVG from "@/components/SVG/ArrowCardSVG"
import { Link as LinkView } from "next-view-transitions"

export default function CardService({
  title,
  description,
  locale,
  scrollDate,
}: {
  title: string
  description: string
  locale?: string
  scrollDate: string
}) {
  const slug = `/${locale}/services#${scrollDate}`

  return (
    <LinkView
      href={slug}
      className="flex flex-col justify-evenly items-center max-w-[300px] tablet:max-w-[493px] laptop:max-w-[310px] desktop:max-w-[413px] desktoplg:max-w-[493px] w-full h-[230px] tablet:h-[529px] laptop:h-[480px] desktop:h-[540px] desktoplg:h-[590px] bg-black bg-opacity-85 text-white fill-primary hover:fill-secondary duration-300 relative px-9 tablet:px-14 laptop:px-12 desktop:px-14 group"
    >
      <div className="absolute h-1 w-[91%] laptop:w-[89%] bg-primary group-hover:bg-secondary transition-colors duration-300 -top-1 left-0 right-0 mx-auto" />
      <div className="absolute h-1 w-[91%] laptop:w-[89%] bg-primary group-hover:bg-secondary transition-colors duration-300 -bottom-1 left-0 right-0 mx-auto" />
      <div className="absolute h-[90%] laptop:h-[93%] w-1 bg-primary group-hover:bg-secondary transition-colors duration-300 -left-1 bottom-0 top-0 my-auto" />
      <div className="absolute h-[90%] laptop:h-[93%] w-1 bg-primary group-hover:bg-secondary transition-colors duration-300 -right-1 bottom-0 top-0 my-auto" />
      <div className="border-white border-0 tablet:border-b-[1px] pb-4 tablet:pb-10 laptop:pb-8 pt-6 tablet:pt-11 desktop:pb-11 desktop:pt-16">
        <span className="text-[32px] tablet:text-5xl laptop:text-[36px] desktop:text-5xl desktoplg:text-6xl leading-8 tablet:leading-[48px] laptop:leading-[38px] desktop:leading-[56px] whitespace-break-spaces text-balance block">
          {title}
        </span>
      </div>
      <p className="text-sm tablet:text-2xl laptop:text-lg desktoplg:text-2xl leading-5 tablet:leading-9 h-full pt-0 tablet:pt-6 laptop:pt-8">
        {description}
      </p>
      <div className="flex justify-end items-end w-full bottom-4 -left-4 tablet:bottom-9 tablet:-left-9 laptop:bottom-5 laptop:-left-5 desktop:bottom-9 desktop:-left-9 absolute">
        <div className="w-[20px] h-auto tablet:w-[38px] laptop:w-6 desktop:w-8 desktoplg:w-[46px]">
          <ArrowCardSVG />
        </div>
      </div>
    </LinkView>
  )
}
