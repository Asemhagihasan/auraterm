"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";

interface AnimatedCardProps {
  children: React.ReactNode;
  index: number;
}

/**
 * Staggered fade-up card wrapper for service grids.
 * Uses inView detection and respects reduced motion.
 */
export function AnimatedCard({ children, index }: AnimatedCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const prefersReduced = useReducedMotion();

  if (prefersReduced) {
    return <div className="h-full">{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : undefined}
      transition={{
        duration: 0.45,
        delay: index * 0.08,
        ease: [0.25, 0.4, 0.25, 1],
      }}
      className="h-full"
    >
      {children}
    </motion.div>
  );
}
