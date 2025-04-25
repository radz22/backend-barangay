import { z } from "zod";

export const residentSchema = z.object({
  staffaccountcreate: z.string().optional(),
  cencusid: z.string().min(1, "Census ID is required"),
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  middlename: z.string().optional(),
  dateofbirth: z
    .string()
    .min(1, "Date of birth is required")
    .refine((date) => {
      return !isNaN(Date.parse(date));
    }, "Invalid date format"),

  age: z.number().min(1, "Age is Required"),
  gender: z.enum(["female", "male"]),

  civilstatus: z.enum(["single", "married", "widowed", "seperated"], {
    required_error: "Civil status is required",
  }),

  nationality: z.string().min(1, "Nationality is required").optional(),
  mobilenumber: z.number().min(1, "Mobile number is required").optional(),
  address: z.string().min(1, "Address is required").optional(),
  streetname: z.string().min(1, "Street name is required").optional(),
  province: z.string().min(1, "Province is required").optional(),
  descriptor: z.array(z.number()).optional(),
});

export type ResidentType = z.infer<typeof residentSchema>;
