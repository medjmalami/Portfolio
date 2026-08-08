import { ArrowLeft, ExternalLink, Github, Lock } from "lucide-react"
import { Link, Navigate, useLocation, useParams } from "react-router-dom"
import { useEffect } from "react"
import { Badge } from "../components/ui/badge"
import { Button } from "../components/ui/button"
import { LanguageSwitcher } from "../components/language-switcher"
import { ThemeSwitcher } from "../components/theme-switcher"
import { useTranslations } from "../hooks/use-translations"
import { getLocalized, getProjectCaseStudy } from "../data/project-case-studies"
import { projects } from "../data/projects"

export default function ProjectDetail() {
  const { projectId } = useParams<{ projectId: string }>()
  const location = useLocation()
  const { language, t } = useTranslations()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" })
  }, [location.pathname])
  const project = projects.find((item) => item.id === projectId)
  const study = projectId ? getProjectCaseStudy(projectId) : undefined

  if (!project || !study) return <Navigate to={`/${language}`} replace />

  return (
    <main className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-40 border-b bg-background/85 backdrop-blur-sm">
        <div className="container mx-auto flex items-center justify-between gap-4 px-4 py-4">
          <Button asChild variant="ghost" size="sm">
            <Link to={`/${language}#projects`}>
              <ArrowLeft data-icon="inline-start" />
              {t("projects.back")}
            </Link>
          </Button>
          <div className="flex items-center gap-2"><ThemeSwitcher /><LanguageSwitcher /></div>
        </div>
      </header>

      <div className="container mx-auto max-w-5xl px-4 py-12 md:py-20">
        <article className="flex flex-col gap-12">
          <header className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-muted-foreground">{t("projects.caseStudy")}</p>
              <h1 className="max-w-4xl text-balance text-4xl font-bold tracking-tight md:text-6xl">{t(project.titleKey)}</h1>
              <p className="max-w-3xl text-pretty text-lg leading-relaxed text-muted-foreground">{t(project.descriptionKey)}</p>
            </div>
            <div className="flex flex-wrap gap-2">{project.technologies.map((tech) => <Badge key={tech} variant="secondary">{tech}</Badge>)}</div>
            <div className="flex flex-wrap items-center gap-3">
              {project.liveUrl ? <Button asChild variant="outline" size="sm"><a href={project.liveUrl} target="_blank" rel="noopener noreferrer"> <ExternalLink data-icon="inline-start" />{t("projects.liveDemo")}</a></Button> : <Badge variant="outline"><Lock data-icon="inline-start" />{t("projects.noLiveDemo")}</Badge>}
              {project.codeUrl ? <Button asChild variant="outline" size="sm"><a href={project.codeUrl} target="_blank" rel="noopener noreferrer"><Github data-icon="inline-start" />{t("projects.code")}</a></Button> : <Badge variant="outline"><Lock data-icon="inline-start" />{t("projects.privateRepo")}</Badge>}
            </div>
          </header>

          <section className="grid gap-4 border-t pt-10 md:grid-cols-[0.28fr_1fr]">
            <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-muted-foreground">{t("projects.problem")}</h2>
            <p className="max-w-3xl text-lg leading-relaxed">{getLocalized(study.problem, language)}</p>
          </section>

          <section className="grid gap-8 border-t pt-10 md:grid-cols-[0.28fr_1fr]">
            <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-muted-foreground">{t("projects.architecture")}</h2>
            <div className="flex flex-col gap-8">{study.architecture.map((stage, index) => <div key={index} className="grid gap-2 md:grid-cols-[auto_1fr]"><div className="flex items-center gap-3"><span className="font-mono text-sm text-muted-foreground">{String(index + 1).padStart(2, "0")}</span><h3 className="font-semibold">{getLocalized(stage.stage, language)}</h3></div><p className="leading-relaxed text-muted-foreground md:col-start-2">{getLocalized(stage.reason, language)}</p></div>)}</div>
          </section>

          <section className="grid gap-8 border-t pt-10 md:grid-cols-[0.28fr_1fr]">
            <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-muted-foreground">{t("projects.tradeoffs")}</h2>
            <ul className="flex list-disc flex-col gap-4 ps-5">{study.tradeoffs.map((item, index) => <li key={index} className="leading-relaxed">{getLocalized(item, language)}</li>)}</ul>
          </section>

          <section className="grid gap-8 border-t pt-10 md:grid-cols-[0.28fr_1fr]">
            <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-muted-foreground">{t("projects.debugging")}</h2>
            <p className="max-w-3xl leading-relaxed">{getLocalized(study.debugging, language)}</p>
          </section>

          <section className="grid gap-8 border-t pt-10 md:grid-cols-[0.28fr_1fr]">
            <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-muted-foreground">{t("projects.numbers")}</h2>
            <ul className="flex list-disc flex-col gap-3 ps-5">{study.numbers.map((item, index) => <li key={index} className="leading-relaxed text-muted-foreground">{getLocalized(item, language)}</li>)}</ul>
          </section>

          <section className="grid gap-8 border-t pt-10 md:grid-cols-[0.28fr_1fr]">
            <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-muted-foreground">{t("projects.future")}</h2>
            <ul className="flex list-disc flex-col gap-3 ps-5">{study.future.map((item, index) => <li key={index} className="leading-relaxed">{getLocalized(item, language)}</li>)}</ul>
          </section>

          <section className="grid gap-8 border-t pt-10 md:grid-cols-[0.28fr_1fr]">
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-muted-foreground">{t("projects.screenshots")}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{t("projects.screenshotsDescription")}</p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              {project.media.map((item, index) => item.type === "screenshot" ? (
                <figure key={`${item.type}-${item.src}-${index}`} className="overflow-hidden rounded-xl border bg-muted/20 shadow-sm sm:col-span-2">
                  <img src={item.src} alt={item.alt} className="aspect-video w-full object-cover" />
                  <figcaption className="border-t px-4 py-3 text-sm text-muted-foreground">{item.label ?? item.alt}</figcaption>
                </figure>
              ) : (
                <figure key={`${item.type}-${item.src}-${index}`} className="overflow-hidden rounded-xl border bg-muted/20 shadow-sm sm:col-span-2">
                  <video className="aspect-video w-full bg-muted object-cover" controls preload="metadata" aria-label={item.title}>
                    <source src={item.src} />
                  </video>
                  <figcaption className="border-t px-4 py-3 text-sm text-muted-foreground">{item.title}{item.description ? ` — ${item.description}` : ""}</figcaption>
                </figure>
              ))}
            </div>
          </section>
        </article>
      </div>
    </main>
  )
}
