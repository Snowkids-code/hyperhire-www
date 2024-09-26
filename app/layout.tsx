import "react-responsive-carousel/lib/styles/carousel.min.css";
import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";
import Head from "next/head";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Hyperhire",
  description: "An interview tests project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.className}>
      <Head>
        <link
          rel="stylesheet"
          href="/node_modules/react-responsive-carousel/lib/styles/carousel.min.css"
        />
      </Head>
      <body
      // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
