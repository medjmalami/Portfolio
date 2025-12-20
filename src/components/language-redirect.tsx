"use client"

import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

export function LanguageRedirect() {
  const navigate = useNavigate()

  useEffect(() => {
    // 1. Check localStorage for saved preference
    const savedLanguage = localStorage.getItem("language")
    if (savedLanguage && ["en", "fr", "ar"].includes(savedLanguage)) {
      navigate(`/${savedLanguage}`, { replace: true })
      return
    }

    // 2. Detect browser language
    const browserLang = navigator.language.split("-")[0] // "en-US" → "en"
    if (["en", "fr", "ar"].includes(browserLang)) {
      navigate(`/${browserLang}`, { replace: true })
      return
    }

    // 3. Default to English
    navigate("/en", { replace: true })
  }, [navigate])

  // Brief loading state while redirecting
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="animate-pulse text-muted-foreground">Loading...</div>
    </div>
  )
}
