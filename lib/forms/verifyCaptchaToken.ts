import { MISSING_CAPTCHA_CONFIG, getMissingCaptchaApiBase } from "@/global"

type VerifyCaptchaResult =
  | {
      ok: true
    }
  | {
      ok: false
      errorCode: string
      status: number
    }

export const verifyCaptchaToken = async (
  verifiedToken: string,
  requestUrl: string,
  requestHeaders?: Headers,
): Promise<VerifyCaptchaResult> => {
  const apiBase = getMissingCaptchaApiBase(requestUrl, requestHeaders)
  const siteKey = MISSING_CAPTCHA_CONFIG.publicSiteKey

  try {
    const response = await fetch(`${apiBase}/v1/verified-tokens/verify`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(siteKey ? { verifiedToken, siteKey } : { verifiedToken }),
      cache: "no-store",
    })

    const payload = (await response.json().catch(() => null)) as {
      ok?: boolean
      errorCode?: string
    } | null

    if (!response.ok || !payload?.ok) {
      return {
        ok: false,
        errorCode: payload?.errorCode ?? "CAPTCHA_VERIFICATION_FAILED",
        status: response.status || 502,
      }
    }

    return { ok: true }
  } catch (error) {
    console.error("Error verifying captcha token:", error)

    return {
      ok: false,
      errorCode: "CAPTCHA_SERVICE_UNAVAILABLE",
      status: 502,
    }
  }
}
