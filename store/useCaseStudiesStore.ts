import type { CaseStudy } from "@/types/casestudy.type"
import { create } from "zustand"

interface CaseStudiesState {
  caseStudies: CaseStudy[]
  isLoading: boolean
  error: string | null
  currentLocale?: string
  setCaseStudies: (caseStudies: CaseStudy[]) => void
  setIsLoading: (isLoading: boolean) => void
  setError: (error: string | null) => void
  setCurrentLocale: (locale: string) => void
  clearCaseStudies: () => void
}

export const useCaseStudiesStore = create<CaseStudiesState>()((set) => ({
  caseStudies: [],
  isLoading: false,
  error: null,
  currentLocale: undefined,
  setCaseStudies: (caseStudies: CaseStudy[]) => set({ caseStudies }),
  setIsLoading: (isLoading: boolean) => set({ isLoading }),
  setError: (error: string | null) => set({ error }),
  setCurrentLocale: (locale: string) => set({ currentLocale: locale }),
  clearCaseStudies: () => {
    set({ caseStudies: [], error: null, currentLocale: undefined })
  },
}))
