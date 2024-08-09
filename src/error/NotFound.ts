import { StatusCodes } from "http-status-codes";
import { CustomError } from "./CustomError";

export class NotFound extends CustomError {
  public statusCode = StatusCodes.NOT_FOUND;
  constructor(message: string) {
    super(message);
    Object.setPrototypeOf(this, NotFound.prototype);
  }
}
