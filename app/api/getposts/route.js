import prisma from "@/app/lib/prismadb";
import { NextResponse } from "next/server";


//workflow -> home -> req 
export async function GET(req){
    try{
     let url = new URL(req.url)
     let searchParams = new URLSearchParams(url.searchParams)
     let page = parseInt(searchParams.get('page'))
    
        const pageSize = 10;
        const posts = await prisma.post.findMany({
            skip: (page - 1) * pageSize,
            take: pageSize,
            orderBy: {
              createdAt: 'desc',
            },
            include : {
              user : true
            }
          });
          if(posts.length>0){
           
              return NextResponse.json({ posts });
        
          }
          if(posts.length <=0){
          return NextResponse.json({end : "the end"} );
          }
    
    }
    catch(err){
        return NextResponse.json({ status : 400 , message: "some error" });
    }

    
}