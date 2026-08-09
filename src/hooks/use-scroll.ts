"use client"
import { useCallback, useEffect, useState } from "react"

export function useScroll() {
  const [activeSection, setActiveSection] = useState("")

  const scrollToSection = useCallback((sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      setActiveSection(sectionId)
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: "smooth",
      })
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "skills", "certificates", "experience", "projects", "contact"]
      const scrollPosition = window.scrollY + 100
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section) // no need to read activeSection first
            break
          }
        }
      }
    }
    window.addEventListener("scroll", handleScroll)
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return { activeSection, scrollToSection }
}
