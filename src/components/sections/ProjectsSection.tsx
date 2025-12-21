import { Github, ExternalLink, Lock } from "lucide-react"
import { Button } from "../ui/button"
import { Card, CardContent } from "../ui/card"
import { Badge } from "../ui/badge"
import { SectionTransition } from "../section-transition"
import { useTranslations } from "../../hooks/use-translations"
import { projects } from "../../data/projects"

export function ProjectsSection() {
  const { t } = useTranslations()

  const isClientProject = (project: typeof projects[0]) => !project.liveUrl && !project.codeUrl

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <SectionTransition>
          <h2 className="text-3xl font-bold mb-12 text-center">{t("projects.title")}</h2>
        </SectionTransition>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <SectionTransition key={project.id} delay={0.1 * (index + 1)}>
              <Card className="overflow-hidden h-full flex flex-col">
                <div className="relative aspect-video w-full flex items-center justify-center bg-muted">
                  <img
                    src={project.image}
                    alt={project.alt}
                    loading="lazy"
                    className={`object-cover w-full h-full ${project.imagePosition ?? ""}`}
                  />
                </div>
                <CardContent className="p-6 flex-1 flex flex-col">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">{t(project.titleKey)}</h3>
                    <p className="text-muted-foreground mb-4">{t(project.descriptionKey)}</p>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    {isClientProject(project) ? (
                      <Badge variant="secondary" className="flex items-center gap-1 py-1.5 px-3">
                        <Lock className="h-3 w-3" />
                        {t("projects.clientProject")}
                      </Badge>
                    ) : (
                      <>
                        {project.liveUrl && (
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <Button size="sm" variant="outline" className="flex items-center gap-1">
                              <ExternalLink className="h-4 w-4" />
                              {t("projects.liveDemo")}
                            </Button>
                          </a>
                        )}
                        {project.codeUrl && (
                          <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">
                            <Button size="sm" variant="outline" className="flex items-center gap-1">
                              <Github className="h-4 w-4" />
                              {t("projects.code")}
                            </Button>
                          </a>
                        )}
                      </>
                    )}
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
