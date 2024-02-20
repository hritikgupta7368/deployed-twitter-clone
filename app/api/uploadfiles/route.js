import { PutObjectCommand } from "@aws-sdk/client-s3";
import { NextResponse } from "next/server";
import createS3Client from "@/app/lib/s3client";
const client = createS3Client();

async function putDataToS3(fileType, fileName, data,userId, postid) {
  const buffer = Buffer.from(await data.arrayBuffer());

 
  const command = new PutObjectCommand({
    Bucket: process.env.BUCKET_NAME,
    Key: `${userId}/posts/${postid}/${fileName}`,
    ContentType: fileType,
    Body: buffer,
  });

  const check = await client.send(command);

  return check;
}

export async function POST(request) {
  try {
   
    const data = await request.formData();
    const file = data.get("file");
    const userId = data.get("userId");
    const postid = data.get("postid");
    
    if (!file) {
      return NextResponse.json({ status : 400 , message: "not working" });
    }
    const upload = await putDataToS3(file.type , file.name  , file ,userId, postid);
    if(!upload){
      return NextResponse.json({ status : 400 , message: "failed" });
    }
    console.log("successfully uplaoded ", file.name)
    return NextResponse.json({ status : 200 , message: "uploaded successfully" });
  } catch (e) {
    
    return NextResponse.json({ status : 400 , message: "some error" });
  }
}
