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
    <section className="relative overflow-hidden bg-navy-600">
      {/* Gradient overlay */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            "linear-gradient(135deg, #142a4a 0%, #1a365d 50%, #2d5185 100%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
        <AnimateIn direction="up" delay={0}>
          <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-navy-500/50 text-white">
            <Icon className="h-8 w-8" />
          </div>
        </AnimateIn>

        <AnimateIn direction="up" delay={0.1}>
          <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {service.serviceTitle}
          </h1>
        </AnimateIn>

        <AnimateIn direction="up" delay={0.2}>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-navy-200 sm:text-xl">
            {service.shortDescription}
          </p>
        </AnimateIn>

        <AnimateIn direction="up" delay={0.3}>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button
              asChild
              size="lg"
              className="bg-red-accent text-white hover:bg-red-accent-dark"
            >
              <Link href="/contact">Request a Quote</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-navy-400/50 bg-transparent text-white hover:bg-navy-500/50"
            >
              <Link href="/services">All Services</Link>
            </Button>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
