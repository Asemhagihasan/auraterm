import type { Metadata } from "next";
import { AnimateIn } from "@/components/animate-in";
import { ContactForm } from "@/components/contact-form";
import { Separator } from "@/components/ui/separator";
import { siteConfig } from "@/lib/site-config";
import { Mail, Phone, MapPin, Clock, ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with AuraTerm for industrial leak detection, testing and inspection services. Request a free quote today.",
  openGraph: {
    title: "Contact Us | AuraTerm",
    description:
      "Get in touch with AuraTerm for industrial leak detection, testing and inspection services.",
  },
};

export default function ContactPage() {
  return (
    <>
      {/* ─── Hero ─── */}
      <section className="relative overflow-hidden bg-navy-600">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0"
          style={{
            background:
              "linear-gradient(135deg, #142a4a 0%, #1a365d 50%, #2d5185 100%)",
          }}
        />
        <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
          <AnimateIn direction="up">
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-red-accent-light">
              Get in Touch
            </p>
            <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Let&apos;s Discuss Your Project
            </h1>
          </AnimateIn>
          <AnimateIn direction="up" delay={0.1}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-navy-200">
              Whether you need a rapid leak test, scheduled inspection or a full
              service quote — fill out the form and our engineers will get back
              to you within 24 hours.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* ─── Main: Form + Sidebar ─── */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
            {/* Form — takes 3/5 */}
            <div className="lg:col-span-3">
              <AnimateIn direction="up">
                <div className="rounded-2xl border border-border bg-card p-6 sm:p-10">
                  <h2 className="mb-1 text-xl font-semibold text-foreground">
                    Send Us a Message
                  </h2>
                  <p className="mb-8 text-sm text-muted-foreground">
                    All fields marked are optional unless noted. We never share
                    your information.
                  </p>
                  <ContactForm />
                </div>
              </AnimateIn>
            </div>

            {/* Sidebar — takes 2/5 */}
            <aside className="lg:col-span-2">
              <AnimateIn direction="up" delay={0.1}>
                <div className="space-y-10">
                  {/* Direct contact */}
                  <div>
                    <h3 className="mb-5 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                      Direct Contact
                    </h3>
                    <ul className="space-y-5">
                      <li className="group flex items-start gap-4">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-navy-50 text-navy-600 dark:bg-navy-800 dark:text-navy-300">
                          <Mail className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-muted-foreground">
                            Email
                          </p>
                          <a
                            href={`mailto:${siteConfig.email}`}
                            className="inline-flex items-center gap-1 text-foreground transition-colors hover:text-navy-600"
                          >
                            {siteConfig.email}
                            <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
                          </a>
                        </div>
                      </li>

                      <li className="group flex items-start gap-4">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-navy-50 text-navy-600 dark:bg-navy-800 dark:text-navy-300">
                          <Phone className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-muted-foreground">
                            Phone
                          </p>
                          <a
                            href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                            className="inline-flex items-center gap-1 text-foreground transition-colors hover:text-navy-600"
                          >
                            {siteConfig.phone}
                            <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
                          </a>
                        </div>
                      </li>

                      <li className="flex items-start gap-4">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-navy-50 text-navy-600 dark:bg-navy-800 dark:text-navy-300">
                          <MapPin className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-muted-foreground">
                            Office
                          </p>
                          <address className="not-italic text-foreground">
                            {siteConfig.address}
                          </address>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <Separator />

                  {/* Availability */}
                  <div>
                    <h3 className="mb-5 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                      Availability
                    </h3>
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400">
                        <Clock className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">
                          24 / 7 Emergency
                        </p>
                        <p className="mt-1 text-sm text-muted-foreground">
                          Critical system failures can&apos;t wait. Our
                          emergency response team is available around the clock
                          for urgent testing and inspection.
                        </p>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  {/* Quick stats */}
                  <div>
                    <h3 className="mb-5 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                      Why AuraTerm
                    </h3>
                    <dl className="grid grid-cols-2 gap-4">
                      {[
                        { stat: "6+", label: "Service Lines" },
                        { stat: "24h", label: "Response Time" },
                        { stat: "100%", label: "Certified" },
                        { stat: "On-Site", label: "Deployment" },
                      ].map((item) => (
                        <div
                          key={item.label}
                          className="rounded-lg border border-border bg-secondary/50 dark:bg-secondary/30 px-4 py-3"
                        >
                          <dt className="text-2xl font-bold text-primary">
                            {item.stat}
                          </dt>
                          <dd className="mt-0.5 text-xs text-muted-foreground">
                            {item.label}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                </div>
              </AnimateIn>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
