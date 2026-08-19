import type { LightingProject } from "@/types/lighting-project.type"
import { create } from "zustand"

export interface NotSoLightStore {
  projects: LightingProject[]
  isLoading: boolean
  error: string | null
  currentLocale: string | null
  setProjects: (projects: LightingProject[]) => void
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
  setProjects: (projects: LightingProject[]) => set({ projects }),
  setIsLoading: (isLoading: boolean) => set({ isLoading }),
  setError: (error: string | null) => set({ error }),
  setCurrentLocale: (locale: string) => set({ currentLocale: locale }),
  clearProjects: () => {
    set({ projects: [], error: null, currentLocale: undefined })
  },
}))
