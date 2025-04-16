import mongoose, { Document, Schema } from "mongoose";
import { verificationtype } from "../types/verification-code-type";
interface IVerificationCode extends verificationtype, Document {}

const VerificationCodeSchema = new Schema<IVerificationCode>(
  {
    email: { type: String, required: true },
    code: { type: String, required: true },
    expiresAt: { type: Date, required: true },
  },
  {
    timestamps: true,
  }
);

export const VerificationCode = mongoose.model<IVerificationCode>(
  "VerificationCode",
  VerificationCodeSchema
);
