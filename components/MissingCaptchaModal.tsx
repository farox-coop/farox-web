"use client"

import {
  MISSING_CAPTCHA_CONFIG,
  MISSING_CAPTCHA_WIDGET_SCRIPT_PATH,
  MISSING_CAPTCHA_WIDGET_STYLESHEET_PATH,
  getMissingCaptchaApiBase,
} from "@/global"
import { useLocale, useTranslations } from "next-intl"
import { useEffect, useRef, useState } from "react"
import { createPortal } from "react-dom"

declare global {
  interface Window {
    MissingCaptcha?: MissingCaptchaMountApi | { MissingCaptcha?: MissingCaptchaMountApi }
  }
}

type MissingCaptchaMountApi = {
  mount: (container: HTMLElement) => Promise<void> | void
}

type MissingCaptchaModalProps = {
  isOpen: boolean
  onClose: () => void
  onSuccess: (verifiedToken: string) => void
  onUnavailable: () => void
}

let missingCaptchaScriptPromise: Promise<void> | null = null
let missingCaptchaStylesheetPromise: Promise<void> | null = null

const getMissingCaptchaMountApi = (): MissingCaptchaMountApi | null => {
  const globalApi = window.MissingCaptcha

  if (!globalApi) {
    return null
  }

  if (typeof (globalApi as MissingCaptchaMountApi).mount === "function") {
    return globalApi as MissingCaptchaMountApi
  }

  const nestedApi = (globalApi as { MissingCaptcha?: MissingCaptchaMountApi }).MissingCaptcha

  if (nestedApi && typeof nestedApi.mount === "function") {
    return nestedApi
  }

  return null
}

const loadMissingCaptchaStylesheet = () => {
  if (typeof window === "undefined") {
    return Promise.reject(new Error("Window is not available"))
  }

  if (missingCaptchaStylesheetPromise) {
    return missingCaptchaStylesheetPromise
  }

  missingCaptchaStylesheetPromise = new Promise<void>((resolve, reject) => {
    const existingStylesheet = document.querySelector<HTMLLinkElement>(
      'link[data-missing-captcha-widget-styles="true"]',
    )

    const handleLoad = () => resolve()
    const handleError = () => {
      missingCaptchaStylesheetPromise = null
      reject(new Error("MissingCaptcha stylesheet failed to load"))
    }

    if (existingStylesheet) {
      if (existingStylesheet.dataset.loaded === "true") {
        handleLoad()
        return
      }

      if (existingStylesheet.dataset.failed === "true") {
        existingStylesheet.remove()
      } else {
        existingStylesheet.addEventListener("load", handleLoad, { once: true })
        existingStylesheet.addEventListener("error", handleError, { once: true })
        return
      }
    }

    const stylesheet = document.createElement("link")
    stylesheet.rel = "stylesheet"
    stylesheet.href = MISSING_CAPTCHA_WIDGET_STYLESHEET_PATH
    stylesheet.dataset.missingCaptchaWidgetStyles = "true"
    stylesheet.addEventListener(
      "load",
      () => {
        stylesheet.dataset.loaded = "true"
        handleLoad()
      },
      { once: true },
    )
    stylesheet.addEventListener(
      "error",
      () => {
        stylesheet.dataset.failed = "true"
        handleError()
      },
      { once: true },
    )
    document.head.appendChild(stylesheet)
  })

  return missingCaptchaStylesheetPromise
}

const loadMissingCaptchaScript = () => {
  if (typeof window === "undefined") {
    return Promise.reject(new Error("Window is not available"))
  }

  if (getMissingCaptchaMountApi()) {
    return Promise.resolve()
  }

  if (missingCaptchaScriptPromise) {
    return missingCaptchaScriptPromise
  }

  missingCaptchaScriptPromise = new Promise<void>((resolve, reject) => {
    const existingScript = document.querySelector<HTMLScriptElement>('script[data-missing-captcha-widget="true"]')

    const handleLoad = () => {
      if (getMissingCaptchaMountApi()) {
        resolve()
        return
      }

      missingCaptchaScriptPromise = null
      reject(new Error("MissingCaptcha API is not available"))
    }

    const handleError = () => {
      missingCaptchaScriptPromise = null
      reject(new Error("MissingCaptcha widget failed to load"))
    }

    if (existingScript) {
      if (existingScript.dataset.loaded === "true") {
        handleLoad()
        return
      }

      if (existingScript.dataset.failed === "true") {
        existingScript.remove()
      } else {
        existingScript.addEventListener("load", handleLoad, { once: true })
        existingScript.addEventListener("error", handleError, { once: true })
        return
      }
    }

    const script = document.createElement("script")
    script.src = MISSING_CAPTCHA_WIDGET_SCRIPT_PATH
    script.defer = true
    script.dataset.missingCaptchaWidget = "true"
    script.addEventListener(
      "load",
      () => {
        script.dataset.loaded = "true"
        handleLoad()
      },
      { once: true },
    )
    script.addEventListener(
      "error",
      () => {
        script.dataset.failed = "true"
        handleError()
      },
      { once: true },
    )
    document.head.appendChild(script)
  })

  return missingCaptchaScriptPromise
}

const siteKey = MISSING_CAPTCHA_CONFIG.publicSiteKey

export default function MissingCaptchaModal({ isOpen, onClose, onSuccess, onUnavailable }: MissingCaptchaModalProps) {
  const locale = useLocale()
  const t = useTranslations("Common.Captcha")
  const [isPortalReady, setIsPortalReady] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const widgetContainerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    setIsPortalReady(true)
  }, [])

  useEffect(() => {
    if (!isOpen) {
      setIsLoading(false)
      return
    }

    if (!siteKey) {
      onUnavailable()
      onClose()
      return
    }

    const container = widgetContainerRef.current
    if (!container) {
      return
    }

    let cancelled = false
    const handleSuccess = (event: Event) => {
      const customEvent = event as CustomEvent<{ verifiedToken?: string }>
      const verifiedToken = customEvent.detail?.verifiedToken

      if (typeof verifiedToken !== "string" || verifiedToken.length === 0) {
        onUnavailable()
        onClose()
        return
      }

      onSuccess(verifiedToken)
      onClose()
    }

    container.setAttribute("data-sitekey", siteKey)
    container.setAttribute("data-api-base", getMissingCaptchaApiBase())
    container.setAttribute("data-theme", "light")
    container.setAttribute("data-locale", locale)
    container.setAttribute("data-layout", "split")
    container.addEventListener("missing-captcha-success", handleSuccess as EventListener)

    setIsLoading(true)

    void Promise.all([loadMissingCaptchaStylesheet(), loadMissingCaptchaScript()])
      .then(() => {
        const mountApi = getMissingCaptchaMountApi()

        if (!mountApi) {
          throw new Error("MissingCaptcha API is not available")
        }

        return Promise.resolve(mountApi.mount(container))
      })
      .then(() => {
        if (!cancelled) {
          setIsLoading(false)
        }
      })
      .catch((error) => {
        console.error("Error loading MissingCaptcha widget:", error)

        if (!cancelled) {
          setIsLoading(false)
          onUnavailable()
          onClose()
        }
      })

    return () => {
      cancelled = true
      setIsLoading(false)
      container.removeEventListener("missing-captcha-success", handleSuccess as EventListener)
      container.innerHTML = ""
    }
  }, [isOpen, locale, onClose, onSuccess, onUnavailable])

  if (!isOpen || !isPortalReady) {
    return null
  }

  return createPortal(
    <div className="fixed inset-0 z-[1000] flex items-center justify-center px-4 py-6">
      <button type="button" aria-label={t("close")} className="absolute inset-0 bg-black/70" onMouseDown={onClose} />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="missing-captcha-modal-title"
        className="relative w-full max-w-5xl rounded-[36px] bg-white px-5 py-12 tablet:px-8"
      >
        <button
          type="button"
          aria-label={t("close")}
          className="absolute right-5 top-5 rounded-full border border-black px-3 py-1 text-sm font-medium text-black transition-colors duration-200 hover:bg-black hover:text-white"
          onClick={onClose}
        >
          ×
        </button>

        <div className="mb-6 text-center">
          <p id="missing-captcha-modal-title" className="text-2xl font-medium tablet:text-3xl">
            {t("title")}
          </p>
        </div>

        {isLoading && <p className="mb-4 text-center text-sm text-black/70">{t("loading")}</p>}

        <div ref={widgetContainerRef} className="min-h-[320px]" />
      </div>
    </div>,
    document.body,
  )
}
