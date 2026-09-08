"use client"
import MissingCaptchaModal from "@/components/MissingCaptchaModal"
import MoreLightSVG from "@/components/SVG/MoreLightSVG"
import { useOptionalCaptchaForm } from "@/lib/forms/submitWithOptionalCaptcha"
import { useTranslations } from "next-intl"

export default function ContactSection() {
  const t = useTranslations("LightProjectsPage.Contact")
  const {
    formError,
    formSuccess,
    handleCaptchaClose,
    handleCaptchaSuccess,
    handleCaptchaUnavailable,
    handleSubmit,
    isCaptchaOpen,
    isSubmitting,
  } = useOptionalCaptchaForm({ endpoint: "/api/forms/lightprojects" })

  return (
    <section className="w-full max-w-7xl mx-auto py-16 laptop:py-24 desktop:py-32 px-4 laptop:px-8 min-[1310px]:px-0">
      <h2 className="text-[#ffffff] text-[23px] laptop:text-[38px] font-bold text-left mb-12 laptop:mb-16 desktop:mb-20">
        {t("title")}
      </h2>

      {formSuccess ? (
        <p className="text-[#ffffff] text-[16px] laptop:text-[20px] font-normal">{t("form_success")}</p>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-10 w-full">
          <div className="relative flex flex-col gap-2">
            <label htmlFor="email" className="text-[#ffffff] text-[16px] laptop:text-[20px] font-normal">
              {t("emailLabel")}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-2 bg-transparent text-[#ffffff] text-[16px] laptop:text-[26px] font-normal focus:outline-none"
            />
            <div
              className="absolute bottom-0 left-0 w-full h-[0.72px]"
              style={{ background: "linear-gradient(to right, #F1F1F1 0%, #28FFE3 100%)" }}
            />
          </div>

          <div className="relative flex flex-col gap-2">
            <label htmlFor="idea" className="text-[#ffffff] text-[16px] laptop:text-[20px] font-normal">
              {t("ideaLabel")}
            </label>
            <textarea
              id="idea"
              name="idea"
              required
              rows={1}
              className="field-sizing-content w-full px-4 py-2 bg-transparent text-[#ffffff] text-[16px] laptop:text-[26px] font-normal focus:outline-none resize-none"
            />
            <div
              className="absolute bottom-0 left-0 w-full h-[0.72px]"
              style={{ background: "linear-gradient(to right, #F1F1F1 0%, #28FFE3 100%)" }}
            />
          </div>

          {formError && <div className="text-[#ffffff] text-[14px] laptop:text-[16px]">{t("form_error")}</div>}

          <button
            type="submit"
            disabled={isSubmitting}
            className="flex items-center gap-3 self-end text-[#ffffff] text-[16px] laptop:text-[20px] font-bold hover:opacity-80 transition-opacity cursor-pointer disabled:cursor-not-allowed disabled:opacity-50"
          >
            {isSubmitting ? t("sending") : t("send")}
            <MoreLightSVG className="w-3 laptop:w-3.5 h-auto" />
          </button>
        </form>
      )}

      <MissingCaptchaModal
        isOpen={isCaptchaOpen}
        onClose={handleCaptchaClose}
        onSuccess={handleCaptchaSuccess}
        onUnavailable={handleCaptchaUnavailable}
      />
    </section>
  )
}
