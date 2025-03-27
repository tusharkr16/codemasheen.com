import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Code Masheen",
  description: "Web and app services",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>

      {/* <link rel="icon" href="https://flot-bucket.blr1.cdn.digitaloceanspaces.com/flot-bucket/statics/logo.png" /> */}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden bg-custom-gradient`}
      >
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
