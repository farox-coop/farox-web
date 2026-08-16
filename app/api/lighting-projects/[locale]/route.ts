import fs from "node:fs"
import path from "node:path"
import type { LightingProject } from "@/types/lighting-project.type"
import matter from "gray-matter"
import { NextResponse } from "next/server"

function parseMarkdownContent(fileContents: string): Omit<LightingProject, "slug"> {
  try {
    const { data: frontmatter, content } = matter(fileContents)
    return {
      title: frontmatter.title || "",
      description: frontmatter.description || "",
      url_img: frontmatter.url_img || "",
      markdownContent: content,
      date: frontmatter.date || "",
      location: frontmatter.location || "",
      client: frontmatter.client || "",
      tags: frontmatter.tags || [],
      technologies: frontmatter.technologies || [],
      aliases: frontmatter.aliases || [],
    }
  } catch {
    return {
      title: "",
      description: "",
      url_img: "",
      markdownContent: "",
      date: "",
      location: "",
      client: "",
      tags: [],
      technologies: [],
      aliases: [],
    }
  }
}

export async function GET(_request: Request, { params }: { params: Promise<{ locale: string }> }) {
  try {
    const locale = (await params).locale
    const contentDir = path.join(process.cwd(), "content", "lighting-projects", locale)

    if (!fs.existsSync(contentDir)) {
      return NextResponse.json({ error: "Locale directory not found" }, { status: 404 })
    }

    const filenames = fs.readdirSync(contentDir).filter((name) => name.endsWith(".md"))

    const projects = filenames.map((filename) => {
      const filePath = path.join(contentDir, filename)
      const fileContents = fs.readFileSync(filePath, "utf8")
      const parsedContent = parseMarkdownContent(fileContents)
      const slug = filename.replace(".md", "")
      return {
        ...parsedContent,
        slug,
      }
    })

    projects.sort((a, b) => {
      const dateA = new Date(a.date)
      const dateB = new Date(b.date)
      return dateB.getTime() - dateA.getTime()
    })

    return NextResponse.json(projects)
  } catch (error) {
    console.error("Error processing lighting projects:", error)
    return NextResponse.json({ error: "Error processing lighting projects" }, { status: 500 })
  }
}
