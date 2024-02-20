import { S3Client } from "@aws-sdk/client-s3";

let s3ClientInstance;

const createS3Client = () => {
  if (!s3ClientInstance) {
    s3ClientInstance = new S3Client({
      region: process.env.REGION,
      endpoint: process.env.ENDPOINT,
      credentials: {
        accessKeyId: process.env.ACCESSKEYID,
        secretAccessKey: process.env.SECRET_ACCESS_KEY,
      },
    });
  }

  return s3ClientInstance;
};

export default createS3Client;
