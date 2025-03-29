"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.residentSchema = void 0;
const zod_1 = require("zod");
exports.residentSchema = zod_1.z.object({
    firstName: zod_1.z.string().min(1, "First name is required"),
    lastName: zod_1.z.string().min(1, "Last name is required"),
    middlename: zod_1.z.string().optional(),
    dateofbirth: zod_1.z
        .string()
        .min(1, "Date of birth is required")
        .refine((date) => {
        return !isNaN(Date.parse(date));
    }, "Invalid date format"),
    gender: zod_1.z.enum(["female", "male"]),
    civilstatus: zod_1.z.enum(["single", "married", "widowed", "seperated"], {
        required_error: "Civil status is required",
    }),
    nationality: zod_1.z.string().min(1, "Nationality is required").optional(),
    mobilenumber: zod_1.z.number().min(1, "Mobile number is required").optional(),
    address: zod_1.z.string().min(1, "Address is required").optional(),
    streetname: zod_1.z.string().min(1, "Street name is required").optional(),
    province: zod_1.z.string().min(1, "Province is required").optional(),
});
