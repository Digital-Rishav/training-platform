import Navbar from "@/components/Navbar";
import BottomNav from "@/components/BottomNav";
import "./globals.css";



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
        <BottomNav />
      </body>
    </html>
  );
}
