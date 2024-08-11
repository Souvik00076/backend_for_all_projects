import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { TDecodeToken } from "../@types/custom";
import { Forbidden } from "../error";
const validateToken = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers["authorization"]?.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "Access token is missing" });
  }
  try {
    // Verify the token using the secret key
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET as string,
    ) as TDecodeToken;
    req.user = decoded;
    if (!decoded) {
      throw new Forbidden("Unauthenticated User");
    }
    // Attach decoded information to the request object
    req.user = decoded;
    // Proceed to the next middleware/handler
    next();
  } catch (error) {
    next(error);
    //later throw error to error handling middleware
  }
};

export default validateToken;
