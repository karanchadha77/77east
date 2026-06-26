import type { Metadata, Viewport } from "next";
import { Inter, Lora } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  display: "swap",
  style: ["italic"],
  weight: ["400", "500"],
});

const siteUrl = "https://74east.com";
const siteTitle = "74 East Advisory";
const siteDescription =
  "74 East Advisory provides accounting, bookkeeping, reporting, and financial advisory services to growth-focused businesses — delivered by a dedicated team with the structure and expertise your business needs to scale.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteTitle} — Finance & Accounting Partner for Growth-Focused Businesses`,
    template: `%s | ${siteTitle}`,
  },
  description: siteDescription,
  keywords: [
    "accounting",
    "bookkeeping",
    "financial advisory",
    "CFO services",
    "management reporting",
    "cash flow management",
    "finance partner",
    "outsourced CFO",
    "fractional CFO",
    "growth-focused businesses",
    "startup accounting",
    "small business accounting",
    "financial reporting",
    "budgeting and forecasting",
    "74 East Advisory",
  ],
  authors: [{ name: siteTitle, url: siteUrl }],
  creator: siteTitle,
  publisher: siteTitle,
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: siteTitle,
    title: `${siteTitle} — Finance & Accounting Partner for Growth-Focused Businesses`,
    description: siteDescription,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteTitle} — Finance & Accounting Partner for Growth-Focused Businesses`,
    description: siteDescription,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${lora.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-bg text-fg antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
