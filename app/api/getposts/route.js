import prisma from "@/app/lib/prismadb";
import { NextResponse } from "next/server";


//workflow -> home -> req 
export async function GET(request){
    try{
        const posts = await prisma.post.findMany({
            orderBy: {
              createdAt: 'desc',
            },
            include : {
              user : true
            }
          });
          if(posts.length>0){
            return NextResponse.json({  posts : posts });
          }
    
    }
    catch(err){
        return NextResponse.json({ status : 400 , message: "some error" });
    }

    
}