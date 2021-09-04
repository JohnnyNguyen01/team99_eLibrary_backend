/**
 * Required External Modules and Interfaces
 */
import express, { Request, Response } from "express";
import * as UserService from "../services/user.service";
import User from "../models/user.model";

/**
 * Router Definition
 */
export const usersRouter = express.Router();

/**
 * Controller Definitions
 */

// Create User
export const addUser = usersRouter.post(
  "/add-user",
  async (req: Request, res: Response) => {
    try {
      const userReq: User = req.body;
      const result = await UserService.createUser(userReq);
      res.status(201).json(res);
      return res.send(result.message);
    } catch (error) {
      console.log(error);
      return res.send(`Call was unsuccessful: ${error}`);
    }
  }
);

// GET items

// GET items/:id

// POST items

// PUT items/:id

// DELETE items/:id
