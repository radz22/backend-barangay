import bcrypt from "bcrypt";
import { authModel } from "../model/authModel";
import { IUser, signin, resetpassword } from "../types/user-type";
import { CustomError } from "../utils/customError";
import { generateToken, verifyToken } from "../utils/jwt";
import SendEmail from "../utils/node-mailer";
import "dotenv/config";

export const createUser = async ({ email, password, role }: IUser) => {
  const existingUser = await authModel.findOne({ email });

  if (existingUser) {
    throw new CustomError("Email already exists", 400);
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = await authModel.create({
    email,
    password: hashedPassword,
    role,
  });

  return newUser;
};
export const login = async ({ email, password }: signin) => {
  const user = await authModel.findOne({ email });
  if (!user) {
    throw new CustomError("Invalid email or password", 400);
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new CustomError("Invalid email or password", 400);
  }

  const token = generateToken({ id: user._id });

  return { user, token, status: true };
};
export const userData = async (id: string) => {
  const authToken = verifyToken(id);
  const findUser = await authModel.findById(authToken.id);
  if (!findUser) {
    throw new CustomError("User not found", 404);
  }
  return findUser;
};
export const resetUserPassword = async ({
  userid,
  newpassword,
}: resetpassword) => {
  const hashedNewPassword = await bcrypt.hash(newpassword, 10);

  const updateUser = await authModel.findByIdAndUpdate(
    userid,
    { password: hashedNewPassword },
    { new: true }
  );

  if (!updateUser) {
    throw new CustomError("User not found", 404);
  }

  return {
    message: "Password reset successfully",
  };
};
export const forgotUserPassword = async (email: string) => {
  const findEmail = await authModel.findOne({ email });

  if (!findEmail) {
    throw new CustomError("Account not exists", 404);
  }

  const getUserid = findEmail._id;
  const resetLink = `https://barangay-ly7m.onrender.com/page/reset-password/${getUserid}`;

  const mailOptions = {
    from: process.env.EMAIL,
    to: email,
    subject: "Password Reset Request",
    text: `Hi,\n\nWe received a request to reset your password. Please use the link below to reset your password:\n\n${resetLink}\n\nIf you did not request this, please ignore this email.\n\nBest regards,\nBarangay BonBon`, // Plain text version
    html: `<p>Hi,</p>
           <p>We received a request to reset your password. Please use the link below to reset your password:</p>
           <p><a href="${resetLink}" target="_blank" style="color: blue;">Reset Password</a></p>
           <p>If you did not request this, please ignore this email.</p>
           <p>Best regards,<br>BARANGAY</p>`,
  };
  const emailSent = await SendEmail(mailOptions);

  if (!emailSent) {
    throw new CustomError("Email not sent", 404);
  }

  return {
    message: "Email sent successfully",
  };
};
