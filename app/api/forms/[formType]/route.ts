import { getFormConfig } from "@/lib/forms/config"
import { forwardToFormspree } from "@/lib/forms/forwardToFormspree"
import { isMissingCaptchaEnabledOnServer } from "@/lib/forms/missingCaptcha.server"
import { verifyCaptchaToken } from "@/lib/forms/verifyCaptchaToken"
import { NextResponse } from "next/server"

const isCaptchaRequired = () => isMissingCaptchaEnabledOnServer()

const getRequestBody = async (request: Request) => {
  try {
    return (await request.json()) as Record<string, unknown>
  } catch {
    return null
  }
}

const getAllowedFields = (body: Record<string, unknown>, allowedFields: readonly string[]) => {
  const values: Record<string, string> = {}

  for (const fieldName of allowedFields) {
    const value = body[fieldName]

    if (typeof value === "string") {
      values[fieldName] = value.trim()
    }
  }

  return values
}

const getForwardedFormspreeHeaders = (request: Request) => {
  const referer = request.headers.get("referer")
  const origin = request.headers.get("origin") ?? (referer ? new URL(referer).origin : null)

  return { origin, referer }
}

export async function POST(request: Request, { params }: { params: Promise<{ formType: string }> }) {
  const { formType } = await params
  const formConfig = getFormConfig(formType)

  if (!formConfig) {
    return NextResponse.json({ ok: false, error: "FORM_NOT_FOUND" }, { status: 404 })
  }

  const body = await getRequestBody(request)

  if (!body) {
    return NextResponse.json({ ok: false, error: "BAD_REQUEST" }, { status: 400 })
  }

  const values = getAllowedFields(body, formConfig.allowedFields)
  const missingFields = formConfig.requiredFields.filter((fieldName) => !values[fieldName])

  if (missingFields.length > 0) {
    return NextResponse.json(
      {
        ok: false,
        error: "MISSING_REQUIRED_FIELDS",
        fields: missingFields,
      },
      { status: 400 },
    )
  }

  if (isCaptchaRequired()) {
    const verifiedToken = body.verifiedToken

    if (typeof verifiedToken !== "string" || verifiedToken.length === 0) {
      return NextResponse.json({ ok: false, error: "CAPTCHA_REQUIRED" }, { status: 400 })
    }

    const verificationResult = await verifyCaptchaToken(verifiedToken, request.url, request.headers)

    if (!verificationResult.ok) {
      return NextResponse.json(
        {
          ok: false,
          error: verificationResult.errorCode,
        },
        { status: verificationResult.status },
      )
    }
  }

  const formspreeResult = await forwardToFormspree(
    formConfig.formspreeId,
    values,
    getForwardedFormspreeHeaders(request),
  )

  if (!formspreeResult.ok) {
    return NextResponse.json(
      {
        ok: false,
        error: formspreeResult.error,
      },
      { status: formspreeResult.status },
    )
  }

  return NextResponse.json({ ok: true })
}
