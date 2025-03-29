import jwt from "jsonwebtoken";
import "dotenv/config";
import { CustomError } from "./customError";

const secretKey = process.env.JWT_SECRET as string; // Ensure it's a string

export const generateToken = (payload: object, expiresIn: string = "1d") => {
  return jwt.sign(payload, secretKey, { expiresIn } as jwt.SignOptions);
};

export const verifyToken = (token: string) => {
  try {
    return jwt.verify(token, secretKey) as { id: string };
  } catch (err) {
    throw new CustomError("Token Expired", 400);
  }
};
