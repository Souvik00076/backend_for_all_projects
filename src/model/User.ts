import mongoose, { Schema } from "mongoose";
import { IUserDocument } from "../@types/schema_types";
import { USER_STATUS } from "../constants";
import bcrypt from "bcryptjs";
const userSchema = new Schema<IUserDocument>(
  {
    userName: {
      type: String,
      require: true,
      unique: true,
    },
    profilePhoto: {
      type: String,
      default: "",
    },
    email: {
      type: String,
      match:
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
      required: true,
      unique: true,
    },
    password: {
      type: String,
    },
    status: {
      type: String,
      enum: USER_STATUS,
      default: USER_STATUS.AWAY,
    },
    isVerified: {
      type: Boolean,
      default: true,
    },
    location: {
      type: String,
      default: "",
    },
    description: {
      type: String,
      default: "",
    },
    backgroundImage: {
      type: String,
      default: "",
    },
    showLastSeen: {
      type: Boolean,
      default: true,
    },
    displayStatus: {
      type: Boolean,
      default: true,
    },
    readRecipient: {
      type: Boolean,
      default: true,
    },
    currentRefreshToken: {
      type: String,
    },
    refreshTokenLimit: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true },
);

userSchema.methods.isMatch = async function (password: any) {
  if (this.password) {
    const isMatch = await bcrypt.compare(password, this.password);
    return isMatch;
  }
  return true;
};
userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    const salt = await bcrypt.genSalt(10); // Adjust salt rounds as needed
    this.password = await bcrypt.hash(this.password, salt);
  }
  next();
});

userSchema.methods.match = async function (creadential: string) {
  const isMatch = await bcrypt.compare(creadential, this.password);
  return isMatch;
};

const User = mongoose.model<IUserDocument>("user", userSchema);
export default User;
