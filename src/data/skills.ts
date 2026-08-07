import { BrainCircuit, Cloud, Code, type LucideIcon, Server } from "lucide-react"

export interface SkillCategory {
  id: string
  titleKey: string
  descriptionKey: string
  icon: LucideIcon
  skills: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    id: "backend",
    titleKey: "skills.backend",
    descriptionKey: "skills.backend.description",
    icon: Server,
    skills: [
      "Node.js",
      "Express",
      "Hono",
      "Python",
      "FastAPI",
      "WebSockets",
      "SSE",
      "OAuth",
      "JWT",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "Drizzle ORM",
      "RabbitMQ",
      "SQLAlchemy",
      "Alembic",
    ],
  },
  {
    id: "ai",
    titleKey: "skills.ai",
    descriptionKey: "skills.ai.description",
    icon: BrainCircuit,
    skills: [
      "LangGraph",
      "LangChain",
      "RAG Pipelines",
      "GraphRAG",
      "Re-ranking RAG",
      "Hybrid RAG",
      "VectorDBs",
      "MCP",

    ],
  },
  {
    id: "devops",
    titleKey: "skills.devops",
    descriptionKey: "skills.devops.description",
    icon: Cloud,
    skills: [
      "Docker & Docker Compose",
      "GitHub Actions (CI/CD)",
      "Git & GitHub",
      "Nginx",
      "AWS",
      "Arch Linux (daily use)",
    ],
  },
  {
    id: "frontend",
    titleKey: "skills.frontend",
    descriptionKey: "skills.frontend.description",
    icon: Code,
    skills: ["React", "Next.js", "JavaScript", "TypeScript", "Tailwind CSS", "Shadcn/ui", "Redux"],
  },

]
