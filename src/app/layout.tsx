import "./globals.css";
import Footer from "@/components/Footer/page";
import Header from "@/components/Header/page";
import Top from "@/components/Top/page";
import Dashboard from "@/components/Dashboard/page";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Registerkaro</title>
      </head>
      <body className="min-h-screen flex flex-col">
        <Top />
        <Header />
        <Dashboard />

        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
