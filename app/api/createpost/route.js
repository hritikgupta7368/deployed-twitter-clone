import { NextResponse } from "next/server";
import prisma from "@/app/lib/prismadb";
import { revalidatePath } from "next/cache";

export async function POST(request,res) {
    try {
     
      const data = await request.formData();
      const filesName = data.get("filesName");
      const userId = data.get("userId");
      const content = data.get("content");
      let hashtag = data.get("hashTag")
      const array= filesName.split(",")
      const hashtagArray = hashtag ? hashtag.split(",") : [];
      
     
     console.log(hashtagArray)
     if(!userId){
      console.log( "no user id");
        return NextResponse.json({ status : 400 },{ message: "no user id" });
     }
    
    
    const NewPost = await prisma.post.create({
      data: {
        userId: userId,
        content: content ? content : '',
        images: filesName.length > 0 ? array : [],
       
      },
    });

    let hashtagOperations = [];

// Loop over your hashtags
for (let name of hashtagArray) {
  // Try to find the hashtag
  const hashtag = await prisma.hashtag.findUnique({
    where: { name: name },
  });

  // If the hashtag exists, prepare an update operation
  if (hashtag) {
    hashtagOperations.push(
      prisma.hashtag.update({
        where: { name: name },
        data: { usageCount: { increment: 1 } },
      })
    );
  } else {
    // If the hashtag doesn't exist, prepare a create operation
    hashtagOperations.push(
      prisma.hashtag.create({
        data: {
          name: name,
          usageCount: 1,
          postId: NewPost.id,
         
        },
      })
    );
  }
}

// Execute all operations in a transaction
await prisma.$transaction(hashtagOperations);

     if(!NewPost){
      console.log("prisma error ")
        return NextResponse.json({ status : 400 },{ message: "prisma error " });
     }
     console.log(NewPost)
     revalidatePath('/home')
     return NextResponse.json({  postid : NewPost.id });
    }
    catch (e) {
      console.log( e)
        return NextResponse.json({ message: "failed"}, {status: 400,});
      }
}