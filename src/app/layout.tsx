import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FluxxtoberFest 2026 - Where Creativity Meets Technology",
  description: "A fusion of design, development, and 3D innovation. Join the ultimate Hacktoberfest celebration with cutting-edge 3D web technologies.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[var(--color-light)] text-[var(--color-purple)]`}
      >
        {children}
      </body>
    </html>
  );
}