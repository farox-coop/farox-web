import Image from "next/image"

interface CultureCardProps {
  imageSrc: string
  title: string
  description: string
}

export default function CultureCard({ imageSrc, title, description }: CultureCardProps) {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-0  tablet:gap-[60px max-w-[322px] tablet:max-w-6xl mx-auto py-5 tablet:py-[50px] px-5 mobile:px-10 tablet:px-14 desktop:px-[90px] bg-white h-[596px] tablet:h-[400px] laptop:h-[480px] desktop:h-[552px] z-30 border-[1px] border-black">
      <div className="flex justify-center w-full md:w-1/2 box-content">
        <Image
          src={imageSrc}
          width="500"
          height="500"
          alt={title}
          className="size-[228px] tablet:size-[380px] desktop:size-[460px]"
        />
      </div>
      <div className="w-full md:w-1/2 py-2 tablet:py-10">
        <h2 className="text-4xl laptop:text-5xl desktop:text-[64px] text-center tablet:text-left font-bold text-[#8257E6] mb-4 tablet:mb-[40px]">
          {title}
        </h2>
        <p className="text-gray-700 text-xs tablet:text-sm laptop:text-base desktop:text-[20px] leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  )
}
