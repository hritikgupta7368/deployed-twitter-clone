import { NextResponse } from "next/server";
import prisma from "@/app/lib/prismadb";

export async function GET(request,res) {
    try{
        const topHashtags = await prisma.hashtag.findMany({
            orderBy: {
              usageCount: 'desc',
            },
            take: 5,
          });
          if(topHashtags.length>0){
            return NextResponse.json({  trends : topHashtags });
          }
          else {
            throw new Error
          }
    }
    catch (e) {
        console.log( e)
          return NextResponse.json({ message: "failed"}, {status: 400,});
        }
}