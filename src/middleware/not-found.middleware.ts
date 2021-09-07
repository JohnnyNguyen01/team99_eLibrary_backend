// src/middleware/not-found.middleware.ts

// a variable that contains specific information relevant to 404 Errors
// it is structured using the http-exception.ts class

import { Request, Response, NextFunction } from "express";

export const notFoundHandler = (
  request: Request,
  response: Response,
  next: NextFunction
) => {

  const message = "Resource not found";

  response.status(404).send(message);
};