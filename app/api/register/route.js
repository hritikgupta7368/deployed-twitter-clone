import { NextResponse } from "next/server";
import { hash } from "bcrypt";
import prisma from "@/app/lib/prismadb";

async function userExistsByEmail(email) {
  try {
    if (email) {
      const user = await prisma.user.findUnique({
        where: {
          email: email,
        },
      });
      return !!user;
    }
    return false;
  } catch (error) {
    console.log(error.message);
    return false;
  }
}
async function userExistsByuserId(userId) {
  try {
    if (userId) {
      const user = await prisma.user.findUnique({
        where: {
          userId: userId,
        },
      });
      return !!user;
    }
    return false;
  } catch (error) {
    console.log(error.message);
    return false;
  }
}
async function createNewUser(userId, name, hashedpassword, email) {
  if(userId, name, hashedpassword, email){
    const user = await prisma.user.create({
      data:{
        name : name,
        email : email,
        userId : userId,
        hashedPassword: hashedpassword
      }
    })
    console.log(user)
  }
}
export async function POST(request) {
  try {
    const formData = await request.json();

    if ("step" in formData && formData.step === "1") {
      const { email } = formData;
     
      if (await userExistsByEmail(email)) {
        return NextResponse.json(
          { error: "email already exists" },
          { status: 400 }
        );
      } else {
        return NextResponse.json({ message: "success unique email" });
      }
    }

    if ("step" in formData && formData.step === "final") {
      const { NAME,EMAIL,DOB,PASSWORD ,USERID} = formData;

      if (await userExistsByuserId(USERID)) {
        return NextResponse.json({ error: "use different userId" });
      } 
      else {
        const hashedpassword = await hash(PASSWORD, 10);
        const newUser = await createNewUser(
          USERID,
          NAME,
          hashedpassword,
          EMAIL
        );
       
        if (newUser || true) {
          return NextResponse.json({
            message: "user created successfully",
            
          });
        }
      }
     
    }
  } catch (error) {
    console.log(error.message);
    return NextResponse.json({ error: " server error" });
  }
}
