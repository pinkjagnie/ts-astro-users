import { NextRequest, NextResponse } from "next/server";

import dbConnect from "@/utils/db";
import User from "@/models/User.model";

import { ResponseData } from "@/types/types";

export async function POST(req: NextRequest, res: NextResponse<ResponseData>) {
  if (req.method !== "POST") {
    return;
  }

  const data = await req.json();

  // console.log(
  //   "---------- DATAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA --------------------"
  // );
  // console.log(data);

  const { firstName, age, tagFirst, tagSecond, tagThird, hash } = data;

  await dbConnect();

  const existingUser = await User.findOne({ firstName: firstName });

  if (existingUser) {
    return NextResponse.json(
      {
        message:
          "A user with that name already exists. Please choose a different name, it can also be your nickname",
      },
      { status: 422 }
    );
  }

  const newUser = new User(data);

  const validateError = newUser.validateSync();
  console.log(validateError);

  try {
    await User.create(newUser);
    return NextResponse.json({ message: "User created!" }, { status: 201 });
  } catch (err: any) {
    console.log(err);
    if (err.errors.firstName) {
      return NextResponse.json(
        { message: err.errors.firstName.message },
        { status: 422 }
      );
    } else if (err.errors.age) {
      return NextResponse.json(
        { message: err.errors.age.message },
        { status: 422 }
      );
    } else if (err.errors.tagFirst) {
      return NextResponse.json(
        { message: err.errors.tagFirst.message },
        { status: 422 }
      );
    } else if (err.errors.tagSecond) {
      return NextResponse.json(
        { message: err.errors.tagSecond.message },
        { status: 422 }
      );
    } else if (err.errors.tagThird) {
      return NextResponse.json(
        { message: err.errors.tagThird.message },
        { status: 422 }
      );
    }
  }
}
