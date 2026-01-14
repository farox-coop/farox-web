export interface BlogPostType {
  slug: string
  title: string
  description: string
  url_img: string
  content: string
  markdownContent: string
  date: string
  author?: string
  tags?: string[]
  tintasur?: boolean
}
