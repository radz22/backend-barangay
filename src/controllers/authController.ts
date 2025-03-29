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
export const authSignin = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const validatedData: signin = signinSchema.parse(req.body);

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
    res.status(200).json({
      message: "Login successful",
      user: { id: user._id, email: user.email, role: user.role },
    });
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
