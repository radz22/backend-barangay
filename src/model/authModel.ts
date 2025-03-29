import mongoose, { Document, Schema, Model } from "mongoose";
import { IUser } from "../types/user-type";

interface IUserDocument extends IUser, Document {}

const authSchema: Schema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
    role: {
      type: String,
      enum: ["user", "staff", "admin"],
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const authModel: Model<IUserDocument> = mongoose.model<IUserDocument>(
  "Auth",
  authSchema
);
