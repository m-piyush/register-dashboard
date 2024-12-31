import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer/page";
import Header from "@/components/Header/page";
import Top from "@/components/Top/page";

const geist = Geist({ subsets: ["latin"], weight: "400" });
const geistMono = Geist_Mono({ subsets: ["latin"], weight: "400" });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={geist.className}>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Registerkaro</title>
      </head>
      <body className="min-h-screen flex flex-col">
        <Top/>
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
