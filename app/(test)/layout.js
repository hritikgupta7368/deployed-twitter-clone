import { Inter as FontSans } from "next/font/google"
import { cn } from "@/lib/utils"
import "../globals.css"
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import SessionProvider from "../providers/provider";
import Navbar from "@/app/components/navbar/navbar"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export default async function RootLayout({ children }) {
  const session = await getServerSession(authOptions);
 return (
  <html lang="en" suppressHydrationWarning>
  <body>
    <SessionProvider session={session}>
     
          <div className="flex flex-row h-full bg-black">
           <Navbar />
            {children}
          </div>
        
    </SessionProvider>
  </body>
</html>
  )
}
