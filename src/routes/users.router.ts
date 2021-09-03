/**
 * Required External Modules and Interfaces
 */
import express, { Request, Response } from "express";
import * as UserService from "../services/user.service";
import User, { UserType } from "../models/user.model";

/**
 * Router Definition
 */
export const usersRouter = express.Router();

/**
 * Controller Definitions
 */

// Create User
export const addUser = usersRouter.post(
  "/addUser",
  async (req: Request, res: Response) => {
    try {
      const response = UserService.createUser(req.body);
      res.status(201).json(response);
    } catch (error) {
      console.log(error);
    }
  }
);

// GET items

// GET items/:id

// POST items

// PUT items/:id

// DELETE items/:id
