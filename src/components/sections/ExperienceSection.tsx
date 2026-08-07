import { experience } from "../../data/experience"
import { useTranslations } from "../../hooks/use-translations"
import { SectionTransition } from "../section-transition"

export function ExperienceSection() {
  const { t } = useTranslations()

  return (
    <section id="experience" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <SectionTransition>
          <h2 className="text-3xl font-bold mb-12 text-center">{t("experience.title")}</h2>
        </SectionTransition>
        <div className="max-w-3xl mx-auto space-y-10">
          {experience.map((item, index) => (
            <SectionTransition key={item.id} delay={0.1 * (index + 1)}>
              <div className="border-l-2 border-primary pl-6">
                <h3 className="text-xl font-semibold">{t(item.roleKey)}</h3>
                <p className="text-muted-foreground">
                  {t(item.orgKey)} · {t(item.periodKey)}
                </p>
                <ul className="list-disc list-inside mt-3 space-y-1 text-muted-foreground">
                  {item.bulletKeys.map((key) => (
                    <li key={key}>{t(key)}</li>
                  ))}
                </ul>
              </div>
            </SectionTransition>
          ))}
        </div>
      </div>
    </section>
  )
}
