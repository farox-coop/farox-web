interface Description {
  short: string
  long: string
}

export interface CaseStudy {
  client: string
  title: string
  slug: string
  tags: string[]
  description: Description
  coop?: string[]
  objective: string
  contribution: string[]
  technologies?: string[]
  url_gh?: string
  url_web?: string
  url_logo?: string
  order?: number
  logo?: string
}
