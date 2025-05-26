import fs from "node:fs"
import path from "node:path"
import matter from "gray-matter"
import { NextResponse } from "next/server"

interface MarkdownContent {
  title: string
  description: string
  url_img: string
  markdownContent: string
  date: string
}

async function parseMarkdownContent(fileContents: string): Promise<MarkdownContent> {
  try {
    const { data: frontmatter, content } = matter(fileContents)
    return {
      title: frontmatter.title || "",
      description: frontmatter.description || "",
      url_img: frontmatter.url_img || "",
      markdownContent: content,
      date: frontmatter.date || "",
    }
  } catch (error) {
    return {
      title: "",
      description: "",
      url_img: "",
      markdownContent: "",
      date: "",
    }
  }
}

export async function GET(request: Request, { params }: { params: Promise<{ locale: string }> }) {
  try {
    const locale = (await params).locale
    const blogDir = path.join(process.cwd(), "content", "blog", locale)

    if (!fs.existsSync(blogDir)) {
      return NextResponse.json({ error: "Locale directory not found" }, { status: 404 })
    }

    const filenames = fs.readdirSync(blogDir).filter((name) => name.endsWith(".md"))

    const posts = await Promise.all(
      filenames.map(async (filename) => {
        const filePath = path.join(blogDir, filename)
        const fileContents = fs.readFileSync(filePath, "utf8")
        const parsedContent = await parseMarkdownContent(fileContents)
        const slug = filename.replace(".md", "")
        return {
          ...parsedContent,
          slug,
        }
      }),
    )

    // ordenar por fecha
    posts.sort((a, b) => {
      const dateA = new Date(a.date)
      const dateB = new Date(b.date)
      return dateB.getTime() - dateA.getTime()
    })

    return NextResponse.json(posts)
  } catch (error) {
    console.error("Error processing blog posts:", error)
    return NextResponse.json({ error: "Error processing blog posts" }, { status: 500 })
  }
}
