import { Code, Server, Cloud, type LucideIcon } from "lucide-react"

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
      "Fastify",
      "Hono",
      "WebSockets",
      "OAuth",
      "JWT",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "Drizzle ORM",
      "RabbitMQ",
    ],
  },
  {
    id: "devops",
    titleKey: "skills.devops",
    descriptionKey: "skills.devops.description",
    icon: Cloud,
    skills: [
      "Docker",
      "Docker Compose",
      "CI/CD",
      "GitHub Actions",
      "Git",
      "Nginx",
      "S3",
      "Arch Linux (daily use)",
    ],
  },
]