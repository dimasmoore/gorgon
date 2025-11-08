import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

export async function POST(req: NextRequest) {
  try {
    const { hash: initData } = await req.json();

    if (!initData) {
      return NextResponse.json(
        { message: "initData is required" },
        { status: 400 },
      );
    }

    const BOT_TOKEN = process.env.BOT_TOKEN;

    if (!BOT_TOKEN) {
      console.error("BOT_TOKEN is not set in environment variables");
      return NextResponse.json(
        { message: "Internal server error" },
        { status: 500 },
      );
    }

    const urlParams = new URLSearchParams(initData);
    const hash = urlParams.get("hash");
    const dataToCheck: string[] = [];

    urlParams.sort();
    urlParams.forEach((val, key) => {
      if (key !== "hash") {
        dataToCheck.push(`${key}=${val}`);
      }
    });

    const dataCheckString = dataToCheck.join("\n");
    const secretKey = crypto
      .createHmac("sha256", "WebAppData")
      .update(BOT_TOKEN)
      .digest();
    const hmac = crypto
      .createHmac("sha256", secretKey)
      .update(dataCheckString)
      .digest("hex");

    if (hmac === hash) {
      return NextResponse.json({ message: "Validation successful" });
    } else {
      return NextResponse.json(
        { message: "Invalid hash" },
        { status: 403 },
      );
    }
  } catch (error) {
    console.error("Validation error:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 },
    );
  }
}
