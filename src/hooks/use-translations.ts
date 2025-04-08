
import { useLanguage } from "../contexts/language-context"
import { getTranslation } from "@/lib/translations"

export function useTranslations() {
  const { language } = useLanguage()

  const t = (key: string): string => {
    return getTranslation(key, language)
  }

  return { t, language }
}
