import { initializeApp, getApps, cert } from "firebase-admin/app";
import { DbError } from "../error";

export const setUpFirebaseConfig = () => {
  const apps = getApps();
  console.log(apps);
  if (!apps.length) {
    initializeApp({
      credential: cert("firebase_admin.json"),
    });
  }
  throw new DbError("Could not set up firebase");
};
