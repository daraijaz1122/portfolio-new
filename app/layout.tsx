import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import { Analytics } from "@vercel/analytics/next";

const outfit = Outfit({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "aijaz-portfolio",
  description: " this is a portfolio wesite ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <ToastContainer />

        {children}
        <Analytics />
      </body>
    </html>
  );
}
