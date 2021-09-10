import * as dotenv from "dotenv";
import * as serviceAccountRaw from "../serviceAccount.json";

dotenv.config();
export const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
};

export const PORT: number = parseInt(process.env.PORT as string, 10);

export const FIREBASE_SERVICE_ACCOUNT = JSON.parse(
  JSON.stringify(serviceAccountRaw)
);
