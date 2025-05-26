import { nanoid } from "nanoid"
import DataShadow from "./DataShadow"

interface DataValuesProps {
  dataValues: { data: string; title: string }[]
}

const DataValues: React.FC<DataValuesProps> = ({ dataValues }) => {
  return (
    <article className="w-full relative bg-primary ">
      <section className="flex flex-col laptop:flex-row max-w-screen-desktoplg mx-auto py-0 tablet:py-[125px] w-full justify-around gap-20 laptop:gap-[170px] items-center scale-75 tablet:scale-100">
        {dataValues.map((item) => {
          const uniqueKey = nanoid()
          return <DataShadow key={`datavalues-${uniqueKey}`} data={item.data} title={item.title} />
        })}
      </section>
    </article>
  )
}

export default DataValues
