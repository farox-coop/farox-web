function extractMarkdownSection(content: string, section: string): string {
  // Permitir mayúsculas/minúsculas y guion bajo o espacios
  const regex = new RegExp(`^\s*${section.replace(/_/g, "[_ ]")}\s*:\s*(.+)$`, "im")
  const match = content.match(regex)
  return match ? match[1].trim() : ""
}

function extractContributions(content: string): string[] {
  const normalizedContent = content.replace(/\r\n/g, "\n")
  const contribRegex = /^\s*contribution\s*:/im
  const match = contribRegex.exec(normalizedContent)
  if (!match) {
    return []
  }

  const lines = normalizedContent.split("\n")
  const startIdx = lines.findIndex((line) => /^\s*contribution\s*:/i.test(line))
  if (startIdx === -1) {
    return []
  }

  // Tomar todas las líneas siguientes que empiezan con '-'
  const contributions: string[] = []
  for (let i = startIdx + 1; i < lines.length; i++) {
    const line = lines[i].trim()
    if (line.startsWith("-")) {
      contributions.push(line.substring(1).trim())
    } else if (line === "" || /^[A-Za-z ]+:/i.test(line)) {
      break
    }
  }
  return contributions
}

interface MarkdownContent {
  title?: string
  client?: string
  tags?: string[]
  shortDescription?: string
  longDescription?: string
  coops?: string[]
  objective?: string
  contribution?: string[]
  technologies?: string[]
  url_gh?: string
  url_web?: string
  order?: number
  url_logo?: string
  logo?: string
}

export function parseMarkdownContent(content: string): MarkdownContent {
  try {
    return {
      title: extractMarkdownSection(content, "Title"),
      client: extractMarkdownSection(content, "Client"),
      url_logo: extractMarkdownSection(content, "url_logo"),
      logo: extractMarkdownSection(content, "Logo"),
      tags: extractMarkdownSection(content, "Tags").split(", "),
      shortDescription: extractMarkdownSection(content, "Short Description"),
      longDescription: extractMarkdownSection(content, "Long Description"),
      coops: extractMarkdownSection(content, "Coops").split(", "),
      objective: extractMarkdownSection(content, "Objective"),
      contribution: extractContributions(content),
      technologies: extractMarkdownSection(content, "Technologies").split(", "),
      url_gh: extractMarkdownSection(content, "GitHub"),
      url_web: extractMarkdownSection(content, "Website"),
      order: Number.parseInt(extractMarkdownSection(content, "Order")) || Number.POSITIVE_INFINITY,
    }
  } catch (error) {
    console.error("Error parsing markdown content:", error)
    return {}
  }
}
