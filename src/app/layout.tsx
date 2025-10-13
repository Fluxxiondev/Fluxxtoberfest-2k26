import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata = {
  title: "FluxxtoberFest 2026",
  description: "Celebrate open source with FluxxtoberFest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning // 👈 avoids warnings for dynamic props
        className={`${geistSans.variable} ${geistMono.variable} bg-light text-purple`}
      >
        {children}
      </body>
    </html>
  );
}
