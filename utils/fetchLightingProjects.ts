import { useLightingProjectsStore } from "@/store/useLightingProjectsStore"

export const fetchLightingProjects = async (
  locale: string,
  setLoading: (loading: boolean) => void,
  setError: (error: string | null) => void,
) => {
  setLoading(true)
  setError(null)
  try {
    const response = await fetch(`/api/lighting-projects/${locale}`)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const data = await response.json()
    useLightingProjectsStore.getState().setProjects(data)
    useLightingProjectsStore.getState().setCurrentLocale(locale)
  } catch (error) {
    console.error("Failed to fetch lighting projects:", error)
    setError("Failed to load lighting projects.")
  } finally {
    setLoading(false)
  }
}
