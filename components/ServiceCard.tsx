"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ServiceItem } from "@/data/types";
import { serviceIconMap } from "@/lib/service-icons";
import { AnimatedCard } from "@/components/animated-card";

interface ServiceCardProps {
  service: ServiceItem;
  index: number;
}

export function ServiceCard({ service, index }: ServiceCardProps) {
  const Icon = serviceIconMap[service.serviceKey] ?? serviceIconMap.default;

  return (
    <AnimatedCard index={index}>
      <Link
        href={`/services/${service.slug}`}
        className="group block h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-xl"
        aria-label={`Learn more about ${service.serviceTitle}`}
      >
        <Card className="relative flex h-full flex-col overflow-hidden border border-border/50 bg-card transition-all duration-300 group-hover:border-primary/30 group-hover:shadow-lg group-hover:shadow-primary/5">
          <CardHeader className="pb-3">
            <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
              <Icon className="h-6 w-6" />
            </div>
            <CardTitle className="text-lg leading-snug">
              {service.serviceTitle}
            </CardTitle>
          </CardHeader>

          <CardContent className="flex-1">
            <p className="text-sm leading-relaxed text-muted-foreground">
              {service.shortDescription}
            </p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {service.industries.slice(0, 3).map((industry) => (
                <Badge
                  key={industry}
                  variant="secondary"
                  className="text-xs font-normal"
                >
                  {industry}
                </Badge>
              ))}
              {service.industries.length > 3 && (
                <Badge variant="outline" className="text-xs font-normal">
                  +{service.industries.length - 3}
                </Badge>
              )}
            </div>
          </CardContent>

          <CardFooter className="pt-0">
            <span className="inline-flex items-center gap-1 text-sm font-medium text-primary transition-transform group-hover:translate-x-0.5">
              Learn more
              <ArrowRight className="h-4 w-4" />
            </span>
          </CardFooter>
        </Card>
      </Link>
    </AnimatedCard>
  );
}
