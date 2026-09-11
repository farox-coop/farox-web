import type { ProjectsStore } from "@/store/createProjectsStore"

type ProjectsStoreAccessor = {
  getState: () => ProjectsStore
}

export const createProjectsFetcher = (category: string, store: ProjectsStoreAccessor, label: string) => {
  let latestCallToken = 0

  return async (locale: string, setLoading: (loading: boolean) => void, setError: (error: string | null) => void) => {
    const callToken = ++latestCallToken
    setLoading(true)
    setError(null)
    try {
      const response = await fetch(`/api/projects/${category}/${locale}`)
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      const data = await response.json()
      if (callToken !== latestCallToken) {
        return
      }
      store.getState().setProjects(data)
      store.getState().setCurrentLocale(locale)
    } catch (error) {
      if (callToken === latestCallToken) {
        console.error(`Failed to fetch ${label} projects:`, error)
        setError(`Failed to load ${label} projects.`)
      }
    } finally {
      if (callToken === latestCallToken) {
        setLoading(false)
      }
    }
  }
}
