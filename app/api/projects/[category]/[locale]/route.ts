import { getLightProjects, isLightProjectCategory } from "@/lib/lightProjects"
import { NextResponse } from "next/server"

export async function GET(_request: Request, { params }: { params: Promise<{ category: string; locale: string }> }) {
  try {
    const { category, locale } = await params

    if (!isLightProjectCategory(category)) {
      return NextResponse.json({ error: "Unknown project category" }, { status: 404 })
    }

    const projects = getLightProjects(category, locale)

    if (!projects) {
      return NextResponse.json({ error: "Locale directory not found" }, { status: 404 })
    }

    return NextResponse.json(projects)
  } catch (error) {
    console.error("Error processing projects:", error)
    return NextResponse.json({ error: "Error processing projects" }, { status: 500 })
  }
}
