import { CustomError } from "./CustomError";

export class DbError extends CustomError {
  public statusCode = 500;
  constructor(message: string) {
    super(message);
    Object.setPrototypeOf(this, DbError.prototype);
  }
}
