import mongoose, { Document, Schema } from "mongoose";
import { residentUpdate } from "../types/resident-update-type";
interface IResident extends residentUpdate, Document {}

const ResidenUpdateSchema = new Schema<IResident>(
  {
    updateid: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    middlename: { type: String },
    dateofbirth: { type: String, required: true },
    gender: { type: String, required: true, enum: ["female", "male"] },
    civilstatus: {
      type: String,
      enum: ["single", "married", "widowed", "separated"],
      required: true,
    },
    nationality: { type: String, required: false },
    mobilenumber: { type: Number, required: false },
    address: { type: String, required: false },
    streetname: { type: String, required: false },
    province: { type: String, required: false },
    cloudinaryphoto: { type: String, required: true },
    cloudinaryid: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export const ResidentUpdateModel = mongoose.model<IResident>(
  "ResidentUpdate",
  ResidenUpdateSchema
);
