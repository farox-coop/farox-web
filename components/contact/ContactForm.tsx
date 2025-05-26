"use client"
import { useTranslations } from "next-intl"

function ContactForm() {
  const t = useTranslations("ContactPage")

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const formData = new FormData(form)
    const requestOptions = {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    }
    fetch("https://formspree.io/f/xwpvkpwj", requestOptions)
      .then((response) => {
        if (response.ok) {
          form.reset()
          return response.json()
        }
        throw new Error("Something went wrong")
      })
      .catch((error) => {
        console.error("Error:", error)
      })
  }

  const clase = "px-9 tablet:px-11 py-[10px] placeholder:italic placeholder:text-[20px] placeholder:font-light"

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full mx-auto px-[20px] tablet:px-[40px] laptop:px-[250px] text-[18px] tablet:text-[20px]"
    >
      <div className="flex flex-col lg:flex-row laptop:gap-[50px] desktop:gap-[50px] desktoplg:gap-[106px] mb-6">
        <label className="flex-1 mb-7 lg:mb-0 block">
          <span className="block mb-2 pl-9 tablet:pl-11">{t("label_1")}</span>
          <input
            type="text"
            id="firstName"
            name="firstName"
            placeholder={t("placeholder_1")}
            className={`w-full ${clase} rounded-full bg-[#eeeeee] `}
            required
          />
        </label>
        <label className="flex-1">
          <span className="block mb-2 pl-9 tablet:pl-11">{t("label_2")}</span>
          <input
            type="text"
            id="lastName"
            name="lastName"
            placeholder={t("placeholder_2")}
            className={`w-full ${clase} rounded-full bg-[#eeeeee] `}
            required
          />
        </label>
      </div>
      <label className="mb-6 block">
        <span className="block mb-2 pl-9 tablet:pl-6 desktop:pl-[44px]">{t("label_3")}</span>
        <input
          type="email"
          id="email"
          name="email"
          placeholder={t("placeholder_3")}
          className={`w-full ${clase} rounded-full bg-[#eeeeee]`}
          required
        />
      </label>

      <label className="mb-6 block">
        <span className="block mb-2 pl-12 tablet:pl-11">{t("label_4")}</span>
        <textarea
          id="message"
          name="message"
          placeholder={t("placeholder_4")}
          className="w-full tablet:text-[20px] px-9 tablet:px-14 py-[25px] rounded-[40px] bg-[#eeeeee] placeholder:italic placeholder:text-[20px] placeholder:font-light min-h-[205px] resize-y"
          required
        />
      </label>

      <button
        type="submit"
        className="flex items-center justify-center mt-14 mx-auto
        rounded-full font-medium text-secondary bg-black
        text-[20px] laptop:text-xl desktop:text-[27px] 
        px-[18px] py-[6px] border desktop:px-8 desktop:py-3 
        transition-all duration-300 ease-in-out hover:text-black hover:bg-transparent hover:border-secondary"
      >
        {t("button")}
      </button>
    </form>
  )
}

export default ContactForm
