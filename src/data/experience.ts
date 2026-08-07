export interface ExperienceItem {
  id: string
  roleKey: string
  orgKey: string
  periodKey: string
  bulletKeys: string[]
}

export const experience: ExperienceItem[] = [
  {
    id: "zetabox",
    roleKey: "experience.zetabox.role",
    orgKey: "experience.zetabox.org",
    periodKey: "experience.zetabox.period",
    bulletKeys: [
      "experience.zetabox.bullet1",
      "experience.zetabox.bullet2",
    ],
  },
  {
    id: "gdsc",
    roleKey: "experience.gdsc.role",
    orgKey: "experience.gdsc.org",
    periodKey: "experience.gdsc.period",
    bulletKeys: [
      "experience.gdsc.bullet1",
    ],
  },
  {
    id: "freelance",
    roleKey: "experience.freelance.role",
    orgKey: "experience.freelance.org",
    periodKey: "experience.freelance.period",
    bulletKeys: [
      "experience.freelance.bullet1",
      "experience.freelance.bullet2",
    ],
  },
]
