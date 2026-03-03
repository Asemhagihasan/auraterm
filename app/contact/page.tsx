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
      <section className="relative overflow-hidden border-b border-border/60 bg-gradient-to-b from-primary/5 via-background to-background">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"
        />
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
          <AnimateIn direction="up">
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
              Get in Touch
            </p>
            <h1 className="max-w-2xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Let&apos;s Discuss Your Project
            </h1>
          </AnimateIn>
          <AnimateIn direction="up" delay={0.1}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
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
                <div className="rounded-2xl border border-border/60 bg-card p-6 sm:p-10">
                  <h2 className="mb-1 text-xl font-semibold">
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
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                          <Mail className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-muted-foreground">
                            Email
                          </p>
                          <a
                            href={`mailto:${siteConfig.email}`}
                            className="inline-flex items-center gap-1 text-foreground transition-colors hover:text-primary"
                          >
                            {siteConfig.email}
                            <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
                          </a>
                        </div>
                      </li>

                      <li className="group flex items-start gap-4">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                          <Phone className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-muted-foreground">
                            Phone
                          </p>
                          <a
                            href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                            className="inline-flex items-center gap-1 text-foreground transition-colors hover:text-primary"
                          >
                            {siteConfig.phone}
                            <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
                          </a>
                        </div>
                      </li>

                      <li className="flex items-start gap-4">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
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
                          className="rounded-lg border border-border/50 bg-muted/30 px-4 py-3"
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
