"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CencusContinueSchema = void 0;
const zod_1 = require("zod");
exports.CencusContinueSchema = zod_1.z.object({
    conductcencus: zod_1.z.string().optional(),
    dateofcencus: zod_1.z.string().optional(),
    areaofcencusstreet: zod_1.z.string().optional(),
    firstname: zod_1.z.string().optional(),
    middlename: zod_1.z.string().optional(),
    lastname: zod_1.z.string().optional(),
    birthday: zod_1.z.string().optional(),
    age: zod_1.z.number().optional(),
    gender: zod_1.z.enum(["female", "male"]).optional(),
    civilstatus: zod_1.z.enum(["single", "married", "widowed", "seperated"]).optional(),
    currentschoolenrollment: zod_1.z.enum(["yes", "no"]).optional(),
    educationalattainment: zod_1.z
        .enum([
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
    ])
        .optional(),
    employmentstatus: zod_1.z
        .enum(["employed", "selfemployed", "unemployed", "student", "retired"])
        .optional(),
    occupation: zod_1.z.string().optional(),
    housenumber: zod_1.z.number().optional(),
    streetname: zod_1.z.string().optional(),
    barangay: zod_1.z.string().optional(),
    city: zod_1.z.string().optional(),
    province: zod_1.z.string().optional(),
    housetype: zod_1.z
        .enum(["owner", "renter", "sharer", "informal", "settler"])
        .optional(),
    healthstatus: zod_1.z.enum(["good", "fair", "poor"]).optional(),
    disabilitystatus: zod_1.z.enum(["yes", "no"]).optional(),
    disabilitytype: zod_1.z.string().optional().optional(),
    existinghealthcondition: zod_1.z.string().optional(),
    fullyimmunized: zod_1.z.enum(["yes", "no"]).optional(),
    covid19vaccination: zod_1.z.enum(["yes", "no"]).optional(),
    housingtype: zod_1.z.enum(["concrete", "semi concreate", "wooden"]).optional(),
    yearofconstructed: zod_1.z.string().optional().optional(),
    residentlived: zod_1.z.enum(["yes", "no"]).optional(),
    barangayresidence: zod_1.z.string().optional().optional(),
    cityresidence: zod_1.z.string().optional(),
    municipalityresidence: zod_1.z.string().optional().optional(),
    provinceresidence: zod_1.z.string().optional().optional(),
    reasonformoving: zod_1.z.string().optional().optional(),
    mobilenumber: zod_1.z.number().optional(),
    emailaddress: zod_1.z.string().email().optional(),
    emergencycontactname: zod_1.z.string().optional(),
    emergencycontactnumber: zod_1.z.number().optional(),
    relationshiptoemergencycontact: zod_1.z.number().optional(),
    numberofhousemembers: zod_1.z.number().optional(),
    householdMembers: zod_1.z
        .array(zod_1.z.object({
        relationship: zod_1.z
            .enum(["spouse", "child", "parent", "sibling", "grandparent"])
            .optional(),
        firstname: zod_1.z.string().optional(),
        middlename: zod_1.z.string().optional(),
        lastname: zod_1.z.string().optional(),
        birthday: zod_1.z.string().optional(),
        age: zod_1.z.number().optional(),
        gender: zod_1.z.enum(["female", "male"]).optional(),
        civilstatus: zod_1.z
            .enum(["single", "married", "widowed", "seperated"])
            .optional(),
        currentschoolenrollment: zod_1.z.enum(["yes", "no"]).optional(),
        educationalattainment: zod_1.z
            .enum([
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
        ])
            .optional(),
        employmentstatus: zod_1.z
            .enum([
            "employed",
            "selfemployed",
            "unemployed",
            "student",
            "retired",
        ])
            .optional(),
        occupation: zod_1.z.string().optional(),
        healthstatus: zod_1.z.enum(["good", "fair", "poor"]).optional(),
        disabilitystatus: zod_1.z.enum(["yes", "no"]).optional(),
        disabilitytype: zod_1.z.string().optional().optional(),
        existinghealthcondition: zod_1.z.string().optional(),
        fullyimmunized: zod_1.z.enum(["yes", "no"]).optional(),
        covid19vaccination: zod_1.z.enum(["yes", "no"]).optional(),
    }))
        .optional(),
});
