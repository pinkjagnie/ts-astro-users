import { NextRequest, NextResponse } from "next/server";

import dbConnect from "@/utils/db";
import User from "@/models/User.model";

export async function PATCH(req: NextRequest, res: NextResponse) {
  if (req.method !== "PATCH") {
    return;
  }

  const data = await req.json();
  console.log(data);

  const { firstName, age, tagFirst, tagSecond, tagThird, hash } = data;

  await dbConnect();

  const query = { hash: hash };

  const user = await User.findOneAndUpdate(query, {
    $set: {
      firstName: firstName,
      age: age,
      tagFirst: tagFirst,
      tagSecond: tagSecond,
      tagThird: tagThird,
    },
  });

  return NextResponse.json(
    {
      message: "User data updated!",
    },
    { status: 201 }
  );
}
