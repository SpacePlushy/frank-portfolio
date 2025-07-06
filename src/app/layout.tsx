import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from '@vercel/analytics/react';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Frank Palmisano - Software Engineer",
  description: "Software Engineer specializing in Embedded Systems, Virtualization, and NASA Orion Spacecraft development. 6+ years of experience in aerospace technology.",
  keywords: ["Software Engineer", "Embedded Systems", "Virtualization", "NASA", "Orion Spacecraft", "Aerospace", "Frank Palmisano"],
  authors: [{ name: "Frank Palmisano" }],
  openGraph: {
    title: "Frank Palmisano - Software Engineer",
    description: "Software Engineer specializing in Embedded Systems, Virtualization, and NASA Orion Spacecraft development.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Frank Palmisano - Software Engineer",
    description: "Software Engineer specializing in Embedded Systems, Virtualization, and NASA Orion Spacecraft development.",
  },
};

export function generateViewport() {
  return {
    width: 'device-width',
    initialScale: 1,
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
