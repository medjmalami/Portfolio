
import { createContext, useContext, useEffect, useState, type ReactNode } from "react"

type Language = "en" | "fr"

type LanguageContextType = {
  language: Language
  setLanguage: (language: Language) => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  useEffect(() => {
    // Detect browser language on client side
    const browserLanguage = navigator.language.split("-")[0]
    if (browserLanguage === "fr") {
      setLanguage("fr")
    }

    // Check if there's a stored preference
    const storedLanguage = localStorage.getItem("language") as Language
    if (storedLanguage) {
      setLanguage(storedLanguage)
    }
  }, [])

  const handleSetLanguage = (newLanguage: Language) => {
    setLanguage(newLanguage)
    localStorage.setItem("language", newLanguage)
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage }}>{children}</LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
