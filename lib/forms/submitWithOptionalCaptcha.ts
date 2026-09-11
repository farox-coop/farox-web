"use client"

import {
  MISSING_CAPTCHA_CONFIG,
  MISSING_CAPTCHA_WIDGET_SCRIPT_PATH,
  MISSING_CAPTCHA_WIDGET_STYLESHEET_PATH,
} from "@/global"
import { type FormEventHandler, useCallback, useRef, useState } from "react"

type FormPayload = Record<string, string>

type UseOptionalCaptchaFormOptions = {
  endpoint: string
}

let missingCaptchaAssetAvailabilityPromise: Promise<boolean> | null = null

const hasMissingCaptchaAsset = async (assetPath: string) => {
  try {
    const response = await fetch(assetPath, {
      method: "HEAD",
      cache: "no-store",
      signal: AbortSignal.timeout(5000),
    })

    return response.ok
  } catch {
    return false
  }
}

const isCaptchaEnabled = async () => {
  if (MISSING_CAPTCHA_CONFIG.publicSiteKey.trim().length === 0) {
    return false
  }

  if (!missingCaptchaAssetAvailabilityPromise) {
    missingCaptchaAssetAvailabilityPromise = Promise.all([
      hasMissingCaptchaAsset(MISSING_CAPTCHA_WIDGET_SCRIPT_PATH),
      hasMissingCaptchaAsset(MISSING_CAPTCHA_WIDGET_STYLESHEET_PATH),
    ]).then((results) => {
      const enabled = results.every(Boolean)
      if (!enabled) {
        missingCaptchaAssetAvailabilityPromise = null
      }
      return enabled
    })
  }

  return missingCaptchaAssetAvailabilityPromise
}

const serializeForm = (form: HTMLFormElement): FormPayload => {
  const payload: FormPayload = {}

  for (const [key, value] of new FormData(form).entries()) {
    if (typeof value === "string") {
      payload[key] = value
    }
  }

  return payload
}

class FormSubmissionError extends Error {
  code: string

  constructor(code: string) {
    super("FORM_SUBMISSION_FAILED")
    this.name = "FormSubmissionError"
    this.code = code
  }
}

const submitForm = async (endpoint: string, payload: FormPayload, verifiedToken?: string) => {
  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ...payload,
      ...(verifiedToken ? { verifiedToken } : {}),
    }),
  })

  const data = (await response.json().catch(() => null)) as { ok?: boolean; error?: string } | null

  if (!response.ok || !data?.ok) {
    throw new FormSubmissionError(data?.error ?? "FORM_SUBMISSION_FAILED")
  }
}

export const useOptionalCaptchaForm = ({ endpoint }: UseOptionalCaptchaFormOptions) => {
  const [formError, setFormError] = useState(false)
  const [formSuccess, setFormSuccess] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isCaptchaOpen, setIsCaptchaOpen] = useState(false)

  const isSubmittingRef = useRef(false)
  const isPendingRef = useRef(false)
  const pendingFormRef = useRef<HTMLFormElement | null>(null)
  const pendingPayloadRef = useRef<FormPayload | null>(null)

  const clearPendingSubmission = useCallback(() => {
    pendingFormRef.current = null
    pendingPayloadRef.current = null
  }, [])

  const runSubmission = useCallback(
    async (payload: FormPayload, form: HTMLFormElement, verifiedToken?: string) => {
      if (isSubmittingRef.current) {
        return
      }

      isSubmittingRef.current = true
      setIsSubmitting(true)
      setFormError(false)
      setFormSuccess(false)

      try {
        await submitForm(endpoint, payload, verifiedToken)
        form.reset()
        setFormSuccess(true)
        clearPendingSubmission()
      } catch (error) {
        if (error instanceof FormSubmissionError && error.code === "CAPTCHA_REQUIRED") {
          pendingFormRef.current = form
          pendingPayloadRef.current = payload
          setIsCaptchaOpen(true)
          return
        }

        console.error("Error submitting form:", error)
        setFormError(true)
      } finally {
        isSubmittingRef.current = false
        setIsSubmitting(false)
      }
    },
    [clearPendingSubmission, endpoint],
  )

  const handleSubmit = useCallback<FormEventHandler<HTMLFormElement>>(
    (event) => {
      event.preventDefault()

      if (isSubmittingRef.current || isPendingRef.current) {
        return
      }

      const form = event.currentTarget
      const payload = serializeForm(form)

      isPendingRef.current = true
      setFormError(false)
      setFormSuccess(false)

      void isCaptchaEnabled()
        .then((captchaEnabled) => {
          if (captchaEnabled) {
            pendingFormRef.current = form
            pendingPayloadRef.current = payload
            setIsCaptchaOpen(true)
            return
          }

          isPendingRef.current = false
          void runSubmission(payload, form)
        })
        .catch((error) => {
          console.error("Error checking captcha availability:", error)
          isPendingRef.current = false
          setFormError(true)
        })
    },
    [runSubmission],
  )

  const handleCaptchaClose = useCallback(() => {
    isPendingRef.current = false
    clearPendingSubmission()
    setIsCaptchaOpen(false)
  }, [clearPendingSubmission])

  const handleCaptchaUnavailable = useCallback(() => {
    isPendingRef.current = false
    clearPendingSubmission()
    setIsCaptchaOpen(false)
    setFormError(true)
  }, [clearPendingSubmission])

  const handleCaptchaSuccess = useCallback(
    (verifiedToken: string) => {
      const form = pendingFormRef.current
      const payload = pendingPayloadRef.current

      isPendingRef.current = false
      clearPendingSubmission()
      setIsCaptchaOpen(false)

      if (!form || !payload) {
        setFormError(true)
        return
      }

      void runSubmission(payload, form, verifiedToken)
    },
    [clearPendingSubmission, runSubmission],
  )

  return {
    formError,
    formSuccess,
    handleCaptchaClose,
    handleCaptchaSuccess,
    handleCaptchaUnavailable,
    handleSubmit,
    isCaptchaOpen,
    isSubmitting,
  }
}
