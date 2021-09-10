import express, { Request, Response } from "express";
import AuthEmailPassword from "../models/auth.model";
import Result from "../models/result.model";
import * as AuthService from "../services/auth.service";

export const authRouter = express.Router();

/**
 * Router to sign in a user with their email and password
 */
export const signInWithEmailPassword = authRouter.get(
  "/signInWithEmailPassword",
  async (req: Request, res: Response) => {
    const emailPassword: AuthEmailPassword = req.body;
    const credential = await AuthService.loginWithEmailPassword(emailPassword);
    res.send(credential);
  }
);

/**
 * Route to get the current authentication state
 */
export const authState = authRouter.get(
  "/authState",
  async (req: Request, res: Response) => {
    const authState = AuthService.authState();
    res.send(authState);
  }
);
/**
 * Rout to sign out the current user
 */
export const signOut = authRouter.get(
  "/signOut",
  async (req: Request, res: Response) => {
    await AuthService.signOut();
    res.send(new Result(200, "User Signed out successfully", null));
    // TODO: Find out how to check if user is signed out, check current token?
  }
);
