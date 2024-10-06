import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const geistSans =  Plus_Jakarta_Sans({

  variable: "--font-geist-sans",
  weight: ['300','400', '500', '600','700']
});
const geistMono = Plus_Jakarta_Sans({
  variable: "--font-geist-mono",
  weight: ['300','400', '500', '600','700']
});

export const metadata: Metadata = {
  title: " Assistencia Medica",
  description: "Um sistema de gestão de saúde",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
