import ArrowCardSVG from "@/components/SVG/ArrowCardSVG"
import { Link as LinkView } from "next-view-transitions"

export default function CardCase({
  title,
  url,
  children,
}: {
  title: string
  url: string
  children?: React.ReactNode
}) {
  return (
    <LinkView
      href={url}
      className="flex flex-col gap-6 tablet:gap-24 laptop:gap-3 laptop:justify-center items-center w-full max-w-[236px] tablet:max-w-[497px] laptop:w-[300px] desktop:w-auto laptop:max-w-[310px] desktop:max-w-[410px] desktoplg:max-w-[497px] h-[169px] tablet:h-[385px] laptop:h-[260px] desktop:h-[330px] desktoplg:h-[470px] bg-black bg-opacity-85 text-white relative fill-primary hover:fill-secondary px-8 tablet:px-2 desktop:px-3 desktoplg:px-8 p-4 box-content transition-colors duration-300 group"
    >
      <div className="absolute h-[2px] w-[89%] tablet:h-[5px] laptop:w-[89%] bg-primary group-hover:bg-secondary transition-colors duration-300 -top-[1px] tablet:-top-[5px] left-0 right-0 mx-auto" />
      <div className="absolute h-[2px] w-[89%] tablet:h-[5px] laptop:w-[89%] bg-primary group-hover:bg-secondary transition-colors duration-300 -bottom-[1px] tablet:-bottom-[5px] left-0 right-0 mx-auto" />
      <div className="absolute h-[90%] tablet:h-[88%] w-[2px] tablet:w-[5px] bg-primary group-hover:bg-secondary transition-colors duration-300 -left-[1px] tablet:-left-[5px] bottom-0 top-0 my-auto" />
      <div className="absolute h-[90%] tablet:h-[88%] w-[2px] tablet:w-[5px] bg-primary group-hover:bg-secondary transition-colors duration-300 -right-[1px] tablet:-right-[5px] bottom-0 top-0 my-auto" />

      <div className="relative mt-3 tablet:mt-6 laptop:mt-0 text-left w-full leading-none tablet:leading-[56px] pb-2 tablet:pb-2 laptop:pb-7  desktop:pb-8 max-w-[412px]">
        <span className="text-left text-[28px] tablet:text-6xl laptop:text-3xl desktop:text-5xl desktoplg:text-6xl px-0 tablet:px-0 block  laptop:pr-5 desktop:pr-0 desktop:px-0">
          {title}
        </span>
        <div className="absolute top-[75px] tablet:top-[170px] laptop:top-0 laptop:bottom-0 left-0 w-[150px] tablet:w-[290px] laptop:w-[200px] desktop:w-[260px] border-b-2 border-primary" />
      </div>

      <div className="w-full max-w-[410px] laptop:my-3 desktop:my-6 flex justify-between items-center">{children}</div>

      <div className="flex mt-4 laptop:mt-1 desktop:mt-4 justify-end items-end w-full bottom-4 -left-4 tablet:bottom-9 tablet:-left-9 laptop:bottom-5 laptop:-left-5 desktop:bottom-9 desktop:-left-9 absolute">
        <div className="w-[20px] h-[22px] tablet:h-auto tablet:w-[38px] laptop:w-6 desktop:w-8 desktoplg:w-[46px]">
          <ArrowCardSVG />
        </div>
      </div>
    </LinkView>
  )
}
