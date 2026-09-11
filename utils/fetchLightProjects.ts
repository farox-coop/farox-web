import { useLightProjectsStore } from "@/store/useLightProjectsStore"
import { createProjectsFetcher } from "@/utils/createProjectsFetcher"

export const fetchLightProjects = createProjectsFetcher("light-projects", useLightProjectsStore, "light")
