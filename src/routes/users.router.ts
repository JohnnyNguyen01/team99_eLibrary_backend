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

/**
 * Route to add a user to the database
 */
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

/**
 * Route to retrieve a user from the databases via the uid
 */
export const getUserByUID = usersRouter.get(
  "/getUserById/:uid",
  async (req: Request, res: Response) => {
    try {
      const uid = req.params;
      const result = await UserService.getUserByUID(uid.uid);
      res.send(`${result.message} \n payload: ${result.payload}`);
    } catch (error) {
      res.send(error);
    }
  }
);


/**
 * Route to delete a user from the databases via the uid
 */
export const deleteUserByUID = usersRouter.delete(
  "/deleteUserById/:uid",
  async (req: Request, res: Response) => {
    try {
      const uid = req.params;
      const result = await UserService.deleteUserByUID(uid.uid);
      res.send(`${result.message} \n payload: ${result.payload}`);
    } catch (error) {
      res.send(error);
    }
  }
);

/**
 * Route to delete a user from the databases via the uid
 */
export const deleteAllUsers = usersRouter.delete(
  "/deleteAllUsers",
  async (req: Request, res: Response) => {
    try {
      const result = await UserService.deleteAllUsers();
      res.send(`${result.message} \n payload: ${result.payload}`);
    } catch (error) {
      res.send(error);
    }
  }
);

/**
 * Route to delete a user from the databases via the uid
 */
export const getAllUsers = usersRouter.get(
  "/getAllUsers",
  async (req: Request, res: Response) => {
    try {
      const result = await UserService.getAllUsers();
      res.send(`${result.message} \n payload: ${result.payload}`);
    } catch (error) {
      res.send(error);
    }
  }
);

// GET items/:id

// POST items

// PUT items/:id

// DELETE items/:id
