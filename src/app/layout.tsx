// This is a server component because it does not use any client-side features like state or effects.
// It sets up the overall HTML structure of the app (<html> and <body> tags).
// The children prop represents the content of the page, which will be rendered inside the body.
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css"; // Importing global CSS styles to apply them across the entire app

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Used by Next.js to set the page title and description
export const metadata: Metadata = {
  title: "To-Do List",
  description: "A simple to-do list application built with Next.js",
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
