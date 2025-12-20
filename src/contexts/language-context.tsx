"use client"

import { createContext, useContext, useEffect, useState, type ReactNode } from "react"
import { useLocation, useNavigate } from "react-router-dom"

type Language = "en" | "fr" | "ar"

type LanguageContextType = {
  language: Language
  setLanguage: (language: Language) => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const location = useLocation()
  const navigate = useNavigate()

  // Extract language from URL path
  const getLanguageFromPath = (): Language => {
    const path = location.pathname.split("/")[1]
    if (["en", "fr", "ar"].includes(path)) {
      return path as Language
    }
    return "en" // default
  }

  const [language, setLanguageState] = useState<Language>(getLanguageFromPath())

  // Sync language when URL changes
  useEffect(() => {
    const langFromPath = getLanguageFromPath()
    if (langFromPath !== language) {
      setLanguageState(langFromPath)
    }
  }, [location.pathname])

  // Handle RTL for Arabic and save to localStorage
  useEffect(() => {
    document.documentElement.lang = language
    if (language === "ar") {
      document.documentElement.dir = "rtl"
      document.body.classList.add("rtl")
    } else {
      document.documentElement.dir = "ltr"
      document.body.classList.remove("rtl")
    }
    // Save to localStorage for redirect preference
    localStorage.setItem("language", language)
  }, [language])

  // Navigate to new language URL
  const setLanguage = (newLang: Language) => {
    if (newLang === language) return // No change needed
    
    const currentPath = location.pathname
    const pathWithoutLang = currentPath.replace(/^\/(en|fr|ar)/, "") || ""
    const hash = location.hash // Preserve hash anchors like #contact
    navigate(`/${newLang}${pathWithoutLang}${hash}`, { replace: true })
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
