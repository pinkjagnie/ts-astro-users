import { ObjectId } from "mongodb";

export type TUser = {
  _id: ObjectId;
  firstName: string;
  age: number;
  tagFirst: string;
  tagSecond: string;
  tagThird: string;
  hash: string;
};

export type SingleUserCardProps = {
  userId: ObjectId;
  user: TUser;
};
