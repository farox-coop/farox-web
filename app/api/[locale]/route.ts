import fs from "node:fs"
import path from "node:path"
import type { CaseStudy } from "@/types/casestudy.type"
import { parseMarkdownContent } from "@/utils/parseMarkdownContent"
import matter from "gray-matter"
import { NextResponse } from "next/server"

export async function GET(request: Request, { params }: { params: Promise<{ locale: string }> }) {
  try {
    const locale = (await params).locale
    const caseStudiesDir = path.join(process.cwd(), "content", locale)
    // Verificar que el directorio existe
    if (!fs.existsSync(caseStudiesDir)) {
      return NextResponse.json({ error: `Locale directory ${locale} not found` }, { status: 404 })
    }
    const filenames = fs.readdirSync(caseStudiesDir).filter((name) => name.endsWith(".md"))
    const caseStudies: CaseStudy[] = filenames.map((filename) => {
      const filePath = path.join(caseStudiesDir, filename)
      const fileContents = fs.readFileSync(filePath, "utf8")
      const { content } = matter(fileContents)
      const parsedContent = parseMarkdownContent(content)
      const slug = filename.replace(".md", "")
      return {
        title: parsedContent.title || "",
        slug,
        client: parsedContent.client || "",
        tags: parsedContent.tags || [],
        description: {
          short: parsedContent.shortDescription || "",
          long: parsedContent.longDescription || "",
        },
        coop: parsedContent.coops || [],
        objective: parsedContent.objective || "",
        contribution: parsedContent.contribution || [],
        technologies: parsedContent.technologies || [],
        url_gh: parsedContent.url_gh || "",
        url_web: parsedContent.url_web || "",
        order: parsedContent.order || undefined,
        url_logo: parsedContent.url_logo || "",
        logo: parsedContent.logo || "",
      } as CaseStudy
    })
    // Ordenar por el campo 'order' ascendente, los que no tengan 'order' van al final
    caseStudies.sort((a, b) => {
      if (a.order === undefined && b.order === undefined) {
        return 0
      }
      if (a.order === undefined) {
        return 1
      }
      if (b.order === undefined) {
        return -1
      }
      return a.order - b.order
    })
    return NextResponse.json(caseStudies)
  } catch (error) {
    console.error("Error processing case studies:", error)
    return NextResponse.json({ error: "Error processing case studies" }, { status: 500 })
  }
}
