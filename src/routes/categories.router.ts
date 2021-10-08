/**
 * Required External Modules and Interfaces
 */
import express, { Request, Response } from "express";
import * as CategoryService from "../services/categories.service";
import Category from "../models/category.model";

/**
 * Router Definition
 */
export const categoriesRouter = express.Router();

/**
 * Controller Definitions
 */
