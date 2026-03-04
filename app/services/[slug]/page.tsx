import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import {
  services,
  getServiceBySlug,
  getAllServiceSlugs,
} from "@/data/services";
import { ServiceHero } from "@/components/ServiceHero";
import { ServiceSchema } from "@/components/ServiceSchema";
import { AnimateIn } from "@/components/animate-in";
import { StaggerChildren, StaggerItem } from "@/components/stagger-children";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ArrowRight,
  Beaker,
  Factory,
  Settings,
  ClipboardList,
  ImageIcon,
  Phone,
} from "lucide-react";

/* ────────────────────────────── Static Params ────────────────────────────── */

export async function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

/* ──────────────────────────────── Metadata ────────────────────────────────── */

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  return {
    title: service.seoTitle,
    description: service.seoDescription,
    openGraph: {
      title: service.seoTitle,
      description: service.seoDescription,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: service.seoTitle,
      description: service.seoDescription,
    },
  };
}

/* ────────────────────────────── Section Components ───────────────────────── */

function SectionHeading({
  icon: Icon,
  title,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
}) {
  return (
    <div className="mb-6 flex items-center gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-navy-50 text-navy-600 dark:bg-navy-800 dark:text-navy-300">
        <Icon className="h-5 w-5" />
      </div>
      <h2 className="text-2xl font-bold tracking-tight text-foreground">
        {title}
      </h2>
    </div>
  );
}

/* ────────────────────────────── Page Component ───────────────────────────── */

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  // Other services for "see also"
  const otherServices = services.filter((s) => s.id !== service.id);

  return (
    <article>
      <ServiceSchema service={service} />

      {/* 1. Hero */}
      <ServiceHero service={service} />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* 2. What is this service */}
        <section className="py-16 sm:py-20">
          <AnimateIn direction="up">
            <SectionHeading icon={Beaker} title="What is This Service?" />
            <p className="max-w-3xl text-lg leading-relaxed text-muted-foreground">
              {service.longDescription}
            </p>
          </AnimateIn>
        </section>

        <Separator />

        {/* 3. Methods */}
        <section className="py-16 sm:py-20">
          <AnimateIn direction="up">
            <SectionHeading icon={Settings} title="Methods" />
          </AnimateIn>
          <StaggerChildren className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {service.mainMethods.map((method) => (
              <StaggerItem key={method}>
                <Card className="border-border">
                  <CardContent className="flex items-center gap-3 p-5">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-navy-50 dark:bg-navy-800 text-xs font-bold text-red-accent">
                      ✓
                    </span>
                    <span className="text-sm font-medium">{method}</span>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </section>

        <Separator />

        {/* 4 + 5. Tabs: Applications & Industries */}
        <section className="py-16 sm:py-20">
          <AnimateIn direction="up">
            <SectionHeading icon={Factory} title="Applications & Industries" />
          </AnimateIn>

          <AnimateIn direction="up" delay={0.1}>
            <Tabs defaultValue="applications" className="mt-2">
              <TabsList>
                <TabsTrigger value="applications">
                  Typical Applications
                </TabsTrigger>
                <TabsTrigger value="industries">Industries Served</TabsTrigger>
              </TabsList>

              <TabsContent value="applications" className="mt-6">
                <div className="flex flex-wrap gap-2">
                  {service.typicalApplications.map((app) => (
                    <Badge
                      key={app}
                      variant="secondary"
                      className="px-3 py-1.5 text-sm"
                    >
                      {app}
                    </Badge>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="industries" className="mt-6">
                <div className="flex flex-wrap gap-2">
                  {service.industries.map((ind) => (
                    <Badge
                      key={ind}
                      variant="outline"
                      className="px-3 py-1.5 text-sm"
                    >
                      {ind}
                    </Badge>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </AnimateIn>
        </section>

        <Separator />

        {/* 6 + 7. Accordion: Equipment & Deliverables */}
        <section className="py-16 sm:py-20">
          <AnimateIn direction="up">
            <SectionHeading
              icon={ClipboardList}
              title="Equipment & Deliverables"
            />
          </AnimateIn>

          <AnimateIn direction="up" delay={0.1}>
            <Accordion
              type="multiple"
              className="max-w-2xl"
              defaultValue={["equipment", "deliverables"]}
            >
              <AccordionItem value="equipment">
                <AccordionTrigger className="text-base font-semibold">
                  Equipment Used
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="list-inside list-disc space-y-1 text-muted-foreground">
                    {service.equipmentUsed.map((eq) => (
                      <li key={eq}>{eq}</li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="deliverables">
                <AccordionTrigger className="text-base font-semibold">
                  Deliverables &amp; Reports
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="list-inside list-disc space-y-1 text-muted-foreground">
                    {service.deliverables.map((d) => (
                      <li key={d}>{d}</li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </AnimateIn>
        </section>

        <Separator />

        {/* 8. Image gallery (placeholder using imageIdeas) */}
        <section className="py-16 sm:py-20">
          <AnimateIn direction="up">
            <SectionHeading icon={ImageIcon} title="Gallery" />
          </AnimateIn>

          <StaggerChildren className="grid gap-4 sm:grid-cols-2">
            {service.imageIdeas.map((idea) => (
              <StaggerItem key={idea}>
                <div className="relative flex aspect-video items-center justify-center overflow-hidden rounded-xl border border-border bg-secondary/50 dark:bg-secondary/30">
                  <p className="px-6 text-center text-sm text-muted-foreground italic">
                    {idea}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </section>

        <Separator />

        {/* 9. CTA */}
        <section className="py-16 sm:py-20">
          <AnimateIn direction="up">
            <Card className="overflow-hidden border-red-accent/20 bg-linear-to-br from-navy-600 to-navy-700">
              <CardContent className="flex flex-col items-center gap-6 p-8 text-center sm:p-12">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-red-accent text-white">
                  <Phone className="h-7 w-7" />
                </div>
                <CardTitle className="text-2xl text-white sm:text-3xl">
                  Need {service.serviceTitle}?
                </CardTitle>
                <p className="max-w-xl text-navy-200">
                  Our certified engineers are ready to help. Get in touch for a
                  free consultation, cost estimate or to schedule an on-site
                  visit.
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  <Button
                    asChild
                    size="lg"
                    className="bg-red-accent text-white hover:bg-red-accent-dark"
                  >
                    <Link href="/contact">
                      Request a Quote
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="border-navy-400/50 bg-transparent text-white hover:bg-navy-500/50"
                  >
                    <Link href="/services">View All Services</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </AnimateIn>
        </section>

        {/* Related services */}
        {otherServices.length > 0 && (
          <>
            <Separator />
            <section className="py-16 sm:py-20">
              <AnimateIn direction="up">
                <h2 className="mb-8 text-2xl font-bold tracking-tight text-foreground">
                  Other Services
                </h2>
              </AnimateIn>
              <StaggerChildren className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {otherServices.slice(0, 3).map((s) => (
                  <StaggerItem key={s.id}>
                    <Link href={`/services/${s.slug}`} className="group block">
                      <Card className="border-border transition-colors group-hover:border-navy-300 dark:group-hover:border-navy-500">
                        <CardHeader className="pb-2">
                          <CardTitle className="text-base">
                            {s.serviceTitle}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-muted-foreground line-clamp-2">
                            {s.shortDescription}
                          </p>
                        </CardContent>
                      </Card>
                    </Link>
                  </StaggerItem>
                ))}
              </StaggerChildren>
            </section>
          </>
        )}
      </div>
    </article>
  );
}
