import { useLightProjectsStore } from "@/store/useLightProjectsStore"

let latestCallToken = 0

export const fetchLightProjects = async (
  locale: string,
  setLoading: (loading: boolean) => void,
  setError: (error: string | null) => void,
) => {
  const callToken = ++latestCallToken
  setLoading(true)
  setError(null)
  try {
    const response = await fetch(`/api/projects/light-projects/${locale}`)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const data = await response.json()
    if (callToken !== latestCallToken) {
      return
    }
    useLightProjectsStore.getState().setProjects(data)
    useLightProjectsStore.getState().setCurrentLocale(locale)
  } catch (error) {
    if (callToken === latestCallToken) {
      console.error("Failed to fetch lighting projects:", error)
      setError("Failed to load lighting projects.")
    }
  } finally {
    if (callToken === latestCallToken) {
      setLoading(false)
    }
  }
}
