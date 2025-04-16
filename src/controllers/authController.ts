import { Request, Response, NextFunction } from "express";
import {
  createUser,
  login,
  userData,
  resetUserPassword,
  forgotUserPassword,
} from "../services/authService";
import { IUser, signin } from "../types/user-type";
import { signupSchema, signinSchema } from "../validation/auth-validation";
import { authModel } from "../model/authModel";
import { CustomError } from "../utils/customError";
import { generateVerificationCode } from "../utils/generate-verification-code";
import SendEmail from "../utils/node-mailer";
import { VerificationCode } from "../model/verification-code.model";
export const authSignin = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { email, password } = req.body;
    const validatedData: signin = signinSchema.parse({ email, password });
    await login(validatedData);
    const code = generateVerificationCode();
    const expiresAt = new Date(Date.now() + 5 * 60 * 1000);

    const mailOptions = {
      from: process.env.EMAIL,
      to: email,
      subject: "Your Verification Code",
      text: `Your verification code is: ${code}`,
      html: `<p>Your verification code is: <strong>${code}</strong></p>`,
    };

    const emailSent = await SendEmail(mailOptions);
    if (!emailSent) {
      throw new CustomError("Email not sent", 404);
    }
    await VerificationCode.create({ email, code, expiresAt });
    res.status(200).json({ message: "OTP sent in your email" });
  } catch (error) {
    next(error);
  }
};
export const authSignup = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const validatedData: IUser = signupSchema.parse(req.body);

    const newUser = await createUser(validatedData);

    res.status(201).json({
      message: "User registered successfully",
      user: {
        id: newUser._id,
        email: newUser.email,
        role: newUser.role,
      },
    });
  } catch (error) {
    next(error);
  }
};

export const authLogout = (req: Request, res: Response) => {
  res.clearCookie("token", { httpOnly: true, secure: true, sameSite: "none" });
  res.clearCookie("email", { httpOnly: true, secure: true, sameSite: "none" });
  res.clearCookie("role", { httpOnly: true, secure: true, sameSite: "none" });

  res.status(200).json({ message: "Logout successful" });
};

export const userAccountData = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { id } = req.params;

    const getData = await userData(id);

    res.status(200).json(getData);
  } catch (error) {
    next(error);
  }
};

export const resetPassword = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { id } = req.params;
    const { newpassword } = req.body;

    const { message } = await resetUserPassword({
      userid: id,
      newpassword,
    });

    res.status(200).json({ message: message });
  } catch (error) {
    next(error);
  }
};
export const forgotPassword = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { email } = req.body;

    const { message } = await forgotUserPassword(email);

    res.status(200).json({ message: message });
  } catch (error) {
    next(error);
  }
};

export const getAccountData = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const getAllData = await authModel.find({ role: "staff" });

    res.status(200).json({ data: getAllData });
  } catch (error) {
    next(error);
  }
};

export const getAccountAdminOnly = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const getAllData = await authModel.find({ role: "admin" });

    res.status(200).json({ data: getAllData });
  } catch (error) {
    next(error);
  }
};
export const deleteAccount = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { id } = req.params;

    const deletedAccount = await authModel.findByIdAndDelete({ _id: id });

    if (!deletedAccount) {
      throw new CustomError("Account not found", 404);
    }

    res.status(200).json({ message: "Account deleted" });
  } catch (error) {
    next(error);
  }
};
