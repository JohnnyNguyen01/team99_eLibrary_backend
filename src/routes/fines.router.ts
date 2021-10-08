/**
 * Required External Modules and Interfaces
 */
import express, { Request, Response } from "express";
import * as FineService from "../services/fines.service";
import Fine from "../models/fine.model";

/**
 * Router Definition
 */
export const finesRouter = express.Router();

/**
 * Controller Definitions
 */
