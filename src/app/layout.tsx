import type { Metadata } from "next";
import { Fraunces, Inter, Great_Vibes } from "next/font/google";
import "./globals.css";
import "leaflet/dist/leaflet.css";

const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  axes: ["opsz", "SOFT"],
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

// Calligraphic script to match the "Brunda Beauty Parlour" wordmark on the card.
const script = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-script",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Brunda Beauty Parlour — Bridal & Occasion Beauty in Chikkalasandra, Bengaluru",
  description:
    "One Stop Destination to Pamper Yourself. Bridal makeup, pre & post wedding, HD makeup, hair and skin care in Ramanjaneya Nagar, Chikkalasandra, Bengaluru.",
  keywords: [
    "Brunda Beauty Parlour",
    "bridal makeup Bengaluru",
    "beauty parlour Chikkalasandra",
    "HD makeup Bengaluru",
    "pre wedding makeup Bengaluru",
    "Ramanjaneya Nagar beauty parlour",
  ],
  metadataBase: new URL("https://brunda-beauty-parlour.example"),
  openGraph: {
    title: "Brunda Beauty Parlour",
    description: "Bridal · Party · HD · Hair · Skin — Chikkalasandra, Bengaluru.",
    type: "website",
    images: [
      {
        url: "/og-card.jpg",
        width: 1200,
        height: 630,
        alt: "Brunda Beauty Parlour — Bridal & Occasion Beauty, Bengaluru",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Brunda Beauty Parlour",
    description: "Bridal · Party · HD · Hair · Skin — Chikkalasandra, Bengaluru.",
    images: ["/og-card.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${script.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col vignette">{children}</body>
    </html>
  );
}
