import { useEffect } from "react"
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

export default function Portfolio() {
  const { activeSection, scrollToSection } = useScroll()

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
