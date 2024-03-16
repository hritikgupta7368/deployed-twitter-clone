import SessionProvider from '../providers/provider'
import "../globals.css";
import { getServerSession } from "next-auth";
import { authOptions } from '../api/auth/[...nextauth]/route';
import Modals from '../components/Modals/modal';
import { ContextProvider } from '../providers/contextprovider';
import Navbar from '../components/navbar/navbar';
import { Providers } from '../providers/nextuiprovider';

export default async function RootLayout({ children }) {
  const session = await getServerSession(authOptions)
 
  return (
    <html lang="en">
      <body >
     
        <SessionProvider session = {session}>
       <Providers>
          <ContextProvider>
           
          <Modals />
          <div className="flex flex-row h-full  ">
           <Navbar />
            {children}
          </div>
         
          </ContextProvider>
          </Providers>
        </SessionProvider>
       
      </body>
    </html>
  );
}
