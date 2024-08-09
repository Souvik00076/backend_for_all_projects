import dotenv from "dotenv";
dotenv.config();
export const CREDENTIAL = {
  MONGO_URI: process.env.MONGO_URI as string,
  JWT_SECRET: process.env.JWT_SECRET,
  FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
  FIREBASE_STORAGE_BUCKET: process.env.FIREBASE_STORAGE_BUCKET,
};
