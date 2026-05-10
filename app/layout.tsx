import type { Metadata } from "next";
import { Inter, Cormorant_Garamond, Shippori_Mincho } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const mincho = Shippori_Mincho({
  variable: "--font-mincho",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Nikkei National Museum & Cultural Centre",
  description:
    "Honouring, preserving, and sharing the history and heritage of Japanese Canadians.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${cormorant.variable} ${mincho.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
