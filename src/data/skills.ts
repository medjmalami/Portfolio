import { Code, Server, Database, type LucideIcon } from "lucide-react"

export interface SkillCategory {
  id: string
  titleKey: string
  icon: LucideIcon
  skills: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    titleKey: "skills.frontend",
    icon: Code,
    skills: ["React", "Next.js", "JavaScript", "TypeScript", "HTML5", "CSS", "Tailwind", "Bootstrap", "jQuery", "Redux"],
  },
  {
    id: "backend",
    titleKey: "skills.backend",
    icon: Server,
    skills: ["Node.js", "Express", "Hono", "Fastify", "Nest.js", "REST APIs", "Socket.io", "WebSocket", "OAuth", "PHP", "Java", "Python", "C"],
  },
  {
    id: "database",
    titleKey: "skills.database",
    icon: Database,
    skills: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "SQL", "Amazon S3", "Docker", "Git", "GitHub", "Linux"],
  },
]
