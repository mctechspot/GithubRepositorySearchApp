import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/app/components/Navigation/Header"
import Footer from "@/app/components/Navigation/Footer"


const inter = Inter({ subsets: ["latin"] });
const robotoMono = Roboto_Mono({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={robotoMono.className}>
        <div className={`page-container`}>
          <Header />
          <div className={`page-content bg-green-main bg-gradient-to-r from-green-main to-blue-main text-green-light p-10`}>
            {children}
          </div>
          <Footer />
        </div>
      </body>
    </html >
  );
}
