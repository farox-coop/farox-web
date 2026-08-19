"use client"
import MoreLightSVG from "@/components/SVG/MoreLightSVG"
import { useTranslations } from "next-intl"
import { useState } from "react"

export default function ContactSection() {
  const t = useTranslations("LightingProjectsPage.Contact")
  const [formData, setFormData] = useState({
    email: "",
    idea: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  return (
    <section className="w-full max-w-[1432px] mx-auto py-16 laptop:py-24 desktop:py-32 px-4 laptop:px-8">
      <h2 className="text-[#ffffff] text-[36px] laptop:text-[44px] desktop:text-[52px] font-bold text-left mb-12 laptop:mb-16 desktop:mb-20">
        {t("title")}
      </h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-10 w-full">
        <div className="relative flex flex-col gap-2">
          <label htmlFor="email" className="text-[#ffffff] text-[40px] font-normal">
            {t("emailLabel")}
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full h-[60px] px-4 bg-transparent text-[#ffffff] text-[40px] font-normal focus:outline-none"
          />
          <div
            className="absolute bottom-0 left-0 w-full h-[0.72px]"
            style={{ background: "linear-gradient(to right, #F1F1F1 0%, #28FFE3 100%)" }}
          />
        </div>

        <div className="relative flex flex-col gap-2">
          <label htmlFor="idea" className="text-[#ffffff] text-[40px] font-normal">
            {t("ideaLabel")}
          </label>
          <textarea
            id="idea"
            name="idea"
            value={formData.idea}
            onChange={handleChange}
            rows={3}
            className="w-full px-4 py-3 bg-transparent text-[#ffffff] text-[40px] font-normal focus:outline-none resize-none"
          />
          <div
            className="absolute bottom-0 left-0 w-full h-[0.72px]"
            style={{ background: "linear-gradient(to right, #F1F1F1 0%, #28FFE3 100%)" }}
          />
        </div>

        <button
          type="submit"
          className="flex items-center gap-3 self-end text-[#ffffff] text-[40px] font-bold hover:opacity-80 transition-opacity cursor-pointer"
        >
          Send
          <MoreLightSVG className="w-8 h-auto" />
        </button>
      </form>
    </section>
  )
}
