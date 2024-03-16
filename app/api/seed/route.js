import { NextResponse } from "next/server"
import prisma from "@/app/lib/prismadb"
import { faker } from '@faker-js/faker';


export  async function GET(req){
    try {
        const posts = Array.from({ length: 100 }, () => ({
            content: faker.lorem.paragraph(),
            images: [faker.image.url(), faker.image.url(), faker.image.url()],
            createdAt: faker.date.past(),
            likesCount: faker.number.int(100),
            commentsCount: faker.number.int(100),
            repostsCount: faker.number.int(100),
            userId: "65d3285bcbf3037039419fc1",
          }));
      
         let data = await prisma.post.createMany({
            data: posts,
          });
          console.log(data);
          return NextResponse.json({hello: data})
    }
    catch(e){
        return NextResponse.json({error : e})
    }
   
    
}