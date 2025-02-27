import { NextResponse } from "next/server";
import { S3Client, ListObjectsV2Command } from "@aws-sdk/client-s3";

const BUCKET_NAME = "pmconventiongallery";
const REGION = "ap-south-1";

// Initialize S3 client
const s3 = new S3Client({
  region: REGION,
  credentials: {
    accessKeyId: "AKIASVQKH7IW7UKYSUPX",
    secretAccessKey: "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",
  },
});

export async function GET() {
  try {
    const command = new ListObjectsV2Command({ Bucket: BUCKET_NAME });
    const { Contents } = await s3.send(command);

    if (!Contents) {
      return NextResponse.json({ images: [] }, { status: 200 });
    }

    const imageUrls = Contents.map((item) => ({
      key: item.Key,
      url: `https://${BUCKET_NAME}.s3.${REGION}.amazonaws.com/${item.Key}`,
    }));

    return NextResponse.json({ images: imageUrls }, { status: 200 });
  } catch (error) {
    console.error("Error listing images:", error);
    return NextResponse.json({ error: "Failed to list images" }, { status: 500 });
  }
}
