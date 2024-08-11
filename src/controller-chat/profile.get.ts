import { NextFunction, Request, Response } from "express";
import { User } from "../model";
import { DbError } from "../error";
import { sendSuccessResponse } from "../utils";
export const chatapp_getProfile = async (
  { user }: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const currentUser = await User.findById(user.userId);
    if (!currentUser) {
      throw new DbError("Invalid User");
    }
    const basicInfo = {
      bgImage: currentUser.backgroundImage,
      profilePhoto: currentUser.profilePhoto,
      status: currentUser.status,
      userName: currentUser.userName,
    };
    const personalInfo = {
      userName: currentUser.userName,
      email: currentUser.email,
      location: currentUser.location,
    };
    const privacyInfo = {
      displayStatus: currentUser.displayStatus,
      showLastSeen: currentUser.showLastSeen,
      readRecipient: currentUser.readRecipient,
    };
    sendSuccessResponse(res, "GET OK", {
      basicInfo,
      personalInfo,
      privacyInfo,
    });
  } catch (error) {
    next(error);
  }
};
