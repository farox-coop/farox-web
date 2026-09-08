import { useNotSoLightStore } from "@/store/useNotSoLightStore"

let activeLocale: string | null = null

export const fetchNotSoLightProjects = async (
  locale: string,
  setLoading: (loading: boolean) => void,
  setError: (error: string | null) => void,
) => {
  activeLocale = locale
  setLoading(true)
  setError(null)
  try {
    const response = await fetch(`/api/projects/not-so-light/${locale}`)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const data = await response.json()
    if (activeLocale !== locale) {
      return
    }
    useNotSoLightStore.getState().setProjects(data)
    useNotSoLightStore.getState().setCurrentLocale(locale)
  } catch (error) {
    console.error("Failed to fetch not-so-light projects:", error)
    setError("Failed to load not-so-light projects.")
  } finally {
    setLoading(false)
  }
}
