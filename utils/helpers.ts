import { headers } from "next/headers"

export const getBaseURL = async (): Promise<URL> => {
  const headersList = await headers()
  const host = headersList.get("host")
  return new URL(`http${process.env.NODE_ENV === "production" ? "s" : ""}://${host}`)
}

// NOTE: This function needs to be updated if we decide to add more locales..!
export const getLocale = (locale: string | undefined): "es" | "en" => {
  if (locale?.startsWith("es")) {
    return "es"
  }

  return "en"
}
