import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavbarMain from "@/components/Navbar/NavbarMain";
import Sidesec from "@/components/SideSec/SideSecComp";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Omar Khalifa Portfolio",
  description: "Omar Khalifa Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <link href="https://fonts.googleapis.com/css2?family=Alex+Brush&family=Bebas+Neue&family=Josefin+Sans:ital,wght@0,100..700;1,100..700&family=Rajdhani:wght@300;400;500;600;700&family=Story+Script&display=swap" rel="stylesheet"></link>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
         <NavbarMain/>
         <Sidesec/>
        {children}
        
      </body>
    </html>
  );
}
