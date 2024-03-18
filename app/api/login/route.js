import { NextResponse } from "next/server";
import { compare } from "bcrypt";
import prisma from "@/app/lib/prismadb";

async function userExistsByuserIdorEmail(key) {
    try {
      if (key) {
        const user = await prisma.user.findFirst({
            where: {
              OR: [
                { userId: key },
                { email: key },
              ],
            },
          });
        if(user && user !== undefined) {
            return true;
        }
        
      return false;
    } 
}
catch (error) {
      console.log(error.message);
      return false;
    }
  }

async function verifyPassword(key , primary){
    try {
        if (primary) {
          const user = await prisma.user.findFirst({
            where: {
              OR: [
                { userId: primary },
                { email: primary },
              ],
            },
          });
            if(user && user !== undefined) {
                let passwordCorrect = await compare(key,user?.hashedPassword)
                return passwordCorrect
            }
        
        return false;
      } 
  }
  catch (error) {
        console.log(error.message);
        return error;
      }
    
}
export async function POST(request) {
    try {
      const formData = await request.json();
      if ("step" in formData && formData.step === "1") {
        const { primary } = formData;
        if(primary.length > 0 && await userExistsByuserIdorEmail(primary)){
            return NextResponse.json({ user :"success" });
        }
        else {
            console.log("user does not exist")
            return NextResponse.json({ error: " no user exists" });
        }
      }
      if ("step" in formData && formData.step === "2") {
        const { password ,primary} = formData;
        if(password.length > 0 && await verifyPassword(password , primary)){
            return NextResponse.json({ user :"success" });
        }
      }
    }
    catch(error){
        console.log(error)
        return NextResponse.json({ error: error });
      }
    }