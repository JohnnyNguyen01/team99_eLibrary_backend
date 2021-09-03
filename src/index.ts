/**
 * Required External Modules
 */
import * as firestore from "@google-cloud/firestore";
import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";

import { addUser, usersRouter } from "./routes/users.router";

import { errorHandler } from "./middleware/error.middleware";
import { notFoundHandler } from "./middleware/not-found.middleware";

dotenv.config();

/**
 * App Variables
 */
if (!process.env.PORT) {
  process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);
const firebaseAdmin = require("firebase-admin");
const app = express();

/**
 *  App Configuration
 */
app.use(helmet());
app.use(cors());
app.use(express.json());

// test user-service
app.use("/addUser", addUser);

app.use(errorHandler);
app.use(notFoundHandler);

/**
 *  Firestore initialization
 */
firebaseAdmin.initializeApp({ Credential: process.env.TEAM99_GCP_KEY });
export const db: FirebaseFirestore.Firestore = firebaseAdmin.firestore();
db.settings({ timestampsInSnapshots: true });
export default db;

/**
 * Server Activations
 */
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
