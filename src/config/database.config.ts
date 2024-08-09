import mongoose from "mongoose";
import { CREDENTIAL } from "../constants";
export const connectDb = async () => {
  const uri: string = CREDENTIAL.MONGO_URI;
  await mongoose.connect(uri);
};
