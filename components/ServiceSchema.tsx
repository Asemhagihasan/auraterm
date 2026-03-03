import { ServiceItem } from "@/data/types";

interface ServiceSchemaProps {
  service: ServiceItem;
}

/**
 * Injects JSON-LD structured data for a service page.
 * Rendered server-side, no client JS cost.
 */
export function ServiceSchema({ service }: ServiceSchemaProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.serviceTitle,
    description: service.seoDescription,
    provider: {
      "@type": "Organization",
      name: "AuraTerm",
      url: "https://auraterm.com",
    },
    areaServed: {
      "@type": "Place",
      name: "Worldwide",
    },
    serviceType: service.serviceTitle,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
