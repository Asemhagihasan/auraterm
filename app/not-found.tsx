import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <h1 className="text-7xl font-bold tracking-tighter text-primary">404</h1>
      <p className="mt-4 text-lg text-foreground">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <div className="mt-8 flex gap-3">
        <Button asChild className="bg-navy-600 text-white hover:bg-navy-700">
          <Link href="/">Go Home</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/services">Browse Services</Link>
        </Button>
      </div>
    </section>
  );
}
