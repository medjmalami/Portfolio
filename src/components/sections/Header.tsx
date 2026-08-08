import { useTranslations } from "../../hooks/use-translations"
import { LanguageSwitcher } from "../language-switcher"
import { ThemeSwitcher } from "../theme-switcher"
import { Button } from "../ui/button"

interface HeaderProps {
  activeSection: string
  scrollToSection: (section: string) => void
}

const navItems = [
  { id: "about", labelKey: "nav.about" },
  { id: "skills", labelKey: "nav.skills" },
  { id: "experience", labelKey: "nav.experience" },
  { id: "projects", labelKey: "nav.projects" },
  { id: "certificates", labelKey: "nav.certificates" },
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
              type="button"
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`text-sm font-medium transition-colors ${activeSection === item.id
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
        </div>
      </div>
    </header>
  )
}
