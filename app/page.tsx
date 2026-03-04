import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ServiceGrid } from "@/components/ServiceGrid";
import { AnimateIn } from "@/components/animate-in";
import { services } from "@/data/services";
import { ArrowRight, ShieldCheck, Zap, Award, Clock } from "lucide-react";

const highlights = [
  {
    icon: ShieldCheck,
    title: "Certified & Reliable",
    description:
      "All testing and inspection services comply with international standards and industry best practices.",
  },
  {
    icon: Zap,
    title: "Fast On-Site Service",
    description:
      "Mobile teams equipped for rapid deployment. Minimise downtime with on-location testing and reporting.",
  },
  {
    icon: Award,
    title: "Expert Engineers",
    description:
      "Our technicians hold advanced certifications and decades of combined field experience.",
  },
  {
    icon: Clock,
    title: "24 / 7 Availability",
    description:
      "Critical systems can't wait. We offer round-the-clock emergency testing and inspection services.",
  },
] as const;

export default function HomePage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative overflow-hidden bg-navy-600">
        {/* Gradient background */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0"
          style={{
            background:
              "linear-gradient(135deg, #142a4a 0%, #1a365d 50%, #2d5185 100%)",
          }}
        />

        <div className="relative z-10 mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
          <div className="mx-auto max-w-3xl text-center">
            <AnimateIn direction="up" delay={0}>
              <Badge
                variant="outline"
                className="mb-6 bg-navy-500/50 text-navy-100 border-navy-400/30 text-xs uppercase tracking-wider"
              >
                Industrial Testing &amp; Inspection
              </Badge>
            </AnimateIn>

            <AnimateIn direction="up" delay={0.1}>
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Precision Leak Detection &{" "}
                <span className="text-red-accent-light">
                  Industrial Services
                </span>
              </h1>
            </AnimateIn>

            <AnimateIn direction="up" delay={0.2}>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-navy-200">
                From helium leak testing to high-pressure cleaning, we deliver
                certified, on-site industrial services that keep your operations
                safe, efficient and compliant.
              </p>
            </AnimateIn>

            <AnimateIn direction="up" delay={0.3}>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-red-accent text-white hover:bg-red-accent-dark"
                >
                  <Link href="/services">
                    Explore Services
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-navy-400/50 bg-transparent text-white hover:bg-navy-500/50"
                >
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </AnimateIn>
          </div>

          {/* Stats bar */}
          <AnimateIn direction="up" delay={0.4}>
            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-2 gap-4 rounded-2xl border border-navy-500/50 bg-navy-700/50 p-6 backdrop-blur sm:grid-cols-4">
              {[
                { value: "6+", label: "Service Lines" },
                { value: "24h", label: "Response Time" },
                { value: "100%", label: "Certified" },
                { value: "On-Site", label: "Deployment" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-2xl font-bold text-white">{stat.value}</p>
                  <p className="mt-1 text-xs text-navy-300">{stat.label}</p>
                </div>
              ))}
            </div>
          </AnimateIn>
        </div>
      </section>

      <Separator />

      {/* ─── WHY CHOOSE US ─── */}
      <section className="bg-secondary/50 dark:bg-secondary/30 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimateIn direction="up" className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Why Choose AuraTerm
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              We combine cutting-edge equipment with decades of engineering
              expertise to deliver results you can trust.
            </p>
          </AnimateIn>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((item, i) => (
              <AnimateIn key={item.title} direction="up" delay={i * 0.08}>
                <article className="flex flex-col items-center text-center rounded-xl border border-border bg-card p-6 sm:items-start sm:text-left">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-navy-600 text-white">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-base font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </article>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      <Separator />

      {/* ─── SERVICES GRID ─── */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimateIn direction="up" className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Our Services
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Comprehensive industrial testing, inspection and cleaning —
              powered by {services.length} specialised service lines.
            </p>
          </AnimateIn>

          <ServiceGrid />
        </div>
      </section>

      <Separator />

      {/* ─── CTA ─── */}
      <section className="bg-linear-to-br from-navy-600 to-navy-700 py-20 text-white sm:py-28">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <AnimateIn direction="up">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to Get Started?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-navy-200">
              Contact our team for a free consultation, rapid quote or to
              schedule on-site testing today.
            </p>
          </AnimateIn>
          <AnimateIn direction="up" delay={0.15}>
            <div className="mt-8">
              <Button
                asChild
                size="lg"
                className="bg-red-accent text-white hover:bg-red-accent-dark font-semibold"
              >
                <Link href="/contact">
                  Get a Free Quote
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
