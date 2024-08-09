import mongoose, { Schema } from "mongoose";
import { IMessage } from "../@types/schema_types";
import { MESSAGE_TYPE } from "../constants/";
const MessageSchema: Schema = new Schema<IMessage>({
  type: { type: String, enum: MESSAGE_TYPE, required: true },
  content: { type: String, required: true },
  recipients: [{ type: Schema.Types.ObjectId, ref: "user", required: true }],
  roomId: { type: Schema.Types.ObjectId, ref: "chatroom", required: true },
  createdAt: { type: Date, default: Date.now },
  isEdited: { type: Boolean, default: false },
});
const Message = mongoose.model<IMessage>("Message", MessageSchema);
export default Message;
