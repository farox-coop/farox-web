import {
  AWSSVG,
  ChatGPTSVG,
  DjangoSVG,
  ElixirSVG,
  ErlangSVG,
  FlaskSVG,
  GoSVG,
  JavaScriptSVG,
  LangCheinSVG,
  NextSVG,
  NodeSVG,
  PandasSVG,
  PhoenixSingleSVG,
  PythonSVG,
  ReactNativeSVG,
  ReactSVG,
  RubySVG,
  RustSVG,
  SymfonySVG,
  VercelSVG,
  VueSVG,
} from "@/components/SVG/TechnologyIconSVG"

interface TechnologyIconsProps {
  technologies: string[]
}

const TechnologyIcons: React.FC<TechnologyIconsProps> = ({ technologies }) => {
  return (
    <>
      {technologies.map((technology) => {
        switch (technology) {
          case "NodeJS":
            return <NodeSVG key={technology} />
          case "Python":
            return <PythonSVG key={technology} />
          case "OpenAI":
            return <ChatGPTSVG key={technology} />
          case "Erlang":
            return <ErlangSVG key={technology} />
          case "React JS":
            return <ReactSVG key={technology} />
          case "AWS Lambda":
            return <AWSSVG key={technology} />
          case "React Native":
            return <ReactNativeSVG key={technology} />
          case "VueJS":
            return <VueSVG key={technology} />
          case "Elixir":
            return <ElixirSVG key={technology} />
          case "Django":
            return <DjangoSVG key={technology} />
          case "Phoenix":
            return <PhoenixSingleSVG key={technology} />
          case "Ruby":
            return <RubySVG key={technology} />
          case "Lanchain":
            return <LangCheinSVG key={technology} />
          case "Rust":
            return <RustSVG key={technology} />
          case "Symfony":
            return <SymfonySVG key={technology} />
          case "JavaScript":
            return <JavaScriptSVG key={technology} />
          case "Flask":
            return <FlaskSVG key={technology} />
          case "Go":
            return <GoSVG key={technology} />
          case "Next":
            return <NextSVG key={technology} />
          case "Panda":
            return <PandasSVG key={technology} />
          case "Vercel":
            return <VercelSVG key={technology} />
          default:
            return null
        }
      })}
    </>
  )
}

export default TechnologyIcons
