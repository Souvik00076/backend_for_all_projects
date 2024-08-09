import { StatusCodes } from "http-status-codes";
import { CustomError } from "./CustomError";

export class Forbidden extends CustomError {
  public statusCode = StatusCodes.FORBIDDEN;
  constructor(message: string) {
    super(message);
    Object.setPrototypeOf(this, Forbidden.prototype);
  }
}
