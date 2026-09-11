import { FORMSPREE_FORM_IDS } from "@/global"

export type FormType = "contact" | "wecoop" | "lightprojects"

type FormConfig = {
  formspreeId: string
  allowedFields: readonly string[]
  requiredFields: readonly string[]
}

const FORM_CONFIG_BY_TYPE: Record<FormType, FormConfig> = {
  contact: {
    formspreeId: FORMSPREE_FORM_IDS.contact,
    allowedFields: ["firstName", "lastName", "email", "message"],
    requiredFields: ["firstName", "lastName", "email", "message"],
  },
  wecoop: {
    formspreeId: FORMSPREE_FORM_IDS.wecoop,
    allowedFields: ["firstName", "email", "message"],
    requiredFields: ["firstName", "email", "message"],
  },
  lightprojects: {
    formspreeId: FORMSPREE_FORM_IDS.lightprojects,
    allowedFields: ["email", "idea"],
    requiredFields: ["email", "idea"],
  },
}

export const getFormConfig = (formType: string): FormConfig | null => {
  if (formType === "contact" || formType === "wecoop" || formType === "lightprojects") {
    return FORM_CONFIG_BY_TYPE[formType]
  }

  return null
}
