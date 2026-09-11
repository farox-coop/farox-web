import type { LightProject } from "@/types/light-project.type"
import { create } from "zustand"

export interface LightProjectsStore {
  projects: LightProject[]
  currentLocale: string | null
  setProjects: (projects: LightProject[]) => void
  setCurrentLocale: (locale: string) => void
}

export const useLightProjectsStore = create<LightProjectsStore>()((set) => ({
  projects: [],
  currentLocale: null,
  setProjects: (projects: LightProject[]) => set({ projects }),
  setCurrentLocale: (locale: string) => set({ currentLocale: locale }),
}))
