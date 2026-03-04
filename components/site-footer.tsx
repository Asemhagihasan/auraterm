import Link from "next/link";
import { services } from "@/data/services";
import { siteConfig } from "@/lib/site-config";
import { Separator } from "@/components/ui/separator";

export function SiteFooter() {
  return (
    <footer className="bg-navy-600 dark:bg-navy-900 text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-3">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-lg font-bold tracking-tight text-white"
            >
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-white text-navy-600 text-sm font-black">
                A
              </span>
              {siteConfig.name}
            </Link>
            <p className="text-sm leading-relaxed text-navy-200">
              {siteConfig.description}
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-white">
              Services
            </h3>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s.id}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-sm text-navy-200 transition-colors hover:text-white"
                  >
                    {s.serviceTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-white">
              Company
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services"
                  className="text-sm text-navy-200 transition-colors hover:text-white"
                >
                  All Services
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-navy-200 transition-colors hover:text-white"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-white">
              Contact
            </h3>
            <address className="space-y-2 not-italic">
              <p className="text-sm text-navy-200">{siteConfig.address}</p>
              <p>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="inline-flex items-center gap-1.5 text-sm text-navy-200 transition-colors hover:text-white"
                >
                  <span className="text-red-accent-light">✉</span>
                  {siteConfig.email}
                </a>
              </p>
              <p>
                <a
                  href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                  className="inline-flex items-center gap-1.5 text-sm text-navy-200 transition-colors hover:text-white"
                >
                  <span className="text-red-accent-light">✆</span>
                  {siteConfig.phone}
                </a>
              </p>
            </address>
          </div>
        </div>

        <Separator className="my-8 bg-navy-500" />

        <p className="text-center text-xs text-navy-300">
          &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
