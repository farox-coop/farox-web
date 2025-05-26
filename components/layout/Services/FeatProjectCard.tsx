import ArrowCardSVG from "@/components/SVG/ArrowCardSVG"
import { Link as LinkView } from "next-view-transitions"

export default function FeatProjectCard({
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
      className="flex flex-col justify-center items-center gap-3 w-full max-w-[300px] tablet:max-w-[497px] laptop:max-w-[310px] desktop:max-w-[520px] desktoplg:max-w-[620px] h-[120px] tablet:h-[385px] laptop:h-[250px] desktoplg:h-[260px] bg-black bg-opacity-85 text-white relative fill-primary hover:fill-secondary px-2 mobile:px-8 p-4 tablet:px-10 tablet:p-0 box-content transition-colors duration-300 group"
    >
      <div className="absolute h-[2px] w-[89%] tablet:h-[5px] laptop:w-[89%] bg-primary group-hover:bg-secondary transition-colors duration-300 -top-[1px] tablet:-top-[5px] left-0 right-0 mx-auto" />
      <div className="absolute h-[2px] w-[89%] tablet:h-[5px] laptop:w-[89%] bg-primary group-hover:bg-secondary transition-colors duration-300 -bottom-[1px] tablet:-bottom-[5px] left-0 right-0 mx-auto" />
      <div className="absolute h-[90%] tablet:h-[88%] w-[2px] tablet:w-[5px] bg-primary group-hover:bg-secondary transition-colors duration-300 -left-[1px] tablet:-left-[5px] bottom-0 top-0 my-auto" />
      <div className="absolute h-[90%] tablet:h-[88%] w-[2px] tablet:w-[5px] bg-primary group-hover:bg-secondary transition-colors duration-300 -right-[1px] tablet:-right-[5px] bottom-0 top-0 my-auto" />
      <div className="w-full leading-none tablet:leading-[56px]">
        <span className="text-[31px] tablet:text-6xl laptop:text-4xl desktop:text-[45px] desktoplg:text-[55px] px-0 tablet:px-4 laptop:px-3 desktop:px-4">
          {title}
        </span>
      </div>
      <p className="text-sm tablet:text-2xl laptop:text-[20px] desktop:text-[24px] leading-5 tablet:leading-7 desktop:leading-9 px-0 tablet:px-6 laptop:px-3 desktop:px-6 w-full max-h-[108px] h-full line-clamp-3 tablet:line-clamp-4 mb-0 tablet:mb-3">
        {description}
      </p>
      <div className="flex justify-end items-end w-full bottom-4 -left-4 tablet:bottom-9 tablet:-left-9 laptop:bottom-5 laptop:-left-5 desktop:bottom-9 desktop:-left-9 absolute">
        <div className="w-[20px] h-auto tablet:w-[38px] laptop:w-[30px]">
          <ArrowCardSVG />
        </div>
      </div>
    </LinkView>
  )
}
