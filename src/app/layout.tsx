import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import BottomNav from "@/components/BottomNav";
import "./globals.css";
import Footer from "@/components/Footer";

export const metadata: Metadata = { title: "Ecowish Craft India Pvt. Ltd.", description: "Explore creative training in portrait making, handicrafts, home decor, textile design, fashion art, and festive crafts.",  icons: {
    icon: "/favicon.ico",
  }};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <BottomNav />
      </body>
    </html>
  );
}
