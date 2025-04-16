import { Request, Response, NextFunction } from "express";
import { CustomError } from "../utils/customError";

export const getCookies = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  try {
    const { token, email, role } = req.cookies;

    if (!token || !email || !role) {
      throw new CustomError("Unauthorized: No cookies found", 401);
    }

    res.status(200).json({
      message: "Cookies retrieved successfully",
      token,
      email, // ✅ Include email for completeness
      role,
    });
  } catch (error) {
    next(error);
  }
};
