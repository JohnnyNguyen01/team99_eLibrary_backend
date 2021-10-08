/**
 * Required External Modules and Interfaces
 */
import express, { Request, Response } from "express";
import * as AuthorService from "../services/authors.service";
import Author from "../models/author.model";

/**
 * Router Definition
 */
export const authorsRouter = express.Router();

/**
 * Controller Definitions
 */
