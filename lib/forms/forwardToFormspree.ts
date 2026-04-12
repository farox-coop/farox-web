type ForwardToFormspreeResult =
  | {
      ok: true
    }
  | {
      ok: false
      error: string
      status: number
    }

type ForwardToFormspreeHeaders = {
  origin?: string | null
  referer?: string | null
}

const getFormspreeError = (payload: unknown): string => {
  if (!payload || typeof payload !== "object") {
    return "FORM_FORWARD_FAILED"
  }

  const maybePayload = payload as {
    error?: string
    errors?: Array<{ message?: string }>
  }

  return maybePayload.errors?.[0]?.message ?? maybePayload.error ?? "FORM_FORWARD_FAILED"
}

export const forwardToFormspree = async (
  formspreeId: string,
  fields: Record<string, string>,
  forwardedHeaders: ForwardToFormspreeHeaders,
): Promise<ForwardToFormspreeResult> => {
  const body = new URLSearchParams()
  const requestHeaders: Record<string, string> = {
    Accept: "application/json",
    "Content-Type": "application/x-www-form-urlencoded",
  }

  if (forwardedHeaders.origin) {
    requestHeaders.Origin = forwardedHeaders.origin
  }

  if (forwardedHeaders.referer) {
    requestHeaders.Referer = forwardedHeaders.referer
  }

  for (const [fieldName, value] of Object.entries(fields)) {
    body.append(fieldName, value)
  }

  try {
    const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
      method: "POST",
      headers: requestHeaders,
      body: body.toString(),
      cache: "no-store",
    })

    const payload = await response.json().catch(() => null)

    if (!response.ok) {
      return {
        ok: false,
        error: getFormspreeError(payload),
        status: response.status || 502,
      }
    }

    return { ok: true }
  } catch (error) {
    console.error("Error forwarding form submission to Formspree:", error)

    return {
      ok: false,
      error: "FORM_FORWARD_FAILED",
      status: 502,
    }
  }
}
