import { StatusCodes } from "http-status-codes";
import { CustomError } from "./CustomError";

export class BadRequest extends CustomError {
  public statusCode = StatusCodes.BAD_REQUEST;
  constructor(message: string) {
    super(message);
    Object.setPrototypeOf(this, BadRequest.prototype);
  }
}
