import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/navbars/Navbar";
import NavbarMin from "./_components/navbars/NavbarMin";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Coopconesa",
  description: "Cooperativa de Agua, Obras y Servicios públicos de Conesa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavbarMin />
        {children}
      </body>
    </html>
  );
}
