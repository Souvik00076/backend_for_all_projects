import { Response } from "express";
type TData = {
  [key: string]: unknown | TData;
};
export const sendSuccessResponse = (
  res: Response,
  message: string,
  data?: TData,
) => {
  res.status(200).json({
    success: true,
    message,
    data,
  });
};
