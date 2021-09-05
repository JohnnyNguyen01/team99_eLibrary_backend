/**
 * Required External Modules
 */
import firebaseAdmin from "firebase-admin";
import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import { usersRouter } from "./routes/users.router";
import { booksRouter } from "./routes/books.router";

dotenv.config();

/**
 * App Variables
 */
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
};

const PORT: number = parseInt(process.env.PORT as string, 10);
if (!PORT) {
  process.exit(1);
}

const app = express();

/**
 *  App Configuration
 */
app.use(helmet());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/**
 *  Firestore initialization
 * TODO: Refactor and put into somewhere correct [Johnny]
 */
const serviceAccount = require("../serviceAccount.json");
firebaseAdmin.initializeApp({
  credential: firebaseAdmin.credential.cert(serviceAccount),
});
export const db: FirebaseFirestore.Firestore = firebaseAdmin.firestore();
db.settings({ timestampsInSnapshots: true });

// define routes
app.use(usersRouter);
app.use(booksRouter);

/**
 * Server Activations
 */
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
