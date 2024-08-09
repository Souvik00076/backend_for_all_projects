import mongoose, { Schema, Document } from "mongoose";
import { IChatRoom } from "../@types/schema_types";
const ChatRoomSchema: Schema = new Schema<IChatRoom>(
  {
    isGroupChat: { type: Boolean, required: true },
    members: [{ type: Schema.Types.ObjectId, ref: "user", required: true }],
    admins: [{ type: Schema.Types.ObjectId, ref: "user", required: true }],
    isFavourite: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
);
const ChatRoom = mongoose.model<IChatRoom>("chatroom", ChatRoomSchema);
export default ChatRoom;
