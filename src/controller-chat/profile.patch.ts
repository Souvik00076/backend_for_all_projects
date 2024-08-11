import { NextFunction, Request, Response } from "express";
import { FilterQuery } from "mongoose";
import { TUser } from "../@types/schema_types";
import { USER_STATUS } from "../constants";
type TBody = {
  status: string;
};
export const chat_patchProfile = async (
  { user, body: { status } }: Request<unknown, unknown, TBody, unknown>,
  res: Response,
  next: NextFunction,
) => {
  try {
    const filter: FilterQuery<TUser> = {
      _id: user.userId,
    };

    if (status) {
    }
  } catch (error) {
    next(error);
  }
};
