import { projects } from "./projects"

export interface ProjectCaseStudy {
  projectId: string
  problem: string
  architecture: { stage: string; reason: string }[]
  tradeoffs: string[]
  debugging: string
  numbers: string[]
  future: string[]
}

const unavailable = "caseStudy.common.unavailable"

const tenderApp: ProjectCaseStudy = {
  projectId: "tender-app",
  problem: "caseStudy.tenderApp.problem",
  architecture: [
    { stage: "caseStudy.tenderApp.architecture.fetch.stage", reason: "caseStudy.tenderApp.architecture.fetch.reason" },
    { stage: "caseStudy.tenderApp.architecture.orchestrate.stage", reason: "caseStudy.tenderApp.architecture.orchestrate.reason" },
    { stage: "caseStudy.tenderApp.architecture.persist.stage", reason: "caseStudy.tenderApp.architecture.persist.reason" },
  ],
  tradeoffs: ["caseStudy.tenderApp.tradeoffs.langGraph", "caseStudy.tenderApp.tradeoffs.postgres"],
  debugging: "caseStudy.tenderApp.debugging",
  numbers: [unavailable],
  future: ["caseStudy.tenderApp.future.timings", "caseStudy.tenderApp.future.fixtures"],
}

const genericCaseStudy = (projectId: string): ProjectCaseStudy => ({
  projectId,
  problem: "caseStudy.common.problem",
  architecture: [
    { stage: "caseStudy.common.architecture.data.stage", reason: "caseStudy.common.architecture.data.reason" },
    { stage: "caseStudy.common.architecture.backend.stage", reason: "caseStudy.common.architecture.backend.reason" },
    { stage: "caseStudy.common.architecture.ui.stage", reason: "caseStudy.common.architecture.ui.reason" },
  ],
  tradeoffs: ["caseStudy.common.tradeoffs.postgres", "caseStudy.common.tradeoffs.monolith"],
  debugging: "caseStudy.common.debugging",
  numbers: [unavailable],
  future: ["caseStudy.common.future.scenarios", "caseStudy.common.future.instrumentation"],
})

export const projectCaseStudies: Record<string, ProjectCaseStudy> = {
  "tender-app": tenderApp,
}

for (const project of projects) {
  if (!projectCaseStudies[project.id]) projectCaseStudies[project.id] = genericCaseStudy(project.id)
}

export function getProjectCaseStudy(id: string) {
  return projectCaseStudies[id]
}
