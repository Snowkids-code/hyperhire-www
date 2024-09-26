import type { Metadata } from "next";
import "./globals.css";
import { Noto_Sans, Poppins } from "next/font/google";

const notoSans = Noto_Sans({
  weight: ["400", "500", "700"], // You can choose the weights you need
  subsets: ["latin"],
  display: "swap",
  variable: "--font-noto-sans",
});

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
      <body
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
