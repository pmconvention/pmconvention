import { S3Client, DeleteObjectCommand } from "@aws-sdk/client-s3";

const s3 = new S3Client({
  region: "ap-south-1",
  credentials: {
    accessKeyId: "AKIASVQKH7IW7UKYSUPX",
    secretAccessKey: "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",
    
  },
});

export async function POST(req) {
  try {
    const { key } = await req.json();
    if (!key) {
      return new Response(JSON.stringify({ error: "Missing image key" }), { status: 400 });
    }

    const params = {
      Bucket: "pmconventiongallery",
      Key: key,
    };

    await s3.send(new DeleteObjectCommand(params));

    return new Response(JSON.stringify({ message: "Image deleted successfully" }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}
