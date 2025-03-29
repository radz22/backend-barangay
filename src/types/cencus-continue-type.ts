import { z } from "zod";

export const CencusContinueSchema = z.object({
  conductcencus: z.string().optional(),
  dateofcencus: z.string().optional(),
  areaofcencusstreet: z.string().optional(),
  firstname: z.string().optional(),
  middlename: z.string().optional(),
  lastname: z.string().optional(),
  birthday: z.string().optional(),
  age: z.number().optional(),
  gender: z.enum(["female", "male"]).optional(),
  civilstatus: z.enum(["single", "married", "widowed", "seperated"]).optional(),
  currentschoolenrollment: z.enum(["yes", "no"]).optional(),
  educationalattainment: z
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
  employmentstatus: z
    .enum(["employed", "selfemployed", "unemployed", "student", "retired"])
    .optional(),
  occupation: z.string().optional(),
  housenumber: z.number().optional(),
  streetname: z.string().optional(),
  barangay: z.string().optional(),
  city: z.string().optional(),
  province: z.string().optional(),
  housetype: z
    .enum(["owner", "renter", "sharer", "informal", "settler"])
    .optional(),
  healthstatus: z.enum(["good", "fair", "poor"]).optional(),
  disabilitystatus: z.enum(["yes", "no"]).optional(),
  disabilitytype: z.string().optional().optional(),
  existinghealthcondition: z.string().optional(),
  fullyimmunized: z.enum(["yes", "no"]).optional(),
  covid19vaccination: z.enum(["yes", "no"]).optional(),
  housingtype: z.enum(["concrete", "semi concreate", "wooden"]).optional(),
  yearofconstructed: z.string().optional().optional(),
  residentlived: z.enum(["yes", "no"]).optional(),
  barangayresidence: z.string().optional().optional(),
  cityresidence: z.string().optional(),
  municipalityresidence: z.string().optional().optional(),
  provinceresidence: z.string().optional().optional(),
  reasonformoving: z.string().optional().optional(),
  mobilenumber: z.number().optional(),
  emailaddress: z.string().email().optional(),
  emergencycontactname: z.string().optional(),
  emergencycontactnumber: z.number().optional(),
  relationshiptoemergencycontact: z.number().optional(),
  numberofhousemembers: z.number().optional(),
  householdMembers: z
    .array(
      z.object({
        relationship: z
          .enum(["spouse", "child", "parent", "sibling", "grandparent"])
          .optional(),
        firstname: z.string().optional(),
        middlename: z.string().optional(),
        lastname: z.string().optional(),
        birthday: z.string().optional(),
        age: z.number().optional(),
        gender: z.enum(["female", "male"]).optional(),
        civilstatus: z
          .enum(["single", "married", "widowed", "seperated"])
          .optional(),
        currentschoolenrollment: z.enum(["yes", "no"]).optional(),
        educationalattainment: z
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
        employmentstatus: z
          .enum([
            "employed",
            "selfemployed",
            "unemployed",
            "student",
            "retired",
          ])
          .optional(),
        occupation: z.string().optional(),
        healthstatus: z.enum(["good", "fair", "poor"]).optional(),
        disabilitystatus: z.enum(["yes", "no"]).optional(),
        disabilitytype: z.string().optional().optional(),
        existinghealthcondition: z.string().optional(),
        fullyimmunized: z.enum(["yes", "no"]).optional(),
        covid19vaccination: z.enum(["yes", "no"]).optional(),
      })
    )
    .optional(),
});

export type cencusContinueType = z.infer<typeof CencusContinueSchema>;
