"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CencusSchema = void 0;
const zod_1 = require("zod");
exports.CencusSchema = zod_1.z.object({
    dateofcencus: zod_1.z.string().optional(),
    areaofcencusstreet: zod_1.z.string().optional(),
    firstname: zod_1.z.string().min(1, "First Name is Required"),
    middlename: zod_1.z.string().min(1, "Middle Name is Required"),
    lastname: zod_1.z.string().min(1, "Last Name is Required"),
    birthday: zod_1.z.string().min(1, "Birthday is Required"),
    age: zod_1.z.number().min(1, "Age is Required"),
    gender: zod_1.z.enum(["female", "male"], {
        required_error: "Gender is Required",
    }),
    civilstatus: zod_1.z.enum(["single", "married", "widowed", "seperated"], {
        required_error: "Civil Status is Required",
    }),
    currentschoolenrollment: zod_1.z.enum(["yes", "no"], {
        required_error: "Current School Enrollment is Required",
    }),
    educationalattainment: zod_1.z.enum([
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
    ], {
        required_error: "Educational Attainment is Required",
    }),
    employmentstatus: zod_1.z.enum(["employed", "selfemployed", "unemployed", "student", "retired"], {
        required_error: "Employment Status is Required",
    }),
    occupation: zod_1.z.string().min(1, "Occupation is Required"),
    housenumber: zod_1.z.number().min(1, "House Number Required"),
    streetname: zod_1.z.string().min(1, "Street Name Required"),
    barangay: zod_1.z.string().min(1, "Barangay is Required"),
    city: zod_1.z.string().min(1, "City is Required"),
    province: zod_1.z.string().min(1, "Province is Required"),
    housetype: zod_1.z.enum(["owner", "renter", "sharer", "informal", "settler"], {
        required_error: "House Type Enrollment is Required",
    }),
    // Health and Disablity Information
    healthstatus: zod_1.z.enum(["good", "fair", "poor"], {
        required_error: "Health Status Enrollment is Required",
    }),
    disabilitystatus: zod_1.z.enum(["yes", "no"], {
        required_error: "Disability Status is Required",
    }),
    disabilitytype: zod_1.z.string().optional(),
    existinghealthcondition: zod_1.z
        .string()
        .min(1, "Existing Health Condition is Required"),
    fullyimmunized: zod_1.z.enum(["yes", "no"], {
        required_error: "Fully Immunized is Required",
    }),
    covid19vaccination: zod_1.z.enum(["yes", "no"], {
        required_error: "Covid-19  Vaccination is Required",
    }),
    //House Information
    housingtype: zod_1.z.enum(["concrete", "semi concreate", "wooden"], {
        required_error: "Housing Type is Required",
    }),
    yearofconstructed: zod_1.z.string().optional(),
    //Migration and Travel History
    residentlived: zod_1.z.enum(["yes", "no"], {
        required_error: "Resident Lived Required Field",
    }),
    // if yes of residentlive need to required
    barangayresidence: zod_1.z.string().optional(),
    cityresidence: zod_1.z.string().optional(),
    municipalityresidence: zod_1.z.string().optional(),
    provinceresidence: zod_1.z.string().optional(),
    reasonformoving: zod_1.z.string().optional(),
    //Contact and Emergency Information
    mobilenumber: zod_1.z.number().min(1, "Mobile Number is Required"),
    emailaddress: zod_1.z.string(),
    emergencycontactname: zod_1.z.string().min(1, "Emergency Contact Name is Required"),
    emergencycontactnumber: zod_1.z
        .number()
        .min(1, "Emergency Contact Number is Required"),
    relationshiptoemergencycontact: zod_1.z
        .number()
        .min(1, "Relation to Emergency Contact is Required"),
    numberofhousemembers: zod_1.z
        .number()
        .min(1, "Number of House Members is Required"),
    //house members array object
    householdMembers: zod_1.z
        .array(zod_1.z.object({
        relationship: zod_1.z.enum([
            "spouse",
            "child",
            "parent",
            "sibling",
            "grandparent",
        ]),
        firstname: zod_1.z.string().min(1, "First Name is Required"),
        middlename: zod_1.z.string().min(1, "Middle Name is Required"),
        lastname: zod_1.z.string().min(1, "Last Name is Required"),
        birthday: zod_1.z.string().min(1, "Birthday is Required"),
        age: zod_1.z.number().min(1, "Birthday is Required"),
        gender: zod_1.z.enum(["female", "male"], {
            required_error: "Gender is Required",
        }),
        civilstatus: zod_1.z.enum(["single", "married", "widowed", "seperated"], {
            required_error: "Civil Status is Required",
        }),
        currentschoolenrollment: zod_1.z.enum(["yes", "no"], {
            required_error: "Current School Enrollment is Required",
        }),
        educationalattainment: zod_1.z.enum([
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
        ], {
            required_error: "Educational Attainment is Required",
        }),
        employmentstatus: zod_1.z.enum(["employed", "selfemployed", "unemployed", "student", "retired"], {
            required_error: "Employment Status is Required",
        }),
        occupation: zod_1.z.string().min(1, "occupation is Required"),
        healthstatus: zod_1.z.enum(["good", "fair", "poor"], {
            required_error: "Health Status Enrollment is Required",
        }),
        disabilitystatus: zod_1.z.enum(["yes", "no"], {
            required_error: "Disability Status is Required",
        }),
        disabilitytype: zod_1.z.string().optional(),
        existinghealthcondition: zod_1.z
            .string()
            .min(1, "Existing Health  is Required"),
        fullyimmunized: zod_1.z.enum(["yes", "no"], {
            required_error: "Fully Immunized is Required",
        }),
        covid19vaccination: zod_1.z.enum(["yes", "no"], {
            required_error: "Covid-19  Vaccination is Required",
        }),
    }))
        .optional(),
});
