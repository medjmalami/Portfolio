import { ArrowLeft, ChevronLeft, ChevronRight, Github, Lock } from "lucide-react"
import { useEffect, useState } from "react"
import { Link, Navigate, useLocation, useParams } from "react-router-dom"
import { LanguageSwitcher } from "../components/language-switcher"
import { ThemeSwitcher } from "../components/theme-switcher"
import { Badge } from "../components/ui/badge"
import { Button } from "../components/ui/button"
import { getCaseStudyNarrative, getProjectCaseStudy } from "../data/project-case-studies"
import { projects } from "../data/projects"
import { useTranslations } from "../hooks/use-translations"
import { useSEO } from "../lib/seo"

function truncateDescription(text: string, maxLength = 155): string {
  if (text.length <= maxLength) return text
  const trimmed = text.slice(0, maxLength)
  const lastSpace = trimmed.lastIndexOf(" ")
  const safe = lastSpace > 80 ? trimmed.slice(0, lastSpace) : trimmed
  return `${safe.trimEnd()}…`
}

export default function ProjectDetail() {
  const { projectId, language: langParam } = useParams<{ projectId: string; language?: string }>()
  const location = useLocation()
  const { language, t } = useTranslations()
  const project = projects.find((item) => item.id === projectId)
  const study = projectId ? getProjectCaseStudy(projectId) : undefined

  const [mediaIndex, setMediaIndex] = useState(0)

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" })
  }, [location.pathname])

  useEffect(() => {
    setMediaIndex(0)
  }, [projectId])

  useSEO({
    title: project ? `${t(project.titleKey)} | Mohamed Amine Jmal` : "Project | Mohamed Amine Jmal",
    description: project ? truncateDescription(t(project.descriptionKey)) : "",
  })

  if (!project || !study) return <Navigate to={`/${language}`} replace />

  const mediaItems = project.media.length > 0 ? project.media : [{ type: "screenshot" as const, src: project.image, alt: project.alt }]
  const currentMedia = mediaItems[mediaIndex]
  const hasMultiple = mediaItems.length > 1

  const goPrev = () => setMediaIndex((prev) => (prev - 1 + mediaItems.length) % mediaItems.length)
  const goNext = () => setMediaIndex((prev) => (prev + 1) % mediaItems.length)

  return (
    <main className="case-study-page min-h-screen bg-background text-foreground">
      <header className="case-study-nav">
        <div className="container mx-auto flex items-center justify-between gap-4 px-5 py-4 lg:px-8">
          <Button asChild variant="ghost" size="sm">
            <Link
              to={`/${language}#projects`}
              className="inline-flex items-center gap-2"
            >
              <ArrowLeft data-icon="inline-start" className="h-4 w-4 shrink-0" />
              {t("projects.back")}
            </Link>
          </Button>
          <div className="flex items-center gap-2"><ThemeSwitcher /><LanguageSwitcher /></div>
        </div>
      </header>

      <div className="container mx-auto max-w-7xl px-5 pb-24 pt-10 lg:px-8 lg:pt-16">
        <article>
          <header className="case-study-hero">
            <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
              <span className="case-study-kicker">{t("projects.caseStudy")}</span>
              <span className="h-px w-8 bg-border" aria-hidden="true" />
              <span>{project.technologies.slice(0, 2).join(" · ")}</span>
            </div>
            <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-end">
              <div>
                <h1 className="mt-5 max-w-4xl text-balance text-5xl font-semibold leading-[0.98] tracking-[-0.055em] md:text-7xl">{t(project.titleKey)}</h1>
                <p className="mt-7 max-w-2xl text-pretty text-lg leading-8 text-muted-foreground md:text-xl">{t(project.descriptionKey)}</p>
              </div>
              <div className="flex flex-col gap-3 border-l border-border pl-5 text-sm text-muted-foreground lg:mb-2">
                <span className="font-mono text-xs uppercase tracking-[0.16em]">Stack</span>
                <div className="flex flex-wrap gap-2">{project.technologies.map((tech) => <Badge key={tech} variant="secondary" className="font-normal">{tech}</Badge>)}</div>
              </div>
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-2 sm:max-w-md">
              {project.codeUrl ? (
                <Button asChild variant="outline" className="w-full justify-center">
                  <a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2"
                  >
                    <Github className="h-4 w-4 shrink-0" />
                    {t("projects.code")}
                  </a>
                </Button>
              ) : (
                <div className="flex min-h-10 w-full items-center justify-center rounded-md border border-border px-3 text-sm text-muted-foreground">
                  <Lock className="mr-2 h-4 w-4 shrink-0" />
                  {t("projects.privateRepo")}
                </div>
              )}
            </div>
          </header>

          <section className="mt-12 lg:mt-16" aria-labelledby="project-media-heading">
            <div className="sr-only"><h2 id="project-media-heading">{t("projects.screenshots")}</h2></div>

            <div className="relative mt-6">
              {currentMedia.type === "screenshot" ? (
                <figure className="case-study-media">
                  <img
                    src={currentMedia.src}
                    alt={currentMedia.alt}
                    className={`aspect-[16/8] w-full object-cover ${project.imagePosition ?? ""}`}
                  />
                  <figcaption>{currentMedia.label ?? currentMedia.alt}</figcaption>
                </figure>
              ) : (
                <figure className="case-study-media">
                  <video
                    className="aspect-video w-full bg-muted object-cover"
                    controls
                    preload="metadata"
                    aria-label={currentMedia.title}
                  >
                    <source src={currentMedia.src} />
                  </video>
                  <figcaption>
                    {currentMedia.title}
                    {currentMedia.description ? ` — ${currentMedia.description}` : ""}
                  </figcaption>
                </figure>
              )}

              {hasMultiple && (
                <>
                  <button
                    type="button"
                    onClick={goPrev}
                    aria-label="Previous media"
                    className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full border border-border bg-background/80 p-2 shadow-sm backdrop-blur transition hover:bg-background"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    type="button"
                    onClick={goNext}
                    aria-label="Next media"
                    className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full border border-border bg-background/80 p-2 shadow-sm backdrop-blur transition hover:bg-background"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </>
              )}
            </div>

            {hasMultiple && (
              <div className="mt-4 flex items-center justify-center gap-2">
                {mediaItems.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setMediaIndex(index)}
                    aria-label={`Go to media ${index + 1}`}
                    className={`h-2 rounded-full transition-all ${index === mediaIndex ? "w-6 bg-foreground" : "w-2 bg-border"
                      }`}
                  />
                ))}
              </div>
            )}
          </section>

          <section className="case-study-body mt-16 border-t border-border pt-10 lg:mt-24 lg:pt-14">
            <h2 className="max-w-3xl text-balance text-3xl font-medium tracking-[-0.04em] md:text-5xl">{t("projects.caseStudy")}</h2>
            <p className="mt-8 max-w-4xl text-pretty text-lg leading-9 text-muted-foreground md:text-xl md:leading-10">
              {getCaseStudyNarrative(study, language)}
            </p>
          </section>

        </article>
      </div>
    </main >
  )
}
