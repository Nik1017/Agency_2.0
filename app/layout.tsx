import type { Metadata } from "next";
import { Inter, Playfair_Display, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Header } from "@/components/shared/header";

const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-inter",
  display: "swap"
});

const playfair = Playfair_Display({ 
  subsets: ["latin"], 
  variable: "--font-playfair", 
  style: ['normal', 'italic'],
  display: "swap"
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap"
});

export const metadata: Metadata = {
  title: "RevyroMeia | Elite Growth Partner",
  description: "End-to-end content creation, video editing, and AI automation for founders and modern brands.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={cn(
        "min-h-screen font-sans antialiased",
        inter.variable, 
        playfair.variable,
        jetbrainsMono.variable
      )}>
        <Header />
        {children}
      </body>
    </html>
  );
}
