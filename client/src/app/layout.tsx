import type { Metadata } from "next";
import Head from "next/head";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });
// 
// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Chattie",
  description: "A modern but fun app to chat with friends.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Delius&family=Winky+Rough:ital,wght@0,300..900;1,300..900&family=Zain:ital,wght@0,200;0,300;0,400;0,700;0,800;0,900;1,300;1,400&display=swap"
          rel="stylesheet" />
      </head>
      <body
        className={`p-8 sm:p-20 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
