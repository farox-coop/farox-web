import { useCaseStudiesStore } from "@/store/useCaseStudiesStore"

export const fetchCaseStudies = async (
  locale: string,
  setLoading: (loading: boolean) => void,
  setError: (error: string | null) => void,
) => {
  setLoading(true)
  setError(null)
  try {
    const response = await fetch(`/api/${locale}`)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const data = await response.json()
    useCaseStudiesStore.getState().setCaseStudies(data)
    useCaseStudiesStore.getState().setCurrentLocale(locale)
  } catch (error) {
    console.error("Failed to fetch case studies:", error)
    setError("Failed to load case studies.")
  } finally {
    setLoading(false)
  }
}
