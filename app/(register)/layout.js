import { Inter as FontSans } from "next/font/google"
import { cn } from "@/lib/utils"
import "./globals.css"
import Footer from "./footer"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export default function RootLayout({ children }) {
 return (
  <html lang="en" suppressHydrationWarning>
      <body className="bg-black text-white">
        {children}
        <Footer />
      </body>
    </html>
  )
}
