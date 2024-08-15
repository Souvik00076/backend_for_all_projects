import { NextFunction, Request, Response } from "express";
import { FilterQuery, UpdateQuery } from "mongoose";
import { TUser } from "../@types/schema_types";
import { USER_STATUS } from "../constants";
import { BadRequest } from "../error";
import { sendSuccessResponse } from "../utils";
import { User } from "../model";
type TBody = {
  status: string;
  userName: string;
};
type TQuery = {
  lastSeen: string;
  readRecipient: string;
  displayStatus: string;
};
export const chat_patchProfile = async (
  {
    user,
    body: { status, userName },
    query: { lastSeen, readRecipient, displayStatus },
  }: Request<unknown, unknown, TBody, TQuery>,
  res: Response,
  next: NextFunction,
) => {
  try {
    const filter: FilterQuery<TUser> = {
      _id: user.userId,
    };
    const updateParam: UpdateQuery<TUser> = {};
    if (status) {
      const flag = status.toUpperCase();
      console.log(status);
      if (
        flag !== USER_STATUS.ACTIVE &&
        flag !== USER_STATUS.AWAY &&
        flag !== USER_STATUS.INACTIVE
      ) {
        throw new BadRequest("Invalid Parameter");
      }
      updateParam["status"] = flag;
    }
    if (userName) {
      if (userName.length === 0) {
        throw new BadRequest("Invalid User Name");
      }
      updateParam["userName"] = userName;
    }
    if (lastSeen) {
      const flag = lastSeen.toLowerCase();
      if (flag !== "true" && flag !== "false") {
        throw new BadRequest("Invalid parameter");
      }
      updateParam["showLastSeen"] = flag;
    }
    if (readRecipient) {
      const flag = readRecipient.toLowerCase();
      if (flag !== "true" && flag !== "false") {
        throw new BadRequest("Invalid parameter");
      }
      updateParam["readRecipient"] = flag;
    }
    if (displayStatus) {
      const flag = displayStatus.toLowerCase();
      if (flag !== "true" && flag !== "false") {
        throw new BadRequest("Invalid parameter");
      }
      updateParam["displayStatus"] = flag;
    }
    await User.findOneAndUpdate(filter, updateParam, { upsert: false });
    sendSuccessResponse(res, "PATCH OK");
  } catch (error) {
    next(error);
  }
};
