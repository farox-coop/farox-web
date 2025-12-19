import React from "react"
import type { ComponentPropsWithoutRef, ReactNode } from "react"
import ReactMarkdown from "react-markdown"
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter"
import { xonokai } from "react-syntax-highlighter/dist/cjs/styles/prism"
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
      components={{
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
        a: ({ node, ...props }) => (
          <a
            className="text-primary hover:underline"
            target={props.href?.startsWith("http") ? "_blank" : undefined}
            rel={props.href?.startsWith("http") ? "noopener noreferrer" : undefined}
            {...props}
          />
        ),
        ul: ({ node, ...props }) => <ul className="list-disc pl-6 my-4" {...props} />,
        ol: ({ node, ...props }) => <ol className="list-decimal pl-6 my-4" {...props} />,
        img: ({ node, ...props }) => <img className="my-6 mx-auto" {...props} alt={props.alt} />,
        blockquote: ({ node, ...props }) => (
          <blockquote className="border-l-4 border-primary pl-4 italic my-6" {...props} />
        ),
        h2: ({ node, ...props }) => <h2 className="text-xl font-semibold my-4 text-primary" {...props} />,
      }}
    >
      {content}
    </ReactMarkdown>
  )
}
