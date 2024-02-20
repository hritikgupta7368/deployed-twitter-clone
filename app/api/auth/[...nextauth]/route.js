import NextAuth from "next-auth/next";
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcrypt";
import prisma from "@/app/lib/prismadb";
import { getServerSession } from "next-auth";


export const authOptions = {
  pages:{
   signIn: "/signin",
  },
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {},
      async authorize(credentials, req) {
        try {
            const session = await getServerSession()
          if (credentials.userId) {
            const user = await prisma.user.findUnique({
              where: {
                userId: credentials.userId,
              },
            });
            const passwordCorrect = await compare(credentials.password,user.hashedPassword)

            if(passwordCorrect){
                console.log("login successful")
               
                
                return user
            }
          }
        } catch (err) {
          console.log(err);
          return null;
        }
      },
    }),
  ],
  callbacks:{
    async jwt({token,user,session}){
      if(user){
         
          token.id=user.id
          token.name=user.name
          token.userId=user.userId
          token.accountType=user.accountType
          
      }
      
     
      return token;
    },
    async session({token,user,session}){


        if (session.user) {
         
          
            session.user.id = token.id,
            session.user.userId= token.userId,
            session.user.accountType= token.accountType
           
        
        }
        
       
        return session;

   
    
    }
  },
  session: {
    strategy:"jwt",
    maxAge: 30 * 24 * 60 * 60
  },
  secret: process.env.NEXTAUTH_SECRET,
};
export const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
