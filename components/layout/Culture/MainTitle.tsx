function MainTitle() {
  return (
    <div className="max-w-full max-h-[250px] laptop:max-h-[500px] relative">
      <h1 className="grid grid-cols-5 grid-rows-4 gap-y-5 leading-[44px] laptop:leading-[95px] text-center max-w-[612px]">
        <span className="col-span-2 row-start-1 flex items-start text-[72px] laptop:text-[145px] font-bold text-white">
          WE
        </span>
        <span className="col-span-3 col-start-3 text-[72px] laptop:text-[145px] font-bold text-white">OWN</span>
        <span className="block col-span-1 row-start-2 text-[21px] laptop:text-[50px] font-bold text-black text-center mt-[-6px] laptop:mt-[-12px] underline decoration-secondary underline-offset-8 laptop:underline-offset-[12px] leading-6 laptop:leading-[80px]">
          OUR
        </span>{" "}
        <span className="col-span-4 col-start-2 text-[45px] laptop:text-[90px] text-black font-bold leading-6 laptop:leading-[78px]">
          COMPANY,
        </span>{" "}
        <span className="col-span-1 row-start-3 block text-[21px] laptop:text-[50px] font-bold text-white mt-[-26px] laptop:mt-[-8px] underline decoration-secondary underline-offset-8 laptop:underline-offset-[12px] leading-5 laptop:leading-[6px]">
          WE
        </span>{" "}
        <span className="col-span-2 col-start-2 text-white text-[50px] laptop:text-[95px] font-bold mt-[-18px] leading-6 laptop:leading-[50px]">
          OWN
        </span>
        <span className="col-span-2 col-start-4 text-black text-[50px] laptop:text-[95px] font-bold mt-[-18px] leading-6 laptop:leading-[50px]">
          OUR
        </span>
        <span className="col-span-5 row-start-4 flex items-start text-[77px] laptop:text-[155px] font-bold text-black mt-[-28px] laptop:mt-[-18px] leading-6 laptop:leading-[40px]">
          FUTURE
        </span>
        <svg
          width={35}
          height={38}
          viewBox="0 0 36 39"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute right-[-16px] laptop:right-[-40px] top-[184px] laptop:top-[365px] w-[16px] h-[18px] laptop:w-[35px] laptop:h-[38px]"
        >
          <path
            d="M34.2 0H1.09998C0.499976 0 0 0.499976 0 1.09998C0 1.69998 0.499976 2.20001 1.09998 2.20001H31.6L2.80005 33.5C2.40005 33.9 2.40002 34.6 2.90002 35.1C3.30002 35.5 4 35.5 4.5 35L35 1.90002C35.3 1.60002 35.4 1.10001 35.2 0.700012C35 0.200012 34.6 0 34.2 0Z"
            fill="#28FFE3"
          />
          <path
            d="M34.1996 9.7002C33.5996 9.7002 33.0996 10.2002 33.0996 10.8002V37.8002C33.0996 38.4002 33.5996 38.9002 34.1996 38.9002C34.7996 38.9002 35.2997 38.4002 35.2997 37.8002V10.8002C35.2997 10.2002 34.7996 9.7002 34.1996 9.7002Z"
            fill="#28FFE3"
          />
        </svg>
      </h1>
    </div>
  )
}

export default MainTitle
