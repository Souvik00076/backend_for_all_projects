import { CustomError } from "../error/CustomError";
import { Response } from "express";
export const sendErrorResponse = (res: Response, error: CustomError) => {
  res.status(error.statusCode).json({
    message: error.message,
    success: false,
  });
};
