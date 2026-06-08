import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "74 East Advisory — Finance & Accounting Partner for Growth-Focused Businesses",
  description:
    "74 East Advisory provides accounting, bookkeeping, reporting, and financial advisory services to growth-focused businesses — delivered by a dedicated team with the structure and expertise your business needs to scale.",
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
