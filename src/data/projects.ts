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
    id: "employees-payroll",
    image: "/employees-payroll-management.png",
    alt: "Screenshot of employees payroll management system dashboard",
    titleKey: "projects.payroll.title",
    descriptionKey: "projects.payroll.description",
    technologies: ["Next.js", "Hono", "PostgreSQL", "Drizzle ORM", "Zod","JWT"],
    liveUrl: "",
    codeUrl: "",
  },
  {
    id: "chat-app",
    image: "/chatApp.png",
    alt: "Screenshot of a real-time group chat application with notifications",
    titleKey: "projects.chatapp.title",
    descriptionKey: "projects.chatapp.description",
    technologies: ["Next.js", "Hono", "PostgreSQL", "Drizzle ORM", "Socket.io", "Zod", "OAuth", "JWT"],
    liveUrl: "https://chat-front-a40y.onrender.com/",
    codeUrl: "https://github.com/medjmalami/chat-notif-app/",
    imagePosition: "object-[0%_center]",
  },
  {
    id: "3d-models",
    image: "/3dModel.png",
    alt: "3D Models Showcase project - interactive 3D viewer built with React and Three.js",
    titleKey: "projects.3d.title",
    descriptionKey: "projects.3d.description",
    technologies: ["React", "Express", "PostgreSQL", "Drizzle ORM", "Zod", "JWT", "S3"],
    liveUrl: "https://3d-models-proj-jmal.vercel.app/",
    codeUrl: "https://github.com/medjmalami/3d-models-proj",
  },
]
