import { useEffect } from "react"

type SEOOptions = {
  title: string
  description: string
}

function setMeta(selector: string, attr: string, value: string) {
  const el = document.head.querySelector<HTMLMetaElement>(selector)
  if (el) el.setAttribute(attr, value)
}

export function useSEO({ title, description }: SEOOptions) {
  useEffect(() => {
    document.title = title
    setMeta('meta[name="description"]', "content", description)
    setMeta('meta[property="og:title"]', "content", title)
    setMeta('meta[property="og:description"]', "content", description)
    setMeta('meta[name="twitter:title"]', "content", title)
    setMeta('meta[name="twitter:description"]', "content", description)
  }, [title, description])
}