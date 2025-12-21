import { Code, Server, type LucideIcon } from "lucide-react"

export interface SkillCategory {
  id: string
  titleKey: string
  descriptionKey: string
  icon: LucideIcon
  skills: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    titleKey: "skills.frontend",
    descriptionKey: "skills.frontend.description",
    icon: Code,
    skills: ["React", "Next.js", "JavaScript", "TypeScript", "HTML5", "CSS", "Tailwind CSS", "Bootstrap", "Redux"],
  },
  {
    id: "backend",
    titleKey: "skills.backend",
    descriptionKey: "skills.backend.description",
    icon: Server,
    skills: [
      "Node.js",
      "Express",
      "NestJS",
      "Fastify",
      "Hono",
      "REST APIs",
      "WebSockets",
      "OAuth",
      "JWT",
      "PostgreSQL",
      "MongoDB",
      "MySQL",
      "Redis",
      "SQL",
      "Drizzle ORM",
      "Docker",
      "Docker Compose",
    ],
  },
]
