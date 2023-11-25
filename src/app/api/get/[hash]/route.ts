import { NextResponse } from "next/server";

import dbConnect from "@/utils/db";
import User from "@/models/User.model";

export async function GET(req: Request, res: Response) {
  if (req.method !== "GET") {
    return;
  }

  const url = await req.url;
  const hash = url.substring(url.lastIndexOf("/") + 1);

  console.log(hash);

  await dbConnect();

  const user = await User.findOne({ hash: hash });

  console.log(user);

  return NextResponse.json({ user });
}
