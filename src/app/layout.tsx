import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import TopInfoBar from "@/components/TopInfoBar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: {
    default: "TK PKK SIWI LESTARI",
    template: "%s | TK PKK SIWI LESTARI",
  },
  description:
    "TK PKK Siwi Lestari menghadirkan pengalaman belajar yang aman, kreatif, dan penuh kasih untuk anak usia dini.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={`${poppins.variable} font-sans`}>
        <TopInfoBar />
        <Navbar />
        <PageTransition>
          <main className="relative overflow-hidden">{children}</main>
        </PageTransition>
        <Footer />
      </body>
    </html>
  );
}
