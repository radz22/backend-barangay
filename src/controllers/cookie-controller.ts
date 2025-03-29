import { Request, Response, NextFunction } from "express";
import { CustomError } from "../utils/customError";
export const getCookies = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  try {
    const token = req.cookies.token;
    const email = req.cookies.email;
    const role = req.cookies.role;

    if (!token || !email || !role) {
      throw new CustomError("Unauthorized: No cookies found", 404);
    }

    res.status(200).json({
      message: "Cookies retrieved successfully",
      token,
      role,
    });
  } catch (error) {
    next(error);
  }
};
