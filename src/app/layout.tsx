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
  title: "77 East Advisory — Fractional controller services for US freight",
  description:
    "Senior financial expertise for US freight and trucking businesses between $5M and $75M — monthly close, compliance, and long-term financial strategy, at a fraction of full-time US cost.",
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
