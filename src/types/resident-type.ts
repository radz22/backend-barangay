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

  mobilenumber: z.number().min(1, "Mobile number is required").optional(),
  city: z.string().min(1, "City is required").optional(),
  streetname: z.string().min(1, "Street name is required").optional(),
  province: z.string().min(1, "Province is required").optional(),
  descriptor: z.array(z.number()).optional(),
  archived: z.boolean().default(false).optional(),

  //new
  citizenship: z.enum(
    ["FILIPINO", "DUAL CITIZEN", "NATURALIZED FILIPINO", "FOREIGNER"],
    {
      required_error: "Citizenship is Required",
    }
  ),
  placeofbirth: z.string().min(1, "Place of Birth is Required"),
  emailadress: z
    .string()
    .email({ message: "Invalid email address" })
    .nonempty({ message: "Email is required" }),
  schooltype: z.enum(["PUBLIC", "PRIVATE"], {
    required_error: "School Type is Required",
  }),
  educationalattainment: z.enum(
    [
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
    {
      required_error: "Highest Grade/Year Completed is required",
    }
  ),
  employmentstatus: z.enum(
    ["employed", "selfemployed", "unemployed", "student", "retired"],
    {
      required_error: "Employment Status is Required",
    }
  ),
  currentschoolenrollment: z.enum(["yes", "no"], {
    required_error: "Current School Enrollment is Required",
  }),

  emergencycontactname: z.string().min(1, "Emergency Contact Name is Required"),
  emergencycontactnumber: z.coerce
    .number({
      invalid_type_error: "Emergency Contact Number is Required",
    })
    .min(1, "Emergency Contact Number is Required"),
  relationshiptoemergencycontact: z
    .string()
    .min(1, "Relationship to Emergency Contact is Required"),
});

export type ResidentType = z.infer<typeof residentSchema>;
