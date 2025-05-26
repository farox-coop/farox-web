import ArrowCardSVG from "@/components/SVG/ArrowCardSVG"
import { Link as LinkView } from "next-view-transitions"

export default function CardCase({
  title,
  description,
  url,
}: {
  title: string | undefined
  description: string
  url: string
}) {
  return (
    <LinkView
      href={url}
      className="flex flex-col justify-center items-center w-full max-w-[300px] tablet:max-w-[497px] laptop:max-w-[310px] desktop:max-w-[410px] desktoplg:max-w-[497px] h-[120px] tablet:h-[385px] laptop:h-[260px] desktop:h-[330px] desktoplg:h-[385px] bg-black bg-opacity-85 text-white relative fill-primary hover:fill-secondary px-8 p-4 box-content transition-colors duration-300 group"
    >
      <div className="absolute h-[2px] w-[89%] tablet:h-[5px] laptop:w-[89%] bg-primary  group-hover:bg-secondary transition-colors duration-300 -top-[1px] tablet:-top-[5px] left-0 right-0 mx-auto" />
      <div className="absolute h-[2px] w-[89%] tablet:h-[5px] laptop:w-[89%] bg-primary  group-hover:bg-secondary transition-colors duration-300 -bottom-[1px] tablet:-bottom-[5px] left-0 right-0 mx-auto" />
      <div className="absolute h-[90%] tablet:h-[88%] w-[2px] tablet:w-[5px] bg-primary  group-hover:bg-secondary transition-colors duration-300 -left-[1px] tablet:-left-[5px] bottom-0 top-0 my-auto" />
      <div className="absolute h-[90%] tablet:h-[88%] w-[2px] tablet:w-[5px] bg-primary  group-hover:bg-secondary transition-colors duration-300 -right-[1px] tablet:-right-[5px] bottom-0 top-0 my-auto" />
      <div className="w-full leading-none tablet:leading-[56px] border-white border-b-[1px] pb-2 tablet:pb-4 max-w-[412px]">
        <span className="text-[31px] tablet:text-6xl laptop:text-3xl desktop:text-5xl desktoplg:text-6xl px-0 tablet:px-4 laptop:px-3 desktop:px-4">
          {title}
        </span>
      </div>
      <p className="text-sm tablet:text-2xl laptop:text-lg desktoplg:text-2xl leading-5 tablet:leading-9 px-0 tablet:px-6 laptop:px-3 desktop:px-6 pt-2 tablet:pt-8 desktop:pt-10 w-full max-h-[176px] line-clamp-3 tablet:line-clamp-4 mb-0 tablet:mb-10">
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
