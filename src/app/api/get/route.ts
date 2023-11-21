import { NextResponse } from "next/server";

import dbConnect from "@/utils/db";
import User from "@/models/User.model";

export async function GET(req: Request, res: Response) {
  if (req.method !== "GET") {
    return;
  }

  await dbConnect();

  const users = await User.find({});

  console.log(users);

  return NextResponse.json({ users });
}
