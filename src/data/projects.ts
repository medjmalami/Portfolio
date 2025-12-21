export interface Project {
  id: string
  image: string
  alt: string
  titleKey: string
  descriptionKey: string
  technologies: string[]
  liveUrl: string
  codeUrl: string
}

export const projects: Project[] = [
  {
    id: "ecommerce",
    image: "/ecommerce-front.png",
    alt: "E-Commerce Website project - responsive online store built with HTML, CSS, and JavaScript",
    titleKey: "projects.ecommerce.title",
    descriptionKey: "projects.ecommerce.description",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://ecommerce-front-jmal.netlify.app/",
    codeUrl: "https://github.com/medjmalami/Ecommerce-front",
  },
  {
    id: "3d-models",
    image: "/3dModel.png",
    alt: "3D Models Showcase project - interactive 3D viewer built with React and Three.js",
    titleKey: "projects.3d.title",
    descriptionKey: "projects.3d.description",
    technologies: ["React", "Express", "PostgreSQL", "Three.js"],
    liveUrl: "https://3d-models-proj-jmal.vercel.app/",
    codeUrl: "https://github.com/medjmalami/3d-models-proj",
  },
]
