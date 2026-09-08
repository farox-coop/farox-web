export interface LightProject {
  slug: string
  title: string
  description: string
  intro: string
  features: { title: string; description: string }[]
  url_img: string | string[]
  url_gh?: string
  url_web?: string
}
