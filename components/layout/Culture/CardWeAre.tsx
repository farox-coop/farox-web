export default function CardWeAre({
  title,
  description,
}: {
  title: string
  description: string
}) {
  return (
    <div className="flex flex-col w-full tablet:flex-row justify-around items-start tablet:items-end border-b-2 border-secondary mx-[40px] tablet:mx-[60px] laptop:mx-[350px] z-20 pb-2 max-w-[324px] tablet:max-w-screen-desktoplg laptop:max-w-[1600px]">
      <div className="flex-[0_0_40%] pt-1 tablet:pt-[35px]">
        <h3 className="text-white text-2xl laptop:text-4xl desktop:text-[47px] font-bold">{title}</h3>
      </div>
      <div className="flex-[0_0_60%] pl-0 laptop:pl-0 pr-[40px] laptop:pr-[60px]">
        <p className="text-white text-base laptop:text-3xl desktop:text-[34px] leading-[20px] laptop:leading-[40px]">
          {description}
        </p>
      </div>
    </div>
  )
}
