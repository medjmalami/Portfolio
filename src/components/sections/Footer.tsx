import { Github, Linkedin, Mail } from "lucide-react"
import { useTranslations } from "../../hooks/use-translations"

export function Footer() {
  const { t } = useTranslations()

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-xl font-bold">Mohamed Amine Jmal</h2>
            <p className="text-primary-foreground/70 mt-2">
              &copy; {new Date().getFullYear()} {t("footer.rights")}
            </p>
          </div>
          <div className="flex gap-6">
            <a
              href="https://github.com/medjmalami"
              className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              aria-label="GitHub Profile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/mohamed-amine-jmal-b68965252/"
              className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              aria-label="LinkedIn Profile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:jmalmohamedamine1@gmail.com"
              className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              aria-label="Send Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
