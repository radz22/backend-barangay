import mongoose, { Document, Schema } from "mongoose";
import { reasonDeclineType } from "../types/reason-decline-type";
interface IReason extends reasonDeclineType, Document {}

const reasonMessageSchema = new Schema<IReason>(
  {
    reason: { type: String, required: true },
    reasonid: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export const reasonMessageModel = mongoose.model<IReason>(
  "reasonMessageDecline",
  reasonMessageSchema
);
