import { NextFunction, Request, Response } from "express";
import { User } from "../model";
import jwt from "jsonwebtoken";
import { sendSuccessResponse } from "../utils";
import { NotFound } from "../error";
import { uuid } from "uuidv4";
type TRequest = {
  email: string;
  password: string;
  userName?: string;
};
export const loginAuth = async (
  { body: { email, password } }: Request<unknown, unknown, TRequest, unknown>,
  res: Response,
  next: NextFunction,
) => {
  try {
    if (!email || !password) {
      throw new NotFound("User name or password not found");
    }
    const user = await User.findOne({
      email,
    });
    if (!user) {
      throw new NotFound("User not found ");
    }
    const isMatch = user.isMatch(password);
    if (!isMatch) {
      throw new NotFound("Invalid username/password");
    }
    const token = jwt.sign(
      {
        email,
        userName: user.userName,
      },
      process.env.JWT_SECRET as string,
      { expiresIn: "1h" },
    );
    const refreshToken = uuid();
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: false,
      maxAge: 2 * 24 * 60 * 60,
    });
    sendSuccessResponse(res, "Login OK", {
      "x-access-token": token,
    });
  } catch (error) {
    next(error);
  }
};
export const registerAuth = async (
  {
    body: { email, password, userName },
  }: Request<unknown, unknown, TRequest, unknown>,
  res: Response,
  next: NextFunction,
) => {
  try {
    await User.create({
      userName,
      email,
      password,
    });

    sendSuccessResponse(res, "POST OK");
  } catch (error) {
    next(error);
  }
};
