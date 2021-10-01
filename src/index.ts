/**
 * Required External Modules
 */
import firebaseAdmin from "firebase-admin";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import { usersRouter } from "./routes/users.router";
import { booksRouter } from "./routes/books.router";
import { authRouter } from "./routes/auth.router";
import { firebaseConfig, FIREBASE_SERVICE_ACCOUNT, PORT } from "./config";
import { initializeApp } from "firebase/app";

/**
 * App Variables
 */

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

firebaseAdmin.initializeApp({
  credential: firebaseAdmin.credential.cert(FIREBASE_SERVICE_ACCOUNT),
});
export const firebaseApp = initializeApp(firebaseConfig);
export const db: FirebaseFirestore.Firestore = firebaseAdmin.firestore();
export const auth: firebaseAdmin.auth.Auth = firebaseAdmin.auth();
db.settings({ timestampsInSnapshots: true });

// define routes
app.use(usersRouter);
app.use(booksRouter);
app.use(authRouter);

/**
 * Server Activations
 */
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
