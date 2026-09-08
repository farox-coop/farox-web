import { useLightProjectsStore } from "@/store/useLightProjectsStore"

let activeLocale: string | null = null

export const fetchLightProjects = async (
  locale: string,
  setLoading: (loading: boolean) => void,
  setError: (error: string | null) => void,
) => {
  activeLocale = locale
  setLoading(true)
  setError(null)
  try {
    const response = await fetch(`/api/projects/light-projects/${locale}`)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const data = await response.json()
    if (activeLocale !== locale) {
      return
    }
    useLightProjectsStore.getState().setProjects(data)
    useLightProjectsStore.getState().setCurrentLocale(locale)
  } catch (error) {
    console.error("Failed to fetch lighting projects:", error)
    setError("Failed to load lighting projects.")
  } finally {
    setLoading(false)
  }
}
