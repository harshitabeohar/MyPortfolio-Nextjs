"use client"
import "./globals.css"
import Navbar from "./components/Navbar"
import Footer from "@/app/components/Footer"
import { ThemeProvider } from "next-themes"
import { useEffect, useState } from 'react';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <html lang="en">
      <head />
      <body className="dark:bg-stone-900">
        {isClient && (
          <ThemeProvider enableSystem={true} attribute="class">
            <Navbar />
            {children}
            <Footer />
          </ThemeProvider>
        )}
      </body>
    </html>
  )
}
