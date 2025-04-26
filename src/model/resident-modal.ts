import mongoose, { Document, Schema } from "mongoose";
import { ResidentType } from "../types/resident-type";

interface IResident extends ResidentType, Document {}

const ResidentSchema = new Schema<IResident>(
  {
    staffaccountcreate: { type: String, required: false },
    cencusid: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    middlename: { type: String, required: false },
    dateofbirth: { type: String, required: true },
    age: { type: Number, required: true, min: 1 },
    gender: {
      type: String,
      required: true,
      enum: ["female", "male"],
    },
    civilstatus: {
      type: String,
      enum: ["single", "married", "widowed", "seperated"],
      required: true,
    },
    mobilenumber: {
      type: Number,
      required: false,
      min: 1,
    },
    city: { type: String, required: false },
    streetname: { type: String, required: false },
    province: { type: String, required: false },
    descriptor: { type: [Number], required: false },
    archived: { type: Boolean, default: false, required: false },

    // New fields
    citizenship: {
      type: String,
      enum: ["FILIPINO", "DUAL CITIZEN", "NATURALIZED FILIPINO", "FOREIGNER"],
      required: true,
    },
    placeofbirth: { type: String, required: true },
    emailadress: {
      type: String,
      required: true,
      match: [/^\S+@\S+\.\S+$/, "Please use a valid email address"],
    },
    schooltype: {
      type: String,
      enum: ["PUBLIC", "PRIVATE"],
      required: true,
    },
    educationalattainment: {
      type: String,
      enum: [
        "NO GRADE COMPLETED",
        "PRESCHOOL",
        "KINDERGARTEN",
        "GRADE 1 (K TO 12)",
        "GRADE 2 (K TO 12)",
        "GRADE 3 (K TO 12)",
        "GRADE 4 (K TO 12)",
        "GRADE 5 (K TO 12)",
        "GRADE 6 (K TO 12)",
        "GRADE 7 (K TO 12)",
        "GRADE 8 (K TO 12)",
        "GRADE 9 (K TO 12)",
        "GRADE 10 (K TO 12)",
        "GRADE 11 (K TO 12)",
        "GRADE 12 (K TO 12)",
        "GRADE 1 (OLD CURRICULUM)",
        "GRADE 2 (OLD CURRICULUM)",
        "GRADE 3 (OLD CURRICULUM)",
        "GRADE 4 (OLD CURRICULUM)",
        "GRADE 5 (OLD CURRICULUM)",
        "GRADE 6 (OLD CURRICULUM)",
        "GRADE 6 GRADUATE (OLD CURRICULUM)",
        "GRADE 7 GRADUATE (OLD CURRICULUM)",
        "1ST YEAR HIGH SCHOOL (OLD CURRICULUM)",
        "2ND YEAR HIGH SCHOOL (OLD CURRICULUM)",
        "3RD YEAR HIGH SCHOOL (OLD CURRICULUM)",
        "4TH YEAR HIGH SCHOOL (OLD CURRICULUM)",
        "HIGH SCHOOL GRADUATE (OLD CURRICULUM)",
        "1ST YEAR COLLEGE",
        "2ND YEAR COLLEGE",
        "3RD YEAR COLLEGE",
        "4TH YEAR COLLEGE",
        "COLLEGE GRADUATE",
        "POSTGRADUATE STUDIES",
      ],
      required: true,
    },
    employmentstatus: {
      type: String,
      enum: ["employed", "selfemployed", "unemployed", "student", "retired"],
      required: true,
    },
    currentschoolenrollment: {
      type: String,
      enum: ["yes", "no"],
      required: true,
    },
    emergencycontactname: { type: String, required: true },
    emergencycontactnumber: {
      type: Number,
      required: true,
      min: 1,
    },
    relationshiptoemergencycontact: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export const Resident = mongoose.model<IResident>("Resident", ResidentSchema);
