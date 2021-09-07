// src/middleware/error.middleware.ts

// a variable that contains specific information relevant to 400 Errors
// it is structured using the http-exception.ts class

import HttpException from "../common/http-exception";
import { Request, Response, NextFunction } from "express";

export const errorHandler = (
  error: HttpException,
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const status = error.statusCode || error.status || 500;

  response.status(status).send(error);
};