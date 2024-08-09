import mongoose, { Schema } from "mongoose";
import { IChatMember } from "../@types/schema_types";
const chatMemberSchema = new Schema<IChatMember>(
  {
    memberId: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: [true, "Member Id cannot be empty"],
    },
    chatId: {
      type: Schema.Types.ObjectId,
      ref: "chatroom",
      required: [true, "Chat ID cannot be empty"],
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
);
const ChatMember = mongoose.model<IChatMember>("chatmember", chatMemberSchema);
export default ChatMember;
