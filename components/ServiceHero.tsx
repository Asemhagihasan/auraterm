"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ServiceItem } from "@/data/types";
import { serviceIconMap } from "@/lib/service-icons";
import { AnimateIn } from "@/components/animate-in";

interface ServiceHeroProps {
  service: ServiceItem;
}

export function ServiceHero({ service }: ServiceHeroProps) {
  const Icon = serviceIconMap[service.serviceKey] ?? serviceIconMap.default;

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 via-background to-background">
      {/* Decorative grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30"
      />

      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
        <AnimateIn direction="up" delay={0}>
          <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
            <Icon className="h-8 w-8" />
          </div>
        </AnimateIn>

        <AnimateIn direction="up" delay={0.1}>
          <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            {service.serviceTitle}
          </h1>
        </AnimateIn>

        <AnimateIn direction="up" delay={0.2}>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
            {service.shortDescription}
          </p>
        </AnimateIn>

        <AnimateIn direction="up" delay={0.3}>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link href="/contact">Request a Quote</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/services">All Services</Link>
            </Button>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
