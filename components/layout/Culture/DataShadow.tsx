interface DataShadowProps {
  data: string
  title: string
}

const DataShadow: React.FC<DataShadowProps> = ({ data, title }) => {
  return (
    <div className="relative flex flex-col gap-3 justify-center items-center">
      <div className="w-[130px] h-[120px] bg-data-shadow bg-cover flex justify-center items-center">
        <span
          className="block text-secondary text-[90px] desktop:text-[105px] font-bold"
          style={{
            textShadow: "1px 1px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, -3px -3px 0 #6843E1",
          }}
        >
          {data}
        </span>
      </div>
      <span className="text-white text-[30px] desktop:text-[38px] font-bold">{title}</span>
    </div>
  )
}

export default DataShadow
