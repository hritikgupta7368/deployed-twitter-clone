import SessionProvider from "../providers/provider";
import "../globals.css";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { ContextProvider } from "../providers/contextprovider";
import Navbar from "../components/navbar/navbar";
import { Providers } from "../providers/nextuiprovider";
import Footer from "../components/common/footer";

export default async function RootLayout({ children }) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="en">
      <body>
        <SessionProvider session={session}>
          <Providers>
            <ContextProvider>
              <div className="flex flex-row h-full bg-black">
                <Navbar />
                {children}
              </div>
              <Footer />
            </ContextProvider>
          </Providers>
        </SessionProvider>
      </body>
    </html>
  );
}
