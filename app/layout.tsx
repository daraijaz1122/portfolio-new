import type { Metadata } from "next";
import { Outfit} from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";

const outfit = Outfit({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "aijaz-portfolio",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      className={outfit.className}
      >
        <ToastContainer />
        {children}
      </body>
    </html>
  );
}
