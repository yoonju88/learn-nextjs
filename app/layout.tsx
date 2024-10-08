import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Create AirBnb app",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
} : {
  children :React.ReactNode
}) {
  return (
    <html lang='en'>
      <body>
        < Navbar />
        <main className="max-w-3xl mx-auto py-10">
          {children}  {/*show the different page here */}
        </main>
      </body>
    </html>
  )
}
