import { ExternalLink } from "lucide-react"
import { Button } from "../ui/button"
import { Card, CardContent } from "../ui/card"
import { SectionTransition } from "../section-transition"
import { useTranslations } from "../../hooks/use-translations"
import { certificates } from "../../data/certificates"

export function CertificatesSection() {
  const { t } = useTranslations()

  return (
    <section id="certificates" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <SectionTransition>
          <h2 className="text-3xl font-bold mb-12 text-center">{t("certificates.title")}</h2>
        </SectionTransition>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certificates.map((certificate, index) => (
            <SectionTransition key={certificate.id} delay={0.1 * (index + 1)}>
              <Card className="overflow-hidden">
                <div className="relative aspect-video w-full flex items-center justify-center bg-muted">
                  <img
                    src={certificate.image}
                    alt={certificate.alt}
                    loading="lazy"
                    className="object-cover w-full h-full"
                    style={{ objectPosition: certificate.objectPosition || "center" }}
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{t(certificate.nameKey)}</h3>
                  <p className="text-muted-foreground mb-4">{certificate.provider}</p>
                  <Button size="sm" variant="outline" className="flex items-center gap-1">
                    <ExternalLink className="h-4 w-4" />
                    <a href={certificate.url}>{t("certificates.view")}</a>
                  </Button>
                </CardContent>
              </Card>
            </SectionTransition>
          ))}
        </div>
      </div>
    </section>
  )
}
