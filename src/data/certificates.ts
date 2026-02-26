export interface Certificate {
  id: string
  image: string
  alt: string
  nameKey: string
  provider: string
  url: string
  objectPosition?: string
}

export const certificates: Certificate[] = [
  {
    id: "bigdata",
    image: "/Coursera Online Courses & Credentials From Clorado university.png",
    alt: "Software Architecture for Big Data Certificate from University of Colorado Boulder",
    nameKey: "certificates.bigdata.name",
    provider: "University of Colorado Boulder (Coursera)",
    url: "https://coursera.org/share/c14e18a8670c922522adee53c5de04a9",
    objectPosition: "top",
  },
    {
    id: "cloudSolutionArchitect",
    image: "/awsCloudSolution.png",
    alt: "AWS Cloud Solution Architect Certificate from Amazon Web Services",
    nameKey: "certificates.cloudSolutionArchitect.name",
    provider: "Amazon Web Services (Coursera)",
    url: "https://coursera.org/share/6ee42fe46c796370f58e3d56c8ac20d8",
    objectPosition: "top",
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
    id: "machinelearning",
    image: "/machine-learning-certif.png",
    alt: "Machine Learning with Python Certificate from freeCodeCamp",
    nameKey: "certificates.machinelearning.name",
    provider: "freeCodeCamp",
    url: "https://www.freecodecamp.org/certification/mohamed-amine-jmal/machine-learning-with-python-v7",
  },
]
