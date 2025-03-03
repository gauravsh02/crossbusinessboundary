import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "@/components/theme/theme-provider";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cross Business Boundary",
  description: "Manish Kumar Sinha is business consultant, consulting to develop business process, converting venture into cash rich busines and consulting for business and family sucession planning.",
  keywords: ["Coach","Business Coach","consultant","Business Consultant","Will","Succession Planning","Family Dispute","Business Development","Network","Will Drafting","MSME Ownership dispute","networking","wealth","Tax","Finance","Financial Crises","Profit"],
  authors: [{ name: 'Manish Kumar Sinha' }]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`} >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
