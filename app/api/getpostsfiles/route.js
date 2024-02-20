import { NextResponse } from "next/server";
import { GetObjectCommand ,S3Client } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

const client = new S3Client({
    region: process.env.REGION,
    endpoint: process.env.ENDPOINT,
    credentials: {
      accessKeyId: process.env.ACCESSKEYID,
      secretAccessKey: process.env.SECRET_ACCESS_KEY,
    },
  });

export async function GET(request){
    try{
        const expiresIn = 60 * 60 * 4;
        const command = new GetObjectCommand({
            Bucket: process.env.BUCKET_NAME,
            Key: "file_example_MP4_1280_10MG.mp4",
          });

        const signedUrl = await getSignedUrl(client, command, { expiresIn });
        console.log(signedUrl);
        return NextResponse.json({ url : signedUrl });
    }
    catch(err){
        return NextResponse.json({ status : 400 , message: "some error" });
    }
}