import mongoose, { Document, Schema } from "mongoose";
import { facedetectiontype } from "../types/image-detection-type";
interface IFace extends facedetectiontype, Document {}

const FaceSchema = new Schema<IFace>(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    descriptor: { type: [Number], required: true },
  },
  {
    timestamps: true,
  }
);

export const faceModel = mongoose.model<IFace>("face", FaceSchema);
