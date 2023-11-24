import { NextRequest, NextResponse } from "next/server";

import dbConnect from "@/utils/db";
import User from "@/models/User.model";

export async function DELETE(req: NextRequest, res: NextResponse) {
  if (req.method !== "DELETE") {
    return;
  }

  const data = await req.json();
  console.log(data);

  const hash = data.hash;

  await dbConnect();

  const user = await User.deleteOne({ hash: hash });

  return NextResponse.json(
    {
      message: "User deleted",
    },
    { status: 201 }
  );
}
