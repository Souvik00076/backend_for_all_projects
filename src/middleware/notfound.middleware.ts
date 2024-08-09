import { Response, Request, NextFunction } from "express";

export const notFoundHandler = (
  err: unknown,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  res.status(400).json({
    success: false,
    message: err instanceof Error ? err.message : "Route Not found",
  });
};
