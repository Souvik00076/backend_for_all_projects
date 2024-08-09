import { Document, Types } from "mongoose";
import { MESSAGE_TYPE, USER_STATUS } from "../constants";

export type TUser = {
  password: string;
  userName: string;
  profilePhoto: string;
  status: USER_STATUS;
  location: string;
  email: string;
  description: string;
  backgroundImage: string;
  showLastSeen: boolean;
  displayStatus: boolean;
  readRecipient: boolean;
  createdAt: Date;
  isVerified: boolean;
  currentRefreshToken: string;
  refreshTokenLimit: number;

  isMatch: (password: string) => Promise<boolean>;
};
export type TChatRoom = {
  isGroupChat: boolean;
  members: Types.ObjectId[];
  admins: Types.ObjectId[];
  isFavourite: boolean;
  createdAt: Date;
};
export type TMessage = {
  type: MESSAGE_TYPE;
  content: string;
  recipients: Types.ObjectId[];
  roomId: Types.ObjectId;
  createdAt: Date;
  isEdited: boolean;
};
//polymorphic design pattern
export type TChatMember = {
  memberId: Types.ObjectId;
  chatId: Types.ObjectId;
  isAdmin: boolean;
  createdAt: Date;
  leftAt: Date;
};
export interface IUserDocument extends TUser, Document {}
export interface IChatRoom extends TChatRoom, Document {}
export interface IMessage extends TMessage, Document {}
export interface IChatMember extends TChatMember, Document {}
