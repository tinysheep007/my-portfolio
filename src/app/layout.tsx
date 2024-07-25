import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zihe (Peter) Zhang",
  description: "Zihe (Peter) Zhang's Portfolio Page",
};

const GTAG_ID = "G-9SDEMV4C4H"; // Replace with your actual Google Tag ID

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" sizes="32x32" href="/images/glasses.png" />

        <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GTAG_ID}`}></script>
        <script dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GTAG_ID}', {
              page_path: window.location.pathname,
            });
          `
        }}></script>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
