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

export type PopupProps = {
  msgCreated: string;
  sloganCreated: string;
  closeMsgPopup: () => void;
};

export type ResponseData = {
  message: string;
  status: number;
};

export interface Params {
  params: { hash: string };
}
