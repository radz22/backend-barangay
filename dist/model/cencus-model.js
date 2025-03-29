"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.cencusModel = void 0;
const mongoose_1 = __importStar(require("mongoose"));
const CensusSchema = new mongoose_1.Schema({
    dateofcencus: { type: String, required: false },
    areaofcencusstreet: { type: String, required: false },
    firstname: { type: String, required: true },
    middlename: { type: String, required: true },
    lastname: { type: String, required: true },
    birthday: { type: String, required: true },
    age: { type: Number, required: true, min: 1 },
    gender: {
        type: String,
        enum: ["female", "male"],
        required: true,
    },
    civilstatus: {
        type: String,
        enum: ["single", "married", "widowed", "seperated"], // Note: Keep same spelling as Zod
        required: true,
    },
    currentschoolenrollment: {
        type: String,
        enum: ["yes", "no"],
        required: true,
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
        required: true,
    },
    employmentstatus: {
        type: String,
        enum: ["employed", "selfemployed", "unemployed", "student", "retired"],
        required: true,
    },
    occupation: { type: String, required: true },
    housenumber: { type: Number, required: true, min: 1 },
    streetname: { type: String, required: true },
    barangay: { type: String, required: true },
    city: { type: String, required: true },
    province: { type: String, required: true },
    housetype: {
        type: String,
        enum: ["owner", "renter", "sharer", "informal", "settler"],
        required: true,
    },
    healthstatus: {
        type: String,
        enum: ["good", "fair", "poor"],
        required: true,
    },
    disabilitystatus: {
        type: String,
        enum: ["yes", "no"],
        required: true,
    },
    disabilitytype: { type: String },
    existinghealthcondition: { type: String, required: true },
    fullyimmunized: {
        type: String,
        enum: ["yes", "no"],
        required: true,
    },
    covid19vaccination: {
        type: String,
        enum: ["yes", "no"],
        required: true,
    },
    housingtype: {
        type: String,
        enum: ["concrete", "semi concreate", "wooden"], // Matches Zod exactly
        required: true,
    },
    yearofconstructed: { type: String },
    residentlived: {
        type: String,
        enum: ["yes", "no"],
        required: true,
    },
    barangayresidence: { type: String },
    cityresidence: { type: String },
    municipalityresidence: { type: String },
    provinceresidence: { type: String },
    reasonformoving: { type: String },
    mobilenumber: { type: Number, required: true, min: 1 },
    emergencycontactname: { type: String, required: true },
    emergencycontactnumber: { type: Number, required: true, min: 1 },
    relationshiptoemergencycontact: { type: Number, required: true, min: 1 },
    numberofhousemembers: { type: Number, required: true, min: 1 },
    householdMembers: {
        type: [
            {
                relationship: {
                    type: String,
                    enum: ["spouse", "child", "parent", "sibling", "grandparent"],
                    required: true,
                },
                firstname: { type: String, required: true },
                middlename: { type: String, required: true },
                lastname: { type: String, required: true },
                birthday: { type: String, required: true },
                age: { type: Number, required: true, min: 1 },
                gender: {
                    type: String,
                    enum: ["female", "male"],
                    required: true,
                },
                civilstatus: {
                    type: String,
                    enum: ["single", "married", "widowed", "seperated"],
                    required: true,
                },
                currentschoolenrollment: {
                    type: String,
                    enum: ["yes", "no"],
                    required: true,
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
                    required: true,
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
                    required: true,
                },
                occupation: { type: String, required: true },
                healthstatus: {
                    type: String,
                    enum: ["good", "fair", "poor"],
                    required: true,
                },
                disabilitystatus: {
                    type: String,
                    enum: ["yes", "no"],
                    required: true,
                },
                disabilitytype: { type: String },
                existinghealthcondition: { type: String, required: true },
                fullyimmunized: {
                    type: String,
                    enum: ["yes", "no"],
                    required: true,
                },
                covid19vaccination: {
                    type: String,
                    enum: ["yes", "no"],
                    required: true,
                },
            },
        ],
        required: false, // Matches Zod's .optional()
    },
}, {
    timestamps: true,
});
// Add any pre-save hooks or methods here if needed
exports.cencusModel = mongoose_1.default.model("Census", CensusSchema);
