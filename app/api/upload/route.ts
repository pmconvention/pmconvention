import { NextResponse } from "next/server";
import { S3Client, PutObjectCommand, ListObjectsV2Command } from "@aws-sdk/client-s3";
import multer from "multer";
import { promisify } from "util";
import fs from "fs";

// AWS S3 Configuration
const BUCKET_NAME = "pmconventiongallery";
const REGION = "ap-south-1";


const s3 = new S3Client({
  region: "ap-south-1",
  credentials: {
    accessKeyId:process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey:process.env.AWS_SECRET_ACCESS_KEY
  },
});

// Multer configuration for handling file uploads
const upload = multer({ dest: "/tmp" });
const uploadMiddleware = promisify(upload.single("file"));

export async function POST(req: Request) {
  try {
    // Parse the form data
    const formData = await req.formData();
    const file = formData.get("file") as File;

    if (!file) return NextResponse.json({ error: "No file uploaded" }, { status: 400 });

    const buffer = Buffer.from(await file.arrayBuffer());
    const fileName = `gallery/${Date.now()}-${file.name}`;

    // Upload file to S3
    await s3.send(
      new PutObjectCommand({
        Bucket: "pmconventiongallery",
        Key: fileName,
        Body: buffer,
        ContentType: file.type,
      })
    );

    // Return the uploaded file URL
    const fileUrl = `https://pmconventiongallery.s3.ap-south-1.amazonaws.com/${fileName}`;

    return NextResponse.json({ url: fileUrl }, { status: 200 });
  } catch (error) {
    console.error("Upload error:", error);
    return NextResponse.json({ error: "Upload failed" }, { status: 500 });
  }
}

export async function GET() {
    try {
      const command = new ListObjectsV2Command({ Bucket: BUCKET_NAME });
      const { Contents } = await s3.send(command);
  
      if (!Contents) return Response.json([]);
  
      const imageKeys = Contents.map((item) => item.Key);
  
      return Response.json(imageKeys);
    } catch (error) {
      console.error("Error listing images:", error);
      return Response.json({ error: "Failed to list images" }, { status: 500 });
    }
  }
