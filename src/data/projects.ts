export interface Project {
  id: string
  image: string
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
    alt: "Screenshot of a tender management application",
    titleKey: "projects.tenderapp.title",
    descriptionKey: "projects.tenderapp.description",
    technologies: ["FastAPI", "PostgreSQL", "SQLAlchemy", "Alembic", "LangGraph", "LangChain", "Next.js"],
    liveUrl: "",
    codeUrl: "",
    imagePosition: "object-[0%_center]",
  },
  {
    id: "erp",
    image: "/erp.jpg",
    alt: "Screenshot of a comprehensive ERP system dashboard showing multiple business management modules",
    titleKey: "projects.erp.title",
    descriptionKey: "projects.erp.description",
    technologies: ["Next.js", "Node.js", "Hono", "PostgreSQL", "Drizzle ORM", "S3"],
    liveUrl: "",
    codeUrl: "",
    imagePosition: "object-[0%_10%]",
  },
  {
    id: "employees-payroll",
    image: "/employees-payroll-management.png",
    alt: "Screenshot of employees payroll management system dashboard",
    titleKey: "projects.payroll.title",
    descriptionKey: "projects.payroll.description",
    technologies: ["Next.js", "Hono", "PostgreSQL", "Drizzle ORM", "Zod", "JWT"],
    liveUrl: "",
    codeUrl: "",
  },
  {
    id: "ecoshield",
    image: "/ecoShield.png",
    alt: "EcoShield AI dashboard showing real-time FDI attack detection and pump power optimization for smart water infrastructure",
    titleKey: "projects.ecoshield.title",
    descriptionKey: "projects.ecoshield.description",
    technologies: ["Next.js", "Express.js", "PyTorch", "LSTM", "FastAPI", "MongoDB", "Redis"],
    liveUrl: "",
    codeUrl: "https://github.com/medjmalami/ecoShield",
  },

]
