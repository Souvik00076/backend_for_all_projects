// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { CREDENTIAL } from "../constants";
import admin from "firebase-admin";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const getFirebaseConfig = () => {
  const firebaseConfig = {
    apiKey: CREDENTIAL.FIREBASE_API_KEY,
    authDomain: "chat-app-backend-22c3e.firebaseapp.com",
    projectId: "chat-app-backend-22c3e",
    storageBucket: CREDENTIAL.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: "498150725811",
    appId: "1:498150725811:web:5f74f50d9201a57ff2f8c6",
    measurementId: "G-WFWXJQCFNT",
  };
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  return app;
};
const firebaseConfig = getFirebaseConfig();
export default firebaseConfig;
