import { useNotSoLightStore } from "@/store/useNotSoLightStore"
import { createProjectsFetcher } from "@/utils/createProjectsFetcher"

export const fetchNotSoLightProjects = createProjectsFetcher("not-so-light", useNotSoLightStore, "not-so-light")
