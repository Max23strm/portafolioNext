import type { Metadata, Viewport } from "next";
import { DM_Sans, Gruppo } from "next/font/google";
import "@/styles/globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

const gruppo = Gruppo({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-gruppo",
  display: "swap",
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://maximiliano-ovejak.dev";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Maximiliano Ovejak — Fullstack Developer",
    template: "%s · Maximiliano Ovejak",
  },
  description:
    "Fullstack developer building production apps with Next.js, TypeScript, React, Node.js and Go.",
  applicationName: "Maximiliano Ovejak — Portfolio",
  keywords: [
    "Fullstack Developer",
    "Next.js",
    "TypeScript",
    "React",
    "Node.js",
    "Go",
    "Portfolio",
    "Maximiliano Ovejak",
  ],
  authors: [{ name: "Maximiliano Ovejak", url: SITE_URL }],
  creator: "Maximiliano Ovejak",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Maximiliano Ovejak — Portfolio",
    title: "Maximiliano Ovejak — Fullstack Developer",
    description:
      "Fullstack developer building production apps with Next.js, TypeScript, React, Node.js and Go.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Maximiliano Ovejak — Fullstack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Maximiliano Ovejak — Fullstack Developer",
    description:
      "Fullstack developer building production apps with Next.js, TypeScript, React, Node.js and Go.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
  },
  alternates: {
    canonical: SITE_URL,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#2a3845" },
  ],
  width: "device-width",
  initialScale: 1,
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Maximiliano Ovejak",
  url: SITE_URL,
  jobTitle: "Fullstack Developer",
  sameAs: [
    "https://github.com/Max23strm",
    "https://www.linkedin.com/in/m-ovejak/",
  ],
  knowsAbout: [
    "Next.js",
    "TypeScript",
    "React",
    "Node.js",
    "Go",
    "PostgreSQL",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${gruppo.variable}`}
    >
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </body>
    </html>
  );
}
