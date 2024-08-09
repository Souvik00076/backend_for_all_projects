import { Request, Response } from "express";
import { USER_STATUS } from "../../constants";
type TRequest = {
  status: USER_STATUS;
  location: string;
  description: string;
  showLastSeen: boolean;
  displayStatus: boolean;
  readRecipient: boolean;
};
export const patchProfile = async (
  {
    body: {
      status,
      location,
      description,
      showLastSeen,
      displayStatus,
      readRecipient,
    },
  }: Request<unknown, unknown, TRequest, unknown>,
  res: Response,
) => {
  try {
  } catch (error) {}
};
