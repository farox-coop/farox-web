import {
  PythonSVG,
  PandasSVG,
  ClaudeSVG,
  ChatGPTSVG,
  ErlangSVG,
  ElixirSVG,
  NodeSVG,
  GoSVG,
  NextSVG,
  PhoenixSVG,
  DjangoSVG,
  FlaskSVG,
} from '../../SVG/TechnologyIconSVG';

interface CardServiceProps {
  title: string;
  icons: string[];
}

const iconMap: { [key: string]: (key: string) => JSX.Element } = {
  pandas: key => (
    <div key={key} className="w-[11.75rem] h-auto">
      <PandasSVG />
    </div>
  ),
  claude: key => (
    <div key={key} className="w-28 h-auto">
      <ClaudeSVG />
    </div>
  ),
  chatgpt: key => (
    <div key={key} className="w-12 h-auto">
      <ChatGPTSVG />
    </div>
  ),
  python: key => (
    <div key={key} className="w-12 h-auto">
      <PythonSVG />
    </div>
  ),
  erlang: key => (
    <div key={key} className="w-12 h-auto">
      <ErlangSVG />
    </div>
  ),
  elixir: key => (
    <div key={key} className="w-14 h-auto">
      <ElixirSVG />
    </div>
  ),
  nodejs: key => (
    <div key={key} className="w-16 h-auto">
      <NodeSVG />
    </div>
  ),
  go: key => (
    <div key={key} className="w-16 h-auto">
      <GoSVG />
    </div>
  ),
  nextjs: key => (
    <div key={key} className="w-[5.3rem] h-auto">
      <NextSVG />
    </div>
  ),
  phoenix: key => (
    <div key={key} className="w-[5.5rem] h-auto">
      <PhoenixSVG />
    </div>
  ),
  django: key => (
    <div key={key} className="w-20 h-auto">
      <DjangoSVG />
    </div>
  ),
  flask: key => (
    <div key={key} className="w-[5.4rem] h-auto">
      <FlaskSVG />
    </div>
  ),
};

export default function CardService({ title, icons }: CardServiceProps) {
  return (
    <section className="flex flex-col justify-center items-start w-[20.6rem] h-[22.5rem] sm:w-[23rem] sm:h-[25rem] md:h-[35.5rem] farox2xl:h-[28.25rem] farox3xl:h-[35.5rem] md:w-[32rem] farox2xl:w-[25.85rem] farox3xl:w-[32rem] bg-black px-10 md:px-16 farox2xl:px-12 farox3xl:px-16 tracking-[-0.125rem] py-10  md:py-24 farox2xl:py-12 farox3xl:py-24 gap-6 md:gap-10 farox2xl:gap-8 farox3xl::gap-10 rounded-[40px] md:rounded-[5rem] border-[1px] border-tertiary font-light">
      <div className="w-[1.62rem] sm:w-7 h-1 md:w-9 md:h-2 farox2xl:w-[1.8rem] farox2xl:h-[0.4rem] farox3xl:w-9 farox3xl:h-2 bg-tertiary rounded-3xl mt-4"></div>
      <h3 className="flex justify-center items-center w-full text-[2.80rem]  sm:text-[3.05rem] text-4xl md:text-[4.25rem] farox2xl:text-[3.45rem] farox3xl:text-[4.25rem] leading-[1]">
        {title}
      </h3>
      <div className="w-full max-w-[11.35rem] sm:max-w-[12.75rem] md:max-w-72 farox2xl:max-w-56 farox3xl:max-w-72 border-b-[1px] border-b-tertiary mt-4"></div>
      <div className="flex gap-4 items-center justify-between h-[2.45rem] w-[15.25rem] sm:h-[2.55rem] sm:w-[17.25rem] md:h-[3.75rem] farox2xl:h-[50px] farox3xl:h-[3.75rem] md:w-[24rem] farox2xl:w-[19rem] farox3xl:w-[24rem]">
        {icons.map((icon, index) => iconMap[icon](`iconsvg-service-${index}`))}
      </div>
    </section>
  );
}
