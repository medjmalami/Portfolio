import { ChevronRight } from "lucide-react"
import { Button } from "../ui/button"
import { SectionTransition } from "../section-transition"
import { useTranslations } from "../../hooks/use-translations"

export function AboutSection() {
  const { t, language } = useTranslations()
  const cvPath = language === "en" ? "/CV.EN.pdf" : "/CV.FR.pdf"

  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <SectionTransition>
          <h2 className="text-3xl font-bold mb-12 text-center">{t("about.title")}</h2>
        </SectionTransition>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <SectionTransition delay={0.1}>
            <div className="relative aspect-video w-full flex items-center justify-center bg-muted">
              <img
                src="/final.jpg"
                alt="Anime-style illustration of Mohamed Amine Jmal working on a laptop"
                loading="lazy"
                className="rounded-lg object-cover w-full h-full"
              />
            </div>
          </SectionTransition>
          <SectionTransition delay={0.2}>
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">{t("about.journey")}</h3>
              <p className="text-muted-foreground">{t("about.description1")}</p>
              <p className="text-muted-foreground">{t("about.description2")}</p>
              <div>
                <h4 className="font-medium mb-2">{t("about.education")}</h4>
                <p className="text-muted-foreground">{t("about.degree")}</p>
              </div>
              <Button variant="outline" className="flex items-center gap-2">
                <a href={cvPath}>{t("about.resume")}</a> <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </SectionTransition>
        </div>
      </div>
    </section>
  )
}
