import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import Cursor from "../components/cursor";
import Navbar from "../sections/Navbar";
import Footer from "../sections/Footer";

const inter = Poppins({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Khalil FERHATI",
  description: "A fullstack developper",
  manifest:"/manifest.json",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
    
      <body className={inter.className}>
        <Cursor />
        <Navbar />
        <main className="space-y-20">
          {children}
          <Toaster />
          <Footer />
        </main>
      </body>
    </html>
  );
}
