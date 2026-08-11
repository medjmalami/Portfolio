export type ProjectMedia =
  | { type: "screenshot"; src: string; alt: string; label?: string }
  | { type: "demo"; src: string; title: string; description?: string }

export interface Project {
  id: string
  image: string
  media: ProjectMedia[]
  alt: string
  titleKey: string
  descriptionKey: string
  technologies: string[]
  liveUrl: string
  codeUrl: string
  imagePosition?: string
}

export const projects: Project[] = [
  {
    id: "tender-app",
    image: "/tenders.png",
    alt: "TenderApp dashboard showing AI-powered tender classification and proposal drafting built with LangGraph and FastAPI",
    media: [{ type: "screenshot", src: "/tenders.png", alt: "TenderApp dashboard showing AI-powered tender classification and proposal drafting built with LangGraph and FastAPI" }],
    titleKey: "projects.tenderapp.title",
    descriptionKey: "projects.tenderapp.description",
    technologies: ["FastAPI", "PostgreSQL", "SQLAlchemy", "Alembic", "Docker", "LangGraph", "LangChain", "Next.js"],
    liveUrl: "",
    codeUrl: "",
    imagePosition: "object-[0%_center]",
  },
  {
    id: "ecoshield",
    image: "/ecoShield.png",
    alt: "EcoShield AI dashboard showing real-time FDI attack detection and pump power optimization for smart water infrastructure",
    media: [{ type: "screenshot", src: "/ecoShield.png", alt: "EcoShield AI dashboard showing real-time FDI attack detection and pump power optimization for smart water infrastructure" }],
    titleKey: "projects.ecoshield.title",
    descriptionKey: "projects.ecoshield.description",
    technologies: ["FastAPI", "Node.js", "Express.js", "RabbitMQ", "JWT", "Docker", "LSTM", "MongoDB", "Redis", "SSE", "Next.js",],
    liveUrl: "",
    codeUrl: "https://github.com/medjmalami/ecoShield",
  },
  {
    id: "erp",
    image: "/erp.jpg",
    alt: "ERP system dashboard showing HR, inventory, sales, and finance modules for an industrial client",
    media: [{ type: "screenshot", src: "/erp.jpg", alt: "ERP system dashboard showing HR, inventory, sales, and finance modules for an industrial client" }],
    titleKey: "projects.erp.title",
    descriptionKey: "projects.erp.description",
    technologies: ["Bun", "Hono", "PostgreSQL", "Drizzle ORM", "Docker", "S3", "JWT", "Zod", "Nginx", "Next.js",],
    liveUrl: "",
    codeUrl: "",
    imagePosition: "object-[0%_10%]",
  },
  {
    id: "employees-payroll",
    image: "/employees-payroll-management.png",
    alt: "Employee attendance and payroll management dashboard with role-based access control",
    media: [{ type: "screenshot", src: "/employees-payroll-management.png", alt: "Employee attendance and payroll management dashboard with role-based access control" }],
    titleKey: "projects.payroll.title",
    descriptionKey: "projects.payroll.description",
    technologies: ["Bun", "Hono", "PostgreSQL", "Docker", "Drizzle ORM", "Zod", "JWT", "Next.js",],
    liveUrl: "",
    codeUrl: "",
  },

]
