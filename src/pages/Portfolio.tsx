import { useEffect, useMemo } from "react"
import { useParams } from "react-router-dom"
import { AboutSection } from "../components/sections/AboutSection"
import { CertificatesSection } from "../components/sections/CertificatesSection"
import { ContactSection } from "../components/sections/ContactSection"
import { ExperienceSection } from "../components/sections/ExperienceSection"
import { Footer } from "../components/sections/Footer"
import { Header } from "../components/sections/Header"
import { HeroSection } from "../components/sections/HeroSection"
import { ProjectsSection } from "../components/sections/ProjectsSection"
import { SkillsSection } from "../components/sections/SkillsSection"
import { useScroll } from "../hooks/use-scroll"
import { useSEO } from "../lib/seo"

type Lang = "en" | "fr" | "ar"

const SEO_BY_LANGUAGE: Record<Lang, { title: string; description: string }> = {
  en: {
    title: "Mohamed Amine Jmal | Backend & AI Engineer",
    description:
      "Backend Engineer specializing in APIs, microservices, and AI-integrated systems using LangGraph, RAG, and FastAPI. Based in Sfax, Tunisia — open to backend/AI engineering roles and select freelance projects.",
  },
  ar: {
    title: "محمد أمين جمل | مهندس Backend وذكاء اصطناعي",
    description:
      "مهندس Backend متخصص في واجهات برمجة التطبيقات والأنظمة المدمجة بالذكاء الاصطناعي، مقيم في صفاقس، تونس. متاح لوظائف Backend والذكاء الاصطناعي ولمشاريع مستقلة مختارة.",
  },
  fr: {
    title: "Mohamed Amine Jmal | Ingénieur Backend & IA | Sfax, Tunisie",
    description:
      "Ingénieur Backend spécialisé en API, microservices et systèmes intégrant l'IA (LangGraph, FastAPI, RAG). Basé à Sfax, Tunisie — également disponible pour la création de sites web et applications sur mesure pour entreprises et particuliers.",
  },
}

export default function Portfolio() {
  const { activeSection, scrollToSection } = useScroll()
  const { language } = useParams<{ language?: string }>()
  const lang: Lang = language === "fr" || language === "ar" ? language : "en"
  const seo = useMemo(() => SEO_BY_LANGUAGE[lang], [lang])

  useSEO({ title: seo.title, description: seo.description })

  useEffect(() => {
    if (window.location.hash === "#projects") {
      requestAnimationFrame(() => scrollToSection("projects"))
    }
  }, [scrollToSection]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header activeSection={activeSection} scrollToSection={scrollToSection} />
      <main>
        <HeroSection scrollToSection={scrollToSection} />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <CertificatesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
