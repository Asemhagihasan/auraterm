import type { Metadata } from "next";
import { ServiceGrid } from "@/components/ServiceGrid";
import { AnimateIn } from "@/components/animate-in";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Explore our full range of industrial leak detection, testing, visual inspection and high-pressure cleaning services.",
  openGraph: {
    title: "Our Services | AuraTerm",
    description:
      "Explore our full range of industrial leak detection, testing, visual inspection and high-pressure cleaning services.",
  },
};

export default function ServicesPage() {
  return (
    <>
      {/* Header */}
      <section className="border-b bg-muted/30 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <AnimateIn direction="up">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Industrial Services
            </h1>
          </AnimateIn>
          <AnimateIn direction="up" delay={0.1}>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              From precision leak detection to heavy-duty cleaning, every
              service is backed by certified engineers and industry-leading
              equipment.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Grid */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ServiceGrid />
        </div>
      </section>
    </>
  );
}
