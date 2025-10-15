import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FluxxtoberFest 2025",
  description: "A fusion of design, development, and 3D innovation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-black text-white">{children}</body>
    </html>
  );
}