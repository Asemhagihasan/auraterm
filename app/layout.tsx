import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "AuraTerm – Industrial Leak Detection & Testing Services",
    template: "%s | AuraTerm",
  },
  description:
    "Professional industrial leak detection, testing, inspection and cleaning services. Helium leak testing, vacuum testing, thermal imaging and more.",
  metadataBase: new URL("https://auraterm.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "AuraTerm",
    title: "AuraTerm – Industrial Leak Detection & Testing Services",
    description:
      "Professional industrial leak detection, testing, inspection and cleaning services.",
  },
  twitter: {
    card: "summary_large_image",
    title: "AuraTerm – Industrial Leak Detection & Testing Services",
    description:
      "Professional industrial leak detection, testing, inspection and cleaning services.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <div className="relative flex min-h-svh flex-col">
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
