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
  title: "77 East Advisory — Fractional controller & advisory services for US freight & logistics",
  description:
    "Fractional controller and financial advisory services for US asset-based truckload carriers, 3PLs, brokerages, and dispatch agencies from $10M in revenue — monthly close, compliance, board-ready reporting, and long-term financial strategy.",
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
