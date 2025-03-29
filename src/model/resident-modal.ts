import mongoose, { Document, Schema } from "mongoose";
import { ResidentType } from "../types/resident-type";
interface IResident extends ResidentType, Document {}

const ResidentSchema = new Schema<IResident>(
  {
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
  },
  {
    timestamps: true,
  }
);

export const Resident = mongoose.model<IResident>("Resident", ResidentSchema);
