import { DocumentData } from "@google-cloud/firestore";
import { NextFunction, Request, Response } from "express";

/**
 * User Controller Interface
 */
export default interface IUserController {
  /**
   *
   * @param req
   * @param res
   * @param next
   */
  createUser(
    req: Request,
    res: Response,
    next: NextFunction
  ): DocumentData | undefined;

  getUser(
    req: Request,
    res: Response,
    next: NextFunction
  ): DocumentData | undefined;

  updateUserInfo(
    req: Request,
    res: Response,
    next: NextFunction
  ): DocumentData | undefined;

  deleteUser(
    req: Request,
    res: Response,
    next: NextFunction
  ): DocumentData | undefined;
}
