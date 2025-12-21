import { Github, Linkedin, Mail } from "lucide-react"
import { Button } from "../ui/button"
import { useTranslations } from "../../hooks/use-translations"
import { motion } from "framer-motion"

interface HeroSectionProps {
  scrollToSection: (section: string) => void
}

export function HeroSection({ scrollToSection }: HeroSectionProps) {
  const { t } = useTranslations()

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-20 md:py-32 container mx-auto px-4"
    >
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            {t("hero.intro")} <span className="text-primary">Mohamed Amine Jmal</span>
          </h1>
          <p className="text-xl text-muted-foreground">{t("hero.description")}</p>
          <div className="flex gap-4">
            <Button onClick={() => scrollToSection("projects")}>{t("hero.viewWork")}</Button>
            <Button variant="outline" onClick={() => scrollToSection("contact")}>
              {t("hero.contactMe")}
            </Button>
          </div>
          <div className="flex gap-4 pt-4">
            <a href="https://github.com/medjmalami" className="text-muted-foreground hover:text-foreground">
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/mohamed-amine-jmal-b68965252/"
              className="text-muted-foreground hover:text-foreground"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="mailto:jmalmohamedamine1@gmail.com" className="text-muted-foreground hover:text-foreground">
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative aspect-square max-w-md mx-auto"
        >
          <img
            src="/profile.jpg"
            alt="Mohamed Amine Jmal - Full Stack JavaScript Developer"
            className="rounded-full object-cover w-full h-full"
          />
        </motion.div>
      </div>
    </motion.section>
  )
}
