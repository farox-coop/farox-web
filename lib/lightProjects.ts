import fs from "node:fs"
import path from "node:path"
import type { LightProject } from "@/types/light-project.type"
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

function parseMarkdownContent(fileContents: string): Omit<LightProject, "slug"> {
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
  } catch {
    return {
      title: "",
      description: "",
      intro: "",
      features: [],
      url_img: "",
      url_gh: "",
      url_web: "",
    }
  }
}

export function getLightProjects(category: LightProjectCategory, locale: string): LightProject[] | null {
  const contentDir = path.join(process.cwd(), "content", category, locale)

  if (!fs.existsSync(contentDir)) {
    return null
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
    const numA = parseInt(a.slug.split("-").pop() || "0", 10)
    const numB = parseInt(b.slug.split("-").pop() || "0", 10)
    return numA - numB
  })

  return projects
}
