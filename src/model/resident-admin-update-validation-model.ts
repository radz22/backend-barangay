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
    age: { type: Number, required: true },
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

    citizenship: { type: String, required: true },
    city: { type: String, required: true },
    currentschoolenrollment: { type: String, required: true },
    educationalattainment: { type: String, required: true },
    emailadress: { type: String, required: true },
    emergencycontactname: { type: String, required: true },
    emergencycontactnumber: { type: Number, required: false },
    employmentstatus: { type: String, required: true },
    placeofbirth: { type: String, required: true },
    relationshiptoemergencycontact: { type: String, required: true },
    schooltype: { type: String, required: true },

    documents: { type: String, required: true },
    reason: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export const ResidentUpdateModel = mongoose.model<IResident>(
  "ResidentUpdate",
  ResidenUpdateSchema
);
