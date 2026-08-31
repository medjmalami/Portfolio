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
    media: [
      {
        type: "demo",
        src: "/tenders.mp4",
        title: "TenderApp dashboard showing AI-powered tender classification and proposal drafting built with LangGraph and FastAPI"
      },
      {
        type: "screenshot",
        src: "/tenders1.png",
        alt: "The graph used by LangGraph to classify and draft tender proposals"
      },

    ],
    titleKey: "projects.tenderapp.title",
    descriptionKey: "projects.tenderapp.description",
    technologies: ["FastAPI", "PostgreSQL", "SQLAlchemy", "Alembic", "Docker", "LangGraph", "LangChain", "Next.js"],
    liveUrl: "",
    codeUrl: "https://github.com/medjmalami/tenders",
    imagePosition: "object-[0%_center]",
  },
  {
    id: "ecoshield",
    image: "/ecoShield.png",
    alt: "EcoShield AI dashboard showing real-time FDI attack detection and pump power optimization for smart water infrastructure",
    media: [
      { type: "demo", src: "/ecoShield.mp4", title: "EcoShield AI dashboard showing real-time FDI attack detection and pump power optimization for smart water infrastructure" },
      { type: "screenshot", src: "/ecoShieldDiagram.png", alt: "EcoShield AI architecture diagram" },
    ],
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
    media: [
      {
        type: "screenshot",
        src: "/erp-login.png",
        alt: "ERP system login page"
      },
      {
        type: "screenshot",
        src: "/erp-admin1.png",
        alt: "ERP system admin dashboard"
      },
      {
        type: "screenshot",
        src: "/erp-admin2.png",
        alt: "ERP system admin dashboard"
      },
      {
        type: "screenshot",
        src: "/erp-admin3.png",
        alt: "ERP system admin dashboard"
      },
      {
        type: "screenshot",
        src: "/erp-admin4.png",
        alt: "ERP system admin dashboard"
      },
      {
        type: "screenshot",
        src: "/erp-hr1.png",
        alt: "ERP system HR dashboard"
      },
      {
        type: "screenshot",
        src: "/erp-hr2.png",
        alt: "ERP system HR dashboard"
      },
      {
        type: "screenshot",
        src: "/erp-hr3.png",
        alt: "ERP system HR dashboard"
      },
      {
        type: "screenshot",
        src: "/erp-hr4.png",
        alt: "ERP system HR dashboard"
      },
      {
        type: "screenshot",
        src: "/erp-stock1.jpg",
        alt: "ERP system stock dashboard"
      },
      {
        type: "screenshot",
        src: "/erp-stock2.png",
        alt: "ERP system stock dashboard"
      },
      {
        type: "screenshot",
        src: "/erp-stock3.jpg",
        alt: "ERP system stock dashboard"
      },
      {
        type: "screenshot",
        src: "/erp-stock4.png",
        alt: "ERP system stock dashboard"
      },
      {
        type: "screenshot",
        src: "/erp-stock5.png",
        alt: "ERP system stock dashboard"
      },
      {
        type: "screenshot",
        src: "/erp-stock6.png",
        alt: "ERP system stock dashboard"
      },
      {
        type: "screenshot",
        src: "/erp-commercial1.jpg",
        alt: "ERP system commercial dashboard"
      },
      {
        type: "screenshot",
        src: "/erp-commercial2.jpg",
        alt: "ERP system commercial dashboard"
      },
      {
        type: "screenshot",
        src: "/erp-finance1.jpg",
        alt: "ERP system finance dashboard"
      },
      {
        type: "screenshot",
        src: "/erp-finance2.jpg",
        alt: "ERP system finance dashboard"
      },
      {
        type: "screenshot",
        src: "/erp-finance3.jpg",
        alt: "ERP system finance dashboard"
      },
      {
        type: "screenshot",
        src: "/erp-purchase1.png",
        alt: "ERP system purchase dashboard"
      },
      {
        type: "screenshot",
        src: "/erp-purchase2.png",
        alt: "ERP system purchase dashboard"
      },
      {
        type: "screenshot",
        src: "/erp-purchase3.png",
        alt: "ERP system purchase dashboard"
      },
      {
        type: "screenshot",
        src: "/erp-marketing1.png",
        alt: "ERP system marketing dashboard"
      },

    ],
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
    media: [{ type: "screenshot", src: "/track-employees1.png", alt: "Employee attendance and payroll management login page" },
    { type: "screenshot", src: "/employees-payroll-management.png", alt: "Employee attendance and payroll management dashboard with role-based access control" },
    { type: "screenshot", src: "/track-employees3.png", alt: "adding new employee form" },
    { type: "screenshot", src: "/track-employees4.png", alt: "managing employees advances" },
    { type: "screenshot", src: "/track-employees5.png", alt: "dispalying the history of all employees" },
    { type: "screenshot", src: "/track-employees6.png", alt: "displaying the history of all employees" },
    { type: "screenshot", src: "/track-employees7.png", alt: "dispalying the history of one specific employee" }
    ],
    titleKey: "projects.payroll.title",
    descriptionKey: "projects.payroll.description",
    technologies: ["Bun", "Hono", "PostgreSQL", "Docker", "Drizzle ORM", "Zod", "JWT", "Next.js",],
    liveUrl: "",
    codeUrl: "",
  },

]
