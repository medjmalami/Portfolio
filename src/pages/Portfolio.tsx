"use client"

import type React from "react"

import { useState, type FormEvent } from "react"
import { Button } from "../components/ui/button"
import { Card, CardContent } from "../components/ui/card"
import { Badge } from "../components/ui/badge"
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  ChevronRight,
  Code,
  Server,
  Database,
  CheckCircle,
  AlertCircle,
} from "lucide-react"
import { ThemeSwitcher } from "../components/theme-switcher"
import { LanguageSwitcher } from "../components/language-switcher"
import { useTranslations } from "../hooks/use-translations"
import { SectionTransition } from "../components/section-transition"
import { useScroll } from "../hooks/use-scroll"
import { motion } from "framer-motion"

export default function Portfolio() {
  const { t, language } = useTranslations()
  const { activeSection, scrollToSection } = useScroll()

  const en = language === "en" ? "/CV.EN.pdf" : "/CV.FR.pdf"

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")
  const [formError, setFormError] = useState("")

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }))
  }

  // Handle form submission
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      const errorMessage = language === "en" ? "Please fill in all required fields" : "Veuillez remplir tous les champs obligatoires"
      setFormError(errorMessage)
      return
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      const errorMessage = language === "en" ? "Please enter a valid email address" : "Veuillez entrer une adresse email valide"
      setFormError(errorMessage)
      return
    }
    
    
    setFormStatus("submitting")
    setFormError("")

    try {
      // Using FormSubmit.co service - replace YOUR_EMAIL with your actual email
      const form = new FormData()
      form.append("name", formData.name)
      form.append("email", formData.email)
      form.append("subject", formData.subject || "Portfolio Contact Form")
      form.append("message", formData.message)
      form.append("_captcha", "false")
      form.append("_template", "box")

      const response = await fetch("https://formsubmit.co/jmalmohamedamine1@gmail.com", {
        method: "POST",
        body: form,
      })


      if (response.ok) {
        setFormStatus("success")
        // Reset form
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        })
      } else {
        throw new Error("Failed to send message")
      }
    } catch (error) {
      setFormStatus("error")
      setFormError("Failed to send message. Please try again later.")
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">Mohamed Amine Jmal</h1>
          <nav className="hidden md:flex gap-6">
            <button
              onClick={() => scrollToSection("about")}
              className={`text-sm font-medium transition-colors ${
                activeSection === "about" ? "text-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {t("nav.about")}
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className={`text-sm font-medium transition-colors ${
                activeSection === "skills" ? "text-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {t("nav.skills")}
            </button>
            <button
              onClick={() => scrollToSection("certificates")}
              className={`text-sm font-medium transition-colors ${
                activeSection === "certificates" ? "text-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {t("nav.certificates")}
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className={`text-sm font-medium transition-colors ${
                activeSection === "projects" ? "text-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {t("nav.projects")}
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className={`text-sm font-medium transition-colors ${
                activeSection === "testimonials" ? "text-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {t("nav.testimonials")}
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className={`text-sm font-medium transition-colors ${
                activeSection === "contact" ? "text-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {t("nav.contact")}
            </button>
          </nav>
          <div className="flex items-center gap-1 sm:gap-2">
            <ThemeSwitcher />
            <LanguageSwitcher />
            <Button onClick={() => scrollToSection("contact")} size="sm" className="px-2 sm:px-3">
              {t("nav.hireMe")}
            </Button>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="py-20 md:py-32 container mx-auto px-4"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                {t("hero.intro")} <span className="text-primary">Mohamed Amine Jmal</span>
              </h1>
              <p className="text-xl text-muted-foreground">{t("hero.description")}</p>
              <div className="flex gap-4">
                <Button onClick={() => scrollToSection("projects")}>{t("hero.viewWork")}</Button>
                <Button variant="outline" onClick={() => scrollToSection("contact")}>
                  {t("hero.contactMe")}
                </Button>
              </div>
              <div className="flex gap-4 pt-4">
                <a href="https://github.com/medjmalami" className="text-muted-foreground hover:text-foreground">
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/mohamed-amine-jmal-b68965252/"
                  className="text-muted-foreground hover:text-foreground"
                >
                  <Linkedin className="h-5 w-5" />
                </a>

                <a href="mailto:jmalmohamedamine1@gmail.com" className="text-muted-foreground hover:text-foreground">
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative aspect-square max-w-md mx-auto"
            >
              <img
                src="/profile.jpg"
                alt="Mohamed Amine Jmal - Full Stack JavaScript Developer"
                className="rounded-full object-cover w-full h-full"
              />
            </motion.div>
          </div>
        </motion.section>

        {/* About Section */}
        <section id="about" className="py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <SectionTransition>
              <h2 className="text-3xl font-bold mb-12 text-center">{t("about.title")}</h2>
            </SectionTransition>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <SectionTransition delay={0.1}>
                <div className="relative aspect-video w-full flex items-center justify-center bg-muted">
                  <img
                    src="/final.jpg"
                    alt="Anime-style illustration of Mohamed Amine Jmal working on a laptop"
                    loading="lazy"
                    className="rounded-lg object-cover w-full h-full"
                  />
                </div>
              </SectionTransition>
              <SectionTransition delay={0.2}>
                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold">{t("about.journey")}</h3>
                  <p className="text-muted-foreground">{t("about.description1")}</p>
                  <p className="text-muted-foreground">{t("about.description2")}</p>
                  <div>
                    <h4 className="font-medium mb-2">{t("about.education")}</h4>
                    <p className="text-muted-foreground">{t("about.degree")}</p>
                  </div>
                  <Button variant="outline" className="flex items-center gap-2">
                    <a href={en}>{t("about.resume")}</a> <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </SectionTransition>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20">
          <div className="container mx-auto px-4">
            <SectionTransition>
              <h2 className="text-3xl font-bold mb-12 text-center">{t("skills.title")}</h2>
            </SectionTransition>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <SectionTransition delay={0.1}>
                <Card className="h-full flex flex-col">
                  <CardContent className="pt-6 flex-1 flex flex-col">
                    <div className="flex items-center gap-2 mb-4">
                      <Code className="h-5 w-5 text-muted-foreground" />
                      <h3 className="text-xl font-semibold">{t("skills.frontend")}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2 flex-1">
                      <Badge>React</Badge>
                      <Badge>Next.js</Badge>
                      <Badge>JavaScript</Badge>
                      <Badge>TypeScript</Badge>
                      <Badge>HTML5</Badge>
                      <Badge>CSS</Badge>
                      <Badge>Tailwind</Badge>
                      <Badge>Bootstrap</Badge>
                      <Badge>jQuery</Badge>
                      <Badge>Redux</Badge>
                    </div>
                  </CardContent>
                </Card>
              </SectionTransition>
              <SectionTransition delay={0.2}>
                <Card className="h-full flex flex-col">
                  <CardContent className="pt-6 flex-1 flex flex-col">
                    <div className="flex items-center gap-2 mb-4">
                      <Server className="h-5 w-5 text-muted-foreground" />
                      <h3 className="text-xl font-semibold">{t("skills.backend")}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2 flex-1">
                      <Badge>Node.js</Badge>
                      <Badge>Express</Badge>
                      <Badge>Hono</Badge>
                      <Badge>Fastify</Badge>
                      <Badge>Nest.js</Badge>
                      <Badge>REST APIs</Badge>
                      <Badge>Socket.io</Badge>
                      <Badge>WebSocket</Badge>
                      <Badge>OAuth</Badge>
                      <Badge>PHP</Badge>
                      <Badge>Java</Badge>
                      <Badge>Python</Badge>
                      <Badge>C</Badge>
                    </div>
                  </CardContent>
                </Card>
              </SectionTransition>
              <SectionTransition delay={0.3}>
                <Card className="h-full flex flex-col">
                  <CardContent className="pt-6 flex-1 flex flex-col">
                    <div className="flex items-center gap-2 mb-4">
                      <Database className="h-5 w-5 text-muted-foreground" />
                      <h3 className="text-xl font-semibold">{t("skills.database")}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2 flex-1">
                      <Badge>MongoDB</Badge>
                      <Badge>PostgreSQL</Badge>
                      <Badge>MySQL</Badge>
                      <Badge>Redis</Badge>
                      <Badge>SQL</Badge>
                      <Badge>Amazon S3</Badge>
                      <Badge>Docker</Badge>
                      <Badge>Git</Badge>
                      <Badge>GitHub</Badge>
                      <Badge>Linux</Badge>
                    </div>
                  </CardContent>
                </Card>
              </SectionTransition>
            </div>
          </div>
        </section>

        {/* Certificates Section */}
        <section id="certificates" className="py-20">
          <div className="container mx-auto px-4">
            <SectionTransition>
              <h2 className="text-3xl font-bold mb-12 text-center">{t("certificates.title")}</h2>
            </SectionTransition>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <SectionTransition delay={0.1}>
                <Card className="overflow-hidden">
                  <div className="relative aspect-video w-full flex items-center justify-center bg-muted">
                    <img
                      src="/javascript.png"
                      alt="JavaScript Algorithms and Data Structures Certificate from freeCodeCamp"
                      loading="lazy"
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{t("certificates.javascript.name")}</h3>
                    <p className="text-muted-foreground mb-4">freeCodeCamp</p>
                    <Button size="sm" variant="outline" className="flex items-center gap-1">
                      <ExternalLink className="h-4 w-4" /> <a href="https://www.freecodecamp.org/certification/Mohamed-Amine-Jmal/javascript-algorithms-and-data-structures-v8">{t("certificates.view")}</a>
                    </Button>
                  </CardContent>
                </Card>
              </SectionTransition>

              <SectionTransition delay={0.2}>
                <Card className="overflow-hidden">
                  <div className="relative aspect-video w-full flex items-center justify-center bg-muted">
                    <img
                      src="/frontend.png"
                      alt="Front End Development Libraries Certificate from freeCodeCamp"
                      loading="lazy"
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{t("certificates.frontend.name")}</h3>
                    <p className="text-muted-foreground mb-4">freeCodeCamp</p>
                    <Button size="sm" variant="outline" className="flex items-center gap-1">
                      <ExternalLink className="h-4 w-4" /> <a href="https://www.freecodecamp.org/certification/Mohamed-Amine-Jmal/front-end-development-libraries">{t("certificates.view")}</a> 
                    </Button>
                  </CardContent>
                </Card>
              </SectionTransition>

              <SectionTransition delay={0.3}>
                <Card className="overflow-hidden">
                  <div className="relative aspect-video w-full flex items-center justify-center bg-muted">
                    <img
                      src="/backend.png"
                      alt="Back End Development and APIs Certificate from freeCodeCamp"
                      loading="lazy"
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{t("certificates.backend.name")}</h3>
                    <p className="text-muted-foreground mb-4">freeCodeCamp</p>
                    <Button size="sm" variant="outline" className="flex items-center gap-1">
                      <ExternalLink className="h-4 w-4" /><a href="https://www.freecodecamp.org/certification/Mohamed-Amine-Jmal/back-end-development-and-apis">{t("certificates.view")}</a> 
                    </Button>
                  </CardContent>
                </Card>
              </SectionTransition>

              <SectionTransition delay={0.4}>
                <Card className="overflow-hidden">
                  <div className="relative aspect-video w-full flex items-center justify-center bg-muted">
                    <img
                      src="/quality.png"
                      alt="Quality Assurance Certificate from freeCodeCamp"
                      loading="lazy"
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{t("certificates.quality.name")}</h3>
                    <p className="text-muted-foreground mb-4">freeCodeCamp</p>
                    <Button size="sm" variant="outline" className="flex items-center gap-1">
                      <ExternalLink className="h-4 w-4" /><a href="https://www.freecodecamp.org/certification/Mohamed-Amine-Jmal/quality-assurance-v7">{t("certificates.view")}</a> 
                    </Button>
                  </CardContent>
                </Card>
              </SectionTransition>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <SectionTransition>
              <h2 className="text-3xl font-bold mb-12 text-center">{t("projects.title")}</h2>
            </SectionTransition>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <SectionTransition delay={0.1}>
                <Card className="overflow-hidden">
                  <div className="relative aspect-video w-full flex items-center justify-center bg-muted">
                    <img
                      src="/ecommerce-front.png"
                      alt="E-Commerce Website project - responsive online store built with HTML, CSS, and JavaScript"
                      loading="lazy"
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{t("projects.ecommerce.title")}</h3>
                    <p className="text-muted-foreground mb-4">{t("projects.ecommerce.description")}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="outline">HTML</Badge>
                      <Badge variant="outline">CSS</Badge>
                      <Badge variant="outline">JavaScript</Badge>
                    </div>
                    <div className="flex gap-4">
                      <Button size="sm" variant="outline" className="flex items-center gap-1">
                        <ExternalLink className="h-4 w-4" />{" "}
                        <a href="https://ecommerce-front-jmal.netlify.app/">{t("projects.liveDemo")}</a>
                      </Button>
                      <Button size="sm" variant="outline" className="flex items-center gap-1">
                        <Github className="h-4 w-4" /><a href="https://github.com/medjmalami/Ecommerce-front">{t("projects.code")}</a> 
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </SectionTransition>

              <SectionTransition delay={0.2}>
                <Card className="overflow-hidden">
                  <div className="relative aspect-video w-full flex items-center justify-center bg-muted">
                    <img
                      src="/3dModel.png"
                      alt="3D Models Showcase project - interactive 3D viewer built with React and Three.js"
                      loading="lazy"
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{t("projects.3d.title")}</h3>
                    <p className="text-muted-foreground mb-4">{t("projects.3d.description")}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="outline">React</Badge>
                      <Badge variant="outline">Express</Badge>
                      <Badge variant="outline">PostgreSQL</Badge>
                      <Badge variant="outline">Three.js</Badge>
                    </div>
                    <div className="flex gap-4">
                      <Button size="sm" variant="outline" className="flex items-center gap-1">
                        <ExternalLink className="h-4 w-4" />{" "}
                        <a href="https://3d-models-proj-jmal.vercel.app/">{t("projects.liveDemo")}</a>
                      </Button>
                      <Button size="sm" variant="outline" className="flex items-center gap-1">
                        <Github className="h-4 w-4" /><a href="https://github.com/medjmalami/3d-models-proj">{t("projects.code")}</a> 
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </SectionTransition>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-20">
          <div className="container mx-auto px-4">
            <SectionTransition>
              <h2 className="text-3xl font-bold mb-12 text-center">{t("testimonials.title")}</h2>
            </SectionTransition>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <SectionTransition delay={0.1}>
                <Card className="h-full flex flex-col">
                  <CardContent className="p-6 flex-1 flex flex-col">
                    <div className="mb-4">
                      <h3 className="font-semibold">{t("testimonials.client1.name")}</h3>
                      <p className="text-sm text-muted-foreground">{t("testimonials.client1.position")}</p>
                    </div>
                    <p className="text-muted-foreground italic flex-1">{t("testimonials.client1.text")}</p>
                  </CardContent>
                </Card>
              </SectionTransition>

              <SectionTransition delay={0.2}>
                <Card className="h-full flex flex-col">
                  <CardContent className="p-6 flex-1 flex flex-col">
                    <div className="mb-4">
                      <h3 className="font-semibold">{t("testimonials.client2.name")}</h3>
                      <p className="text-sm text-muted-foreground">{t("testimonials.client2.position")}</p>
                    </div>
                    <p className="text-muted-foreground italic flex-1">{t("testimonials.client2.text")}</p>
                  </CardContent>
                </Card>
              </SectionTransition>

              <SectionTransition delay={0.3}>
                <Card className="h-full flex flex-col">
                  <CardContent className="p-6 flex-1 flex flex-col">
                    <div className="mb-4">
                      <h3 className="font-semibold">{t("testimonials.client3.name")}</h3>
                      <p className="text-sm text-muted-foreground">{t("testimonials.client3.position")}</p>
                    </div>
                    <p className="text-muted-foreground italic flex-1">{t("testimonials.client3.text")}</p>
                  </CardContent>
                </Card>
              </SectionTransition>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <SectionTransition>
              <h2 className="text-3xl font-bold mb-12 text-center">{t("contact.title")}</h2>
            </SectionTransition>
            <div className="grid md:grid-cols-2 gap-12">
              <SectionTransition delay={0.1}>
                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold">{t("contact.info")}</h3>
                  <p className="text-muted-foreground">{t("contact.description")}</p>
                  <div className="space-y-4">
                    <a
                      href="mailto:jmalmohamedamine1@gmail.com"
                      className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
                    >
                      <Mail className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                      <span className="break-all">jmalmohamedamine1@gmail.com</span>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/mohamed-amine-jmal-b68965252/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
                    >
                      <Linkedin className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                      <span className="break-all">linkedin.com/in/mohamed-amine-jmal</span>
                    </a>

                    <a
                      href="https://github.com/medjmalami"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
                    >
                      <Github className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                      <span className="break-all">github.com/medjmalami</span>
                    </a>
                  </div>
                </div>
              </SectionTransition>
              <SectionTransition delay={0.2}>
                <div>
                  {formStatus === "success" ? (
                    <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border border-green-200 dark:border-green-800">
                      <div className="flex items-center gap-2 text-green-600 dark:text-green-400 mb-2">
                        <CheckCircle className="h-5 w-5" />
                        <h3 className="font-medium">Message Sent Successfully!</h3>
                      </div>
                      <p className="text-muted-foreground">
                        Thank you for reaching out. I'll get back to you as soon as possible.
                      </p>
                      <Button className="mt-4" variant="outline" onClick={() => setFormStatus("idle")}>
                        Send Another Message
                      </Button>
                    </div>
                  ) : (
                    <form className="space-y-4" onSubmit={handleSubmit}>
                      {formError && (
                        <div className="bg-red-50 dark:bg-red-900/20 p-3 rounded-md border border-red-200 dark:border-red-800 flex items-start gap-2 text-red-600 dark:text-red-400">
                          <AlertCircle className="h-5 w-5 mt-0.5 flex-shrink-0" />
                          <span>{formError}</span>
                        </div>
                      )}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label htmlFor="name" className="text-sm font-medium">
                            {t("contact.name")} <span className="text-red-500">*</span>
                          </label>
                          <input
                            id="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border rounded-md bg-background"
                            placeholder={t("contact.namePlaceholder")}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="email" className="text-sm font-medium">
                            {t("contact.email")} <span className="text-red-500">*</span>
                          </label>
                          <input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border rounded-md bg-background"
                            placeholder={t("contact.emailPlaceholder")}
                            required
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="subject" className="text-sm font-medium">
                          {t("contact.subject")}
                        </label>
                        <input
                          id="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border rounded-md bg-background"
                          placeholder={t("contact.subjectPlaceholder")}
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium">
                          {t("contact.message")} <span className="text-red-500">*</span>
                        </label>
                        <textarea
                          id="message"
                          rows={4}
                          value={formData.message}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border rounded-md bg-background"
                          placeholder={t("contact.messagePlaceholder")}
                          required
                        />
                      </div>
                      <Button type="submit" className="w-full" disabled={formStatus === "submitting"}>
                        {formStatus === "submitting" ? "Sending..." : t("contact.send")}
                      </Button>
                    </form>
                  )}
                </div>
              </SectionTransition>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h2 className="text-xl font-bold">Mohamed Amine Jmal</h2>
              <p className="text-primary-foreground/70 mt-2">
                © {new Date().getFullYear()} {t("footer.rights")}
              </p>
            </div>
            <div className="flex gap-6">
              <a
                href="https://github.com/medjmalami"
                className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/mohamed-amine-jmal-b68965252/"
                className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>

              <a
                href="mailto:jmalmohamedamine1@gmail.com"
                className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
