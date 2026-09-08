import type { LightProject } from "@/types/light-project.type"
import { create } from "zustand"

export interface NotSoLightStore {
  projects: LightProject[]
  isLoading: boolean
  error: string | null
  currentLocale: string | null
  setProjects: (projects: LightProject[]) => void
  setIsLoading: (isLoading: boolean) => void
  setError: (error: string | null) => void
  setCurrentLocale: (locale: string) => void
  clearProjects: () => void
}

export const useNotSoLightStore = create<NotSoLightStore>()((set) => ({
  projects: [],
  isLoading: false,
  error: null,
  currentLocale: null,
  setProjects: (projects: LightProject[]) => set({ projects }),
  setIsLoading: (isLoading: boolean) => set({ isLoading }),
  setError: (error: string | null) => set({ error }),
  setCurrentLocale: (locale: string) => set({ currentLocale: locale }),
  clearProjects: () => {
    set({ projects: [], error: null, currentLocale: undefined })
  },
}))
