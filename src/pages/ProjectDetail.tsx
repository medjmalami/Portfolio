import { ArrowLeft, ExternalLink, Github, Lock } from "lucide-react"
import { useEffect } from "react"
import { Link, Navigate, useLocation, useParams } from "react-router-dom"
import { LanguageSwitcher } from "../components/language-switcher"
import { ThemeSwitcher } from "../components/theme-switcher"
import { Badge } from "../components/ui/badge"
import { Button } from "../components/ui/button"
import { getCaseStudyNarrative, getProjectCaseStudy } from "../data/project-case-studies"
import { projects } from "../data/projects"
import { useTranslations } from "../hooks/use-translations"

export default function ProjectDetail() {
  const { projectId } = useParams<{ projectId: string }>()
  const location = useLocation()
  const { language, t } = useTranslations()
  const project = projects.find((item) => item.id === projectId)
  const study = projectId ? getProjectCaseStudy(projectId) : undefined

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" })
  }, [location.pathname])

  if (!project || !study) return <Navigate to={`/${language}`} replace />

  return (
    <main className="case-study-page min-h-screen bg-background text-foreground">
      <header className="case-study-nav">
        <div className="container mx-auto flex items-center justify-between gap-4 px-5 py-4 lg:px-8">
          <Button asChild variant="ghost" size="sm" className="-ml-3 gap-2 text-muted-foreground hover:text-foreground">
            <Link to={`/${language}#projects`}><ArrowLeft data-icon="inline-start" />{t("projects.back")}</Link>
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
            <div className="mt-9 flex flex-wrap gap-3">
              {project.liveUrl ? <Button asChild><a href={project.liveUrl} target="_blank" rel="noopener noreferrer">{t("projects.liveDemo")}<ExternalLink data-icon="inline-end" /></a></Button> : <Badge variant="outline" className="h-9 gap-2 px-3"><Lock data-icon="inline-start" />{t("projects.noLiveDemo")}</Badge>}
              {project.codeUrl ? <Button asChild variant="outline"><a href={project.codeUrl} target="_blank" rel="noopener noreferrer"><Github data-icon="inline-start" />{t("projects.code")}</a></Button> : <Badge variant="outline" className="h-9 gap-2 px-3"><Lock data-icon="inline-start" />{t("projects.privateRepo")}</Badge>}
            </div>
          </header>

          <section className="mt-12 lg:mt-16" aria-labelledby="project-media-heading">
            <div className="sr-only"><h2 id="project-media-heading">{t("projects.screenshots")}</h2></div>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              {(project.media.length > 0 ? project.media : [{ type: "screenshot" as const, src: project.image, alt: project.alt }]).map((item, index) => item.type === "screenshot" ? <figure key={`${item.src}-${index}`} className="case-study-media md:col-span-2"><img src={item.src} alt={item.alt} className={`aspect-[16/8] w-full object-cover ${project.imagePosition ?? ""}`} /><figcaption>{item.label ?? item.alt}</figcaption></figure> : <figure key={`${item.src}-${index}`} className="case-study-media md:col-span-2"><video className="aspect-video w-full bg-muted object-cover" controls preload="metadata" aria-label={item.title}><source src={item.src} /></video><figcaption>{item.title}{item.description ? ` — ${item.description}` : ""}</figcaption></figure>)}
            </div>
          </section>

          <section className="case-study-body mt-16 border-t border-border pt-10 lg:mt-24 lg:pt-14">
            <h2 className="max-w-3xl text-balance text-3xl font-medium tracking-[-0.04em] md:text-5xl">{t("projects.caseStudy")}</h2>
            <p className="mt-8 max-w-4xl text-pretty text-lg leading-9 text-muted-foreground md:text-xl md:leading-10">
              {getCaseStudyNarrative(study, language)}
            </p>
          </section>

        </article>
      </div>
    </main>
  )
}
