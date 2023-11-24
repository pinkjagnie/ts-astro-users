import { NextRequest, NextResponse } from "next/server";
// import { NextApiResponse, NextApiRequest } from "next";

import dbConnect from "@/utils/db";
import User from "@/models/User.model";

type ResponseData = {
  message: string;
  status: number;
};

export async function POST(req: NextRequest, res: NextResponse<ResponseData>) {
  if (req.method !== "POST") {
    return;
  }

  console.log(req.body);
  console.log(Request);
  console.log(Request.body);

  const data = req.body;

  console.log("DAAAAAAAAAAAAAAAAAAAAAAAAAATA ");
  console.log(data);
  console.log(req.json());

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

  const newUser = new User({
    firstName: firstName,
    age: age,
    tagFirst: tagFirst,
    tagSecond: tagSecond,
    tagThird: tagThird,
    hash: hash,
  });

  const validateError = newUser.validateSync();
  console.log(validateError);

  try {
    await User.create(newUser);
    return NextResponse.json({ message: "User created!" }, { status: 201 });
  } catch (err) {
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
