import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SMAKBO's SWAG SHOP"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="bg-base w-screen h-screen flex justify-center">
          <div className="bg-white w-[480px] overflow-y-auto p-5">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}