import { Button } from "../ui/button"
import { ThemeSwitcher } from "../theme-switcher"
import { LanguageSwitcher } from "../language-switcher"
import { useTranslations } from "../../hooks/use-translations"

interface HeaderProps {
  activeSection: string
  scrollToSection: (section: string) => void
}

const navItems = [
  { id: "about", labelKey: "nav.about" },
  { id: "skills", labelKey: "nav.skills" },
  { id: "certificates", labelKey: "nav.certificates" },
  { id: "projects", labelKey: "nav.projects" },
  { id: "contact", labelKey: "nav.contact" },
]

export function Header({ activeSection, scrollToSection }: HeaderProps) {
  const { t } = useTranslations()

  return (
    <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Mohamed Amine Jmal</h1>
        <nav className="hidden md:flex gap-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`text-sm font-medium transition-colors ${
                activeSection === item.id
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {t(item.labelKey)}
            </button>
          ))}
        </nav>
        <div className="flex items-center gap-1 sm:gap-2">
          <ThemeSwitcher />
          <LanguageSwitcher />
          <Button onClick={() => scrollToSection("contact")} size="sm" className="px-2 sm:px-3">
            {t("nav.hireMe")}
          </Button>
        </div>
      </div>
    </header>
  )
}
