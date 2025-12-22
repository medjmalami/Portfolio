"use client"

import type React from "react"
import { useState, type FormEvent } from "react"
import { Github, Linkedin, Mail, MapPin, CheckCircle, AlertCircle } from "lucide-react"
import { Button } from "../ui/button"
import { SectionTransition } from "../section-transition"
import { useTranslations } from "../../hooks/use-translations"

export function ContactSection() {
  const { t, language } = useTranslations()

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")
  const [formError, setFormError] = useState("")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }))
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    if (!formData.name || !formData.email || !formData.message) {
      const errorMessage =
        language === "en"
          ? "Please fill in all required fields"
          : "Veuillez remplir tous les champs obligatoires"
      setFormError(errorMessage)
      return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      const errorMessage =
        language === "en"
          ? "Please enter a valid email address"
          : "Veuillez entrer une adresse email valide"
      setFormError(errorMessage)
      return
    }

    setFormStatus("submitting")
    setFormError("")

    try {
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
                <div className="flex items-center gap-3 text-foreground">
                  <MapPin className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                  <span>{t("contact.location")}</span>
                </div>
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
  )
}
