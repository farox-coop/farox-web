import { headers } from "next/headers"

const stripTrailingColon = (value: string) => value.replace(/:$/, "")

const isLoopbackHost = (value: string) => {
  const hostname = value.replace(/:\d+$/, "")

  return hostname === "localhost" || hostname === "127.0.0.1" || hostname === "::1" || hostname === "[::1]"
}

export const getBaseURL = async (): Promise<URL> => {
  const headersList = await headers()
  const host = headersList.get("x-forwarded-host") ?? headersList.get("host") ?? "localhost:3000"
  const forwardedProto = headersList.get("x-forwarded-proto")?.split(",")[0]?.trim()
  const protocol = forwardedProto
    ? stripTrailingColon(forwardedProto)
    : isLoopbackHost(host)
      ? "http"
      : process.env.NODE_ENV === "production"
        ? "https"
        : "http"

  return new URL(`${protocol}://${host}`)
}

// NOTE: This function needs to be updated if we decide to add more locales..!
export const getLocale = (locale: string | undefined): "es" | "en" => {
  if (locale?.startsWith("es")) {
    return "es"
  }

  return "en"
}
