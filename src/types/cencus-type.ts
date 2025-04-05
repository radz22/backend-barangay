import { z } from "zod";

export const CencusSchema = z.object({
  dateofcencus: z.string().optional(),
  areaofcencusstreet: z.string().optional(),
  firstname: z.string().min(1, "First Name is Required"),
  middlename: z.string().min(1, "Middle Name is Required"),
  lastname: z.string().min(1, "Last Name is Required"),
  birthday: z.string().min(1, "Birthday is Required"),
  age: z.number().min(1, "Age is Required"),
  gender: z.enum(["female", "male"], {
    required_error: "Gender is Required",
  }),
  civilstatus: z.enum(["single", "married", "widowed", "seperated"], {
    required_error: "Civil Status is Required",
  }),
  currentschoolenrollment: z.enum(["yes", "no"], {
    required_error: "Current School Enrollment is Required",
  }),
  educationalattainment: z.enum(
    [
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
    {
      required_error: "Educational Attainment is Required",
    }
  ),
  employmentstatus: z.enum(
    ["employed", "selfemployed", "unemployed", "student", "retired"],
    {
      required_error: "Employment Status is Required",
    }
  ),
  occupation: z.string().min(1, "Occupation is Required"),
  housenumber: z.number().min(1, "House Number Required"),
  streetname: z.string().min(1, "Street Name Required"),
  barangay: z.string().min(1, "Barangay is Required"),
  city: z.string().min(1, "City is Required"),
  province: z.string().min(1, "Province is Required"),
  housetype: z.enum(["owner", "renter", "sharer", "informal", "settler"], {
    required_error: "House Type Enrollment is Required",
  }),

  // Health and Disablity Information

  healthstatus: z.enum(["good", "fair", "poor"], {
    required_error: "Health Status Enrollment is Required",
  }),
  disabilitystatus: z.enum(["yes", "no"], {
    required_error: "Disability Status is Required",
  }),
  disabilitytype: z.string().optional(),
  existinghealthcondition: z
    .string()
    .min(1, "Existing Health Condition is Required"),
  fullyimmunized: z.enum(["yes", "no"], {
    required_error: "Fully Immunized is Required",
  }),
  covid19vaccination: z.enum(["yes", "no"], {
    required_error: "Covid-19  Vaccination is Required",
  }),

  //House Information
  housingtype: z.enum(["concrete", "semi concreate", "wooden"], {
    required_error: "Housing Type is Required",
  }),
  yearofconstructed: z.string().optional(),

  //Migration and Travel History
  residentlived: z.enum(["yes", "no"], {
    required_error: "Resident Lived Required Field",
  }),
  // if yes of residentlive need to required
  barangayresidence: z.string().optional(),
  cityresidence: z.string().optional(),
  municipalityresidence: z.string().optional(),
  provinceresidence: z.string().optional(),
  reasonformoving: z.string().optional(),

  //Contact and Emergency Information
  mobilenumber: z.number().min(1, "Mobile Number is Required"),
  emergencycontactname: z.string().min(1, "Emergency Contact Name is Required"),
  emergencycontactnumber: z
    .number()
    .min(1, "Emergency Contact Number is Required"),
  relationshiptoemergencycontact: z
    .number()
    .min(1, "Relation to Emergency Contact is Required"),
  numberofhousemembers: z
    .number()
    .min(1, "Number of House Members is Required"),

  //house members array object

  householdMembers: z
    .array(
      z.object({
        relationship: z.enum([
          "spouse",
          "child",
          "parent",
          "sibling",
          "grandparent",
        ]),
        firstname: z.string().min(1, "First Name is Required"),
        middlename: z.string().min(1, "Middle Name is Required"),
        lastname: z.string().min(1, "Last Name is Required"),
        birthday: z.string().min(1, "Birthday is Required"),
        age: z.number().min(1, "Birthday is Required"),
        gender: z.enum(["female", "male"], {
          required_error: "Gender is Required",
        }),
        civilstatus: z.enum(["single", "married", "widowed", "seperated"], {
          required_error: "Civil Status is Required",
        }),
        currentschoolenrollment: z.enum(["yes", "no"], {
          required_error: "Current School Enrollment is Required",
        }),
        educationalattainment: z.enum(
          [
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
          {
            required_error: "Educational Attainment is Required",
          }
        ),

        employmentstatus: z.enum(
          ["employed", "selfemployed", "unemployed", "student", "retired"],
          {
            required_error: "Employment Status is Required",
          }
        ),
        occupation: z.string().min(1, "occupation is Required"),

        healthstatus: z.enum(["good", "fair", "poor"], {
          required_error: "Health Status Enrollment is Required",
        }),
        disabilitystatus: z.enum(["yes", "no"], {
          required_error: "Disability Status is Required",
        }),

        disabilitytype: z.string().optional(),

        existinghealthcondition: z
          .string()
          .min(1, "Existing Health  is Required"),

        fullyimmunized: z.enum(["yes", "no"], {
          required_error: "Fully Immunized is Required",
        }),
        covid19vaccination: z.enum(["yes", "no"], {
          required_error: "Covid-19  Vaccination is Required",
        }),
      })
    )
    .optional(),

  archived: z.boolean().default(false).optional(),
});

export type cencusType = z.infer<typeof CencusSchema>;
