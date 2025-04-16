import { Request, Response, NextFunction } from "express";
import { CustomError } from "../utils/customError";
import { VerificationCode } from "../model/verification-code.model";
import "dotenv/config";
import { login } from "../services/authService";
import { signin } from "../types/user-type";
import { signinSchema } from "../validation/auth-validation";

export const verifyCode = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { email, code, password } = req.body;
    const record = await VerificationCode.findOne({ email, code });
    if (!record) {
      throw new CustomError("Invalid OTP", 400);
    }
    if (record.expiresAt < new Date()) {
      throw new CustomError("OTP has expired", 400);
    }
    const validatedData: signin = signinSchema.parse({ email, password });

    const { user, token } = await login(validatedData);

    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "none",
      maxAge: 24 * 60 * 60 * 1000,
    });

    res.cookie("email", user.email, {
      httpOnly: true,
      secure: true,
      sameSite: "none",
      maxAge: 24 * 60 * 60 * 1000,
    });
    res.cookie("role", user.role, {
      httpOnly: true,
      secure: true,
      sameSite: "none",
      maxAge: 24 * 60 * 60 * 1000,
    });
    await VerificationCode.deleteOne({ _id: record._id });
    res.status(200).json({ message: "Login successful", role: user.role });
  } catch (error) {
    next(error);
  }
};
