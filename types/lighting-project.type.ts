export interface LightingProject {
  slug: string
  title: string
  description: string
  url_img: string
  markdownContent: string
  date: string
  location?: string
  client?: string
  tags?: string[]
  technologies?: string[]
  aliases?: string[]
  url_gh?: string
  url_web?: string
}
