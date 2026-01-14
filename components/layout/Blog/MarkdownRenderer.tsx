// @ts-nocheck necessary because of react-markdown types
import CalloutSVG from "@/components/SVG/CalloutSVG"
import type { ComponentPropsWithoutRef, ReactNode } from "react"
import ReactMarkdown from "react-markdown"
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter"
import { xonokai } from "react-syntax-highlighter/dist/cjs/styles/prism"
import rehypeRaw from "rehype-raw"
import remarkGfm from "remark-gfm"

interface CodeProps extends ComponentPropsWithoutRef<"code"> {
  inline?: boolean
  className?: string
  children?: ReactNode
}

export default function MarkdownRenderer({ content }: { content: string }) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw]}
      components={
        {
          code: ({ inline, className, children, ...props }: CodeProps) => {
            const match = /language-(\w+)/.exec(className || "")
            return !inline && match ? (
              // biome-ignore lint/suspicious/noExplicitAny: <explanation>
              <SyntaxHighlighter style={xonokai as any} language={match[1]} PreTag="div" className="mb-2" {...props}>
                {String(children).replace(/\n$/, "")}
              </SyntaxHighlighter>
            ) : (
              <code className={`${className ? `${className} ` : ""}mb-2`} {...props}>
                {children}
              </code>
            )
          },
          p: ({ node, children, ...props }) => {
            const maybeNode = node as { children?: Array<{ tagName?: string }> }
            const onlyChildIsCallout = maybeNode?.children?.length === 1 && maybeNode.children[0].tagName === "callout"
            if (onlyChildIsCallout) {
              return <>{children}</>
            }
            return <p {...props}>{children}</p>
          },
          a: ({ node, ...props }) => {
            const url = props.href || ""
            const isYouTube = url.includes("youtube.com/watch") || url.includes("youtu.be")

            if (isYouTube) {
              const videoId = url.includes("v=") ? url.split("v=")[1].split("&")[0] : url.split("/").pop()

              return (
                <span className="aspect-video my-8 w-full block">
                  <iframe
                    className="w-full h-full rounded-xl shadow-lg"
                    src={`https://www.youtube.com/embed/${videoId}`}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </span>
              )
            }
            return (
              <a
                className="text-primary hover:underline"
                target={props.href?.startsWith("http") ? "_blank" : undefined}
                rel={props.href?.startsWith("http") ? "noopener noreferrer" : undefined}
                {...props}
              />
            )
          },
          ul: ({ node, ...props }) => <ul className="list-disc pl-10 tablet:pl-16 my-4" {...props} />,
          ol: ({ node, ...props }) => <ol className="list-decimal pl-10 tablet:pl-16 my-4" {...props} />,
          img: ({ node, ...props }) => {
            const [altText, source] = props.alt?.split("|") ?? []
            return (
              <span className="my-8 flex flex-col items-start">
                <img {...props} alt={altText?.trim()} className="my-0 mx-auto rounded-lg shadow-sm" />
                <span className="text-sm text-gray-500 italic text-left mt-2">{source}</span>
              </span>
            )
          },
          blockquote: ({ node, ...props }) => (
            <blockquote className="border-l-4 border-primary pl-4 italic my-6" {...props} />
          ),
          h2: ({ node, ...props }) => <h2 className="text-xl font-semibold my-4" {...props} />,
          h3: ({ node, ...props }) => <h3 className="text-lg font-semibold my-4" {...props} />,
          h4: ({ node, ...props }) => <h4 className="text-md font-semibold my-4" {...props} />,
          h5: ({ node, ...props }) => <h5 className="text-sm font-semibold my-4" {...props} />,
          h6: ({ node, ...props }) => <h6 className="text-xs font-semibold my-4" {...props} />,
          strong: ({ node, ...props }) => <strong className="font-semibold text-primary" {...props} />,
          // Etiqueta personalizada para texto destacado Ej. <callout>Este es un texto destacado...</callout>
          callout: ({ node, children, ...props }: { node: unknown; children?: ReactNode; [key: string]: unknown }) => {
            return (
              <span className="relative mt-10 block">
                <span className="absolute -top-4 bg-primary text-white flex items-center justify-center">
                  <CalloutSVG />
                </span>
                <span className="p-6 pl-16 block">
                  <span className="font-semibold text-gray-800 block">{children}</span>
                </span>
              </span>
            )
          },
        } as unknown
      }
    >
      {content}
    </ReactMarkdown>
  )
}
