function MainTitle() {
  return (
    <div className="max-w-full ml-[10px] max-h-[250px] laptop:max-h-[500px]">
      <h1 className="grid grid-cols-5 grid-rows-4 leading-none">
        <span className="col-span-2 block text-[38px] laptop:text-[85px] font-medium text-white pt-[14px] laptop:pt-[17px] text-center">
          YOUR
          <span className="w-full block bg-secondary h-[5px] laptop:h-[8.5px] mt-[5px] laptop:mt-[10px]" />
        </span>{" "}
        <span className="col-span-3 col-start-3 flex items-end text-[70px] laptop:text-[138px] text-black font-medium">
          TECH
        </span>{" "}
        <span className="col-span-5 row-start-2 text-[67px] laptop:text-[130px] font-medium text-white -mt-[10px]">
          COMPASS
          <span className="w-[305px] laptop:w-[587px] block bg-secondary h-[5px] laptop:h-[8.5px] mt-[16px]" />
        </span>{" "}
        <span className="row-start-3 block text-[31px] laptop:text-[63px] font-bold text-white pt-[8px] laptop:pt-[11.5px]">
          FOR
        </span>{" "}
        <span className="col-span-4 row-start-3 block text-[65px] laptop:text-[132px] font-bold text-black ml-[23px]">
          SMART
        </span>{" "}
        <span className="col-span-5 row-start-4 flex items-start text-[39px] laptop:text-[78px] font-normal text-white -mt-[19px]">
          DEVELOPMENT
          <svg
            width={35}
            height={38}
            viewBox="0 0 36 39"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-[16px] h-[18px] laptop:w-[35px] laptop:h-[38px] mt-[15px] ml-[42px] laptop:mt-[33px] laptop:ml-[45px]"
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
        </span>
      </h1>
    </div>
  )
}

export default MainTitle
