import { Header } from "../components/sections/Header"
import { HeroSection } from "../components/sections/HeroSection"
import { AboutSection } from "../components/sections/AboutSection"
import { SkillsSection } from "../components/sections/SkillsSection"
import { CertificatesSection } from "../components/sections/CertificatesSection"
import { ProjectsSection } from "../components/sections/ProjectsSection"
import { ContactSection } from "../components/sections/ContactSection"
import { Footer } from "../components/sections/Footer"
import { useScroll } from "../hooks/use-scroll"

export default function Portfolio() {
  const { activeSection, scrollToSection } = useScroll()

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header activeSection={activeSection} scrollToSection={scrollToSection} />
      <main>
        <HeroSection scrollToSection={scrollToSection} />
        <AboutSection />
        <SkillsSection />
        <CertificatesSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
