// src/middleware/error.middleware.ts

import HttpException from "../common/http-exception";
import { Request, Response, NextFunction } from "express";

/**
 * a variable that contains specific information relevant to 400 Errors
 * it is structured using the http-exception.ts class
 */
export const errorHandler = (
  error: HttpException,
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const status = error.statusCode || error.status || 500;

  response.status(status).send(error);
};