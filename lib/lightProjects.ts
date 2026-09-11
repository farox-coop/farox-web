import fs from "node:fs"
import path from "node:path"
import type { LightProject } from "@/types/light-project.type"
import { routing } from "@/i18n/routing"
import matter from "gray-matter"

export const LIGHT_PROJECT_CATEGORIES = ["light-projects", "not-so-light"] as const
export type LightProjectCategory = (typeof LIGHT_PROJECT_CATEGORIES)[number]

export function isLightProjectCategory(value: string): value is LightProjectCategory {
  return (LIGHT_PROJECT_CATEGORIES as readonly string[]).includes(value)
}

const featurePattern = /^-\s+\*\*(.+?)\*\*\s*[—–-]\s*(.+)$/

function parseBody(content: string): { intro: string; features: { title: string; description: string }[] } {
  const [introBlock, ...rest] = content.trim().split(/\n\s*\n/)

  const features = rest
    .join("\n")
    .split("\n")
    .reduce<{ title: string; description: string }[]>((acc, line) => {
      const match = line.trim().match(featurePattern)
      if (match) {
        acc.push({ title: match[1].trim(), description: match[2].trim() })
      }
      return acc
    }, [])

  return { intro: introBlock?.trim() || "", features }
}

function parseMarkdownContent(filename: string, fileContents: string): Omit<LightProject, "slug"> | null {
  try {
    const { data: frontmatter, content } = matter(fileContents)
    const { intro, features } = parseBody(content)
    return {
      title: frontmatter.title || "",
      description: frontmatter.description || "",
      intro,
      features,
      url_img: frontmatter.url_img || "",
      url_gh: frontmatter.url_gh || "",
      url_web: frontmatter.url_web || "",
    }
  } catch (error) {
    console.error(`Error parsing light project markdown (${filename}):`, error)
    return null
  }
}

export function getLightProjects(category: LightProjectCategory, locale: string): LightProject[] | null {
  if (!(routing.locales as readonly string[]).includes(locale)) {
    return null
  }

  const contentRoot = path.resolve(process.cwd(), "content")
  const contentDir = path.resolve(contentRoot, category, locale)

  if (!contentDir.startsWith(contentRoot + path.sep)) {
    return null
  }

  if (!fs.existsSync(contentDir)) {
    return null
  }

  const filenames = fs.readdirSync(contentDir).filter((name) => name.endsWith(".md"))

  const projects = filenames
    .map((filename) => {
      const filePath = path.join(contentDir, filename)
      const fileContents = fs.readFileSync(filePath, "utf8")
      const parsedContent = parseMarkdownContent(filename, fileContents)
      if (!parsedContent) {
        return null
      }
      const slug = filename.replace(".md", "")
      return { ...parsedContent, slug }
    })
    .filter((project): project is LightProject => project !== null)

  projects.sort((a, b) => {
    const numA = parseInt(a.slug.split("-").pop() || "0", 10)
    const numB = parseInt(b.slug.split("-").pop() || "0", 10)

    if (Number.isNaN(numA) || Number.isNaN(numB)) {
      return a.slug.localeCompare(b.slug)
    }

    return numA - numB
  })

  return projects
}
