import { Card, CardContent } from "../ui/card"
import { Badge } from "../ui/badge"
import { SectionTransition } from "../section-transition"
import { useTranslations } from "../../hooks/use-translations"
import { skillCategories } from "../../data/skills"

export function SkillsSection() {
  const { t } = useTranslations()

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <SectionTransition>
          <h2 className="text-3xl font-bold mb-12 text-center">{t("skills.title")}</h2>
        </SectionTransition>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <SectionTransition key={category.id} delay={0.1 * (index + 1)}>
              <Card className="h-full flex flex-col">
                <CardContent className="pt-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-2 mb-2">
                    <category.icon className="h-5 w-5 text-muted-foreground" />
                    <h3 className="text-xl font-semibold">{t(category.titleKey)}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">{t(category.descriptionKey)}</p>
                  <div className="flex flex-wrap gap-2 flex-1">
                    {category.skills.map((skill) => (
                      <Badge key={skill}>{skill}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </SectionTransition>
          ))}
        </div>
      </div>
    </section>
  )
}
