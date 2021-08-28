/**
 * Required External Modules
 */

import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";

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

firebaseAdmin.initializeApp({ credential: process.env.TEAM99_GCP_KEY });
export const db = firebaseAdmin.firestore();

/**
 * Server Activations
 */
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
