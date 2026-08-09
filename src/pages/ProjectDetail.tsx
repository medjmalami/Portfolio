import { ArrowLeft, ArrowUpRight, ExternalLink, Github, Lock } from "lucide-react"
import { useEffect, type ReactNode } from "react"
import { Link, Navigate, useLocation, useParams } from "react-router-dom"
import { LanguageSwitcher } from "../components/language-switcher"
import { ThemeSwitcher } from "../components/theme-switcher"
import { Badge } from "../components/ui/badge"
import { Button } from "../components/ui/button"
import { getLocalized, getProjectCaseStudy } from "../data/project-case-studies"
import { projects } from "../data/projects"
import { useTranslations } from "../hooks/use-translations"

function SectionLabel({ children }: { children: ReactNode }) {
  return <p className="case-study-label">{children}</p>
}

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

          <div className="case-study-cover mt-12 lg:mt-16">
            <img src={project.image} alt={project.alt} className={`aspect-[16/8] w-full object-cover ${project.imagePosition ?? ""}`} />
            <div className="flex items-center justify-between border-t border-border px-5 py-4 text-xs uppercase tracking-[0.14em] text-muted-foreground"><span>{project.alt}</span><ArrowUpRight className="size-4" /></div>
          </div>

          <div className="case-study-body mt-16 grid gap-14 lg:grid-cols-[13rem_minmax(0,1fr)] lg:gap-16">
            <aside className="hidden lg:block"><div className="sticky top-24 flex flex-col gap-5"><SectionLabel>{t("projects.caseStudy")}</SectionLabel><nav className="flex flex-col gap-3 text-sm text-muted-foreground"><a href="#problem">{t("projects.problem")}</a><a href="#architecture">{t("projects.architecture")}</a><a href="#tradeoffs">{t("projects.tradeoffs")}</a><a href="#debugging">{t("projects.debugging")}</a><a href="#future">{t("projects.future")}</a></nav></div></aside>
            <div className="flex min-w-0 flex-col gap-16">
              <section id="problem" className="case-study-section"><SectionLabel>{t("projects.problem")}</SectionLabel><div><h2 className="case-study-heading">The constraint behind the interface.</h2><p className="case-study-copy">{getLocalized(study.problem, language)}</p></div></section>
              <section id="architecture" className="case-study-section"><SectionLabel>{t("projects.architecture")}</SectionLabel><div><h2 className="case-study-heading">A system designed to stay understandable.</h2><div className="mt-8 flex flex-col">{study.architecture.map((stage, index) => <div key={index} className="case-study-step"><span className="case-study-index">{String(index + 1).padStart(2, "0")}</span><div><h3 className="text-lg font-medium">{getLocalized(stage.stage, language)}</h3><p className="mt-2 leading-7 text-muted-foreground">{getLocalized(stage.reason, language)}</p></div></div>)}</div></div></section>
              <section id="tradeoffs" className="case-study-section"><SectionLabel>{t("projects.tradeoffs")}</SectionLabel><div><h2 className="case-study-heading">The decisions were part of the product.</h2><div className="mt-7 grid gap-4">{study.tradeoffs.map((item, index) => <div key={index} className="case-study-note"><span className="font-mono text-xs text-muted-foreground">{String(index + 1).padStart(2, "0")}</span><p className="leading-7">{getLocalized(item, language)}</p></div>)}</div></div></section>
              <section id="debugging" className="case-study-section"><SectionLabel>{t("projects.debugging")}</SectionLabel><div><h2 className="case-study-heading">Make the failure inspectable.</h2><p className="case-study-copy">{getLocalized(study.debugging, language)}</p></div></section>
              <section className="case-study-section"><SectionLabel>{t("projects.numbers")}</SectionLabel><div><h2 className="case-study-heading">Evidence, not decoration.</h2><ul className="mt-7 flex flex-col gap-3">{study.numbers.map((item, index) => <li key={index} className="border-l-2 border-primary/40 pl-5 leading-7 text-muted-foreground">{getLocalized(item, language)}</li>)}</ul></div></section>
              <section id="future" className="case-study-section"><SectionLabel>{t("projects.future")}</SectionLabel><div><h2 className="case-study-heading">Where I would take it next.</h2><ul className="mt-7 flex flex-col gap-4">{study.future.map((item, index) => <li key={index} className="flex gap-4 leading-7"><span className="font-mono text-xs text-muted-foreground">{String(index + 1).padStart(2, "0")}</span><span>{getLocalized(item, language)}</span></li>)}</ul></div></section>
            </div>
          </div>

          <section className="mt-20 border-t border-border pt-10"><div className="grid gap-8 lg:grid-cols-[13rem_minmax(0,1fr)] lg:gap-16"><SectionLabel>{t("projects.screenshots")}</SectionLabel><div><p className="max-w-xl leading-7 text-muted-foreground">{t("projects.screenshotsDescription")}</p><div className="mt-8 grid gap-6 md:grid-cols-2">{project.media.map((item, index) => item.type === "screenshot" ? <figure key={`${item.src}-${index}`} className="case-study-media md:col-span-2"><img src={item.src} alt={item.alt} className="aspect-video w-full object-cover" /><figcaption>{item.label ?? item.alt}</figcaption></figure> : <figure key={`${item.src}-${index}`} className="case-study-media md:col-span-2"><video className="aspect-video w-full bg-muted object-cover" controls preload="metadata" aria-label={item.title}><source src={item.src} /></video><figcaption>{item.title}{item.description ? ` — ${item.description}` : ""}</figcaption></figure>)}</div></div></div></section>
        </article>
      </div>
    </main>
  )
}
