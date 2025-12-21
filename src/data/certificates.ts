export interface Certificate {
  id: string
  image: string
  alt: string
  nameKey: string
  provider: string
  url: string
}

export const certificates: Certificate[] = [

  {
    id: "frontend",
    image: "/frontend.png",
    alt: "Front End Development Libraries Certificate from freeCodeCamp",
    nameKey: "certificates.frontend.name",
    provider: "freeCodeCamp",
    url: "https://www.freecodecamp.org/certification/Mohamed-Amine-Jmal/front-end-development-libraries",
  },
  {
    id: "backend",
    image: "/backend.png",
    alt: "Back End Development and APIs Certificate from freeCodeCamp",
    nameKey: "certificates.backend.name",
    provider: "freeCodeCamp",
    url: "https://www.freecodecamp.org/certification/Mohamed-Amine-Jmal/back-end-development-and-apis",
  },
  {
    id: "quality",
    image: "/quality.png",
    alt: "Quality Assurance Certificate from freeCodeCamp",
    nameKey: "certificates.quality.name",
    provider: "freeCodeCamp",
    url: "https://www.freecodecamp.org/certification/Mohamed-Amine-Jmal/quality-assurance-v7",
  },
  {
    id: "machinelearning",
    image: "/machine-learning-certif.png",
    alt: "Machine Learning with Python Certificate from freeCodeCamp",
    nameKey: "certificates.machinelearning.name",
    provider: "freeCodeCamp",
    url: "https://www.freecodecamp.org/certification/mohamed-amine-jmal/machine-learning-with-python-v7",
  },
    {
    id: "javascript",
    image: "/javascript.png",
    alt: "JavaScript Algorithms and Data Structures Certificate from freeCodeCamp",
    nameKey: "certificates.javascript.name",
    provider: "freeCodeCamp",
    url: "https://www.freecodecamp.org/certification/Mohamed-Amine-Jmal/javascript-algorithms-and-data-structures-v8",
  },
]
