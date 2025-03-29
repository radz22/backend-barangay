import mongoose, { Schema, Document, Model } from "mongoose";
import { cencusContinueType } from "../types/cencus-continue-type";
interface ICencusDocument extends cencusContinueType, Document {}

const CencusContinueSchema: Schema = new Schema(
  {
    conductcencus: { type: String, required: false },
    dateofcencus: { type: String, required: false },
    areaofcencusstreet: { type: String, required: false },
    firstname: { type: String, required: false },
    middlename: { type: String, required: false },
    lastname: { type: String, required: false },
    birthday: { type: String, required: true },
    age: { type: String, required: false },
    gender: { type: String, enum: ["female", "male"], required: false },
    civilstatus: {
      type: String,
      enum: ["single", "married", "widowed", "separated"],
      required: true,
    },
    currentschoolenrollment: {
      type: String,
      enum: ["yes", "no"],
      required: false,
    },
    educationalattainment: {
      type: String,
      enum: [
        "no formal education",
        "elementary undergraduate",
        "elementary graduate",
        "high school undergraduate",
        "high school graduate",
        "senior high school undergraduate",
        "senior high school graduate - STEM",
        "senior high school graduate - HUMSS",
        "senior high school graduate - TVL",
        "college undergraduate",
        "college graduate",
        "master's degree",
        "doctorate degree",
        "TESDA-certified courses",
      ],
      required: false,
    },
    employmentstatus: {
      type: String,
      enum: ["employed", "selfemployed", "unemployed", "student", "retired"],
      required: false,
    },
    occupation: { type: String, required: false },
    housenumber: { type: String, required: false },
    streetname: { type: String, required: false },
    barangay: { type: String, required: false },
    city: { type: String, required: false },
    province: { type: String, required: false },
    housetype: {
      type: String,
      enum: ["owner", "renter", "sharer", "informal", "settler"],
      required: false,
    },
    healthstatus: {
      type: String,
      enum: ["good", "fair", "poor"],
      required: false,
    },
    disabilitystatus: { type: String, enum: ["yes", "no"], required: false },
    disabilitytype: { type: String, required: false },
    existinghealthcondition: { type: String, required: false },
    fullyimmunized: { type: String, enum: ["yes", "no"], required: false },
    covid19vaccination: { type: String, enum: ["yes", "no"], required: false },
    housingtype: {
      type: String,
      enum: ["concrete", "semi concreate", "wooden"], // Match Zod exactly
      required: true,
    },
    yearofconstructed: { type: String, required: false },
    residentlived: { type: String, enum: ["yes", "no"], required: false },
    barangayresidence: { type: String, required: false },
    cityresidence: { type: String, required: false },
    municipalityresidence: { type: String, required: false },
    provinceresidence: { type: String, required: false },
    reasonformoving: { type: String, required: false },

    mobilenumber: { type: String, required: false }, // Changed from Number to String
    emailaddress: { type: String, required: false },
    emergencycontactname: { type: String, required: false },
    emergencycontactnumber: { type: String, required: false }, // Changed from Number to String
    relationshiptoemergencycontact: { type: String, required: false }, // Changed from Number to String
    numberofhousemembers: { type: Number, required: false },
    householdMembers: [
      {
        relationship: {
          type: String,
          enum: ["spouse", "child", "parent", "sibling", "grandparent"],
          required: false,
        },
        firstname: { type: String, required: false },
        middlename: { type: String, required: false },
        lastname: { type: String, required: false },
        birthday: { type: Date, required: false },
        age: { type: Number, required: false },
        gender: { type: String, enum: ["female", "male"], required: false },
        civilstatus: {
          type: String,
          enum: ["single", "married", "widowed", "separated"], // Fixed spelling
          required: true,
        },

        currentschoolenrollment: {
          type: String,
          enum: ["yes", "no"],
          required: false,
        },
        educationalattainment: {
          type: String,
          enum: [
            "no formal education",
            "elementary undergraduate",
            "elementary graduate",
            "high school undergraduate",
            "high school graduate",
            "senior high school undergraduate",
            "senior high school graduate - STEM",
            "senior high school graduate - HUMSS",
            "senior high school graduate - TVL",
            "college undergraduate",
            "college graduate",
            "master's degree",
            "doctorate degree",
            "TESDA-certified courses",
          ],
          required: false,
        },
        employmentstatus: {
          type: String,
          enum: [
            "employed",
            "selfemployed",
            "unemployed",
            "student",
            "retired",
          ],
          required: false,
        },
        occupation: { type: String, required: false },
        healthstatus: {
          type: String,
          enum: ["good", "fair", "poor"],
          required: false,
        },
        disabilitystatus: {
          type: String,
          enum: ["yes", "no"],
          required: false,
        },
        disabilitytype: { type: String, required: false },
        existinghealthcondition: { type: String, required: false },
        fullyimmunized: { type: String, enum: ["yes", "no"], required: false },
        covid19vaccination: {
          type: String,
          enum: ["yes", "no"],
          required: false,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

export const cencusContinueModel: Model<ICencusDocument> =
  mongoose.model<ICencusDocument>("CensusContinue", CencusContinueSchema);
