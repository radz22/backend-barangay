import { z } from "zod";

export const CencusSchema = z.object({
  staffaccountcreate: z.string().optional(),
  dateofcencus: z.string().min(1, "Date of Census is Required"),
  areaofcencusstreet: z.string(),
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
  occupation: z.string().min(1, "Occupation is Required"),
  housenumber: z.coerce
    .number({
      invalid_type_error: "House Number is Required",
    })
    .min(1, "House Number is Required"),
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
  //new
  housingtype: z.enum(
    [
      "SINGLE HOUSE",
      "APARTMENT",
      "COMPOUND",
      "GOVERMENT HOUSING",
      "INFORMAL SHELTER",
    ],
    {
      required_error: "Housing Type is Required",
    }
  ),
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
  mobilenumber: z.coerce
    .number({
      invalid_type_error: "Mobile Number is Required",
    })
    .min(1, "Mobile Number is Required"),
  emergencycontactname: z.string().min(1, "Emergency Contact Name is Required"),
  emergencycontactnumber: z.coerce
    .number({
      invalid_type_error: "Emergency Contact Number is Required",
    })
    .min(1, "Emergency Contact Number is Required"),
  relationshiptoemergencycontact: z
    .string()
    .min(1, "Relationship to Emergency Contact is Required"),
  numberofhousemembers: z.coerce
    .number({
      invalid_type_error: "Number of House Members is Required",
    })
    .min(1, "Number of House Members is Required"),

  //house members array object

  householdMembers: z
    .array(
      z.object({
        relationship: z.enum(
          [
            "SPOUSE",
            "SON",
            "DAUGHTER",
            "FATHER",
            "MOTHER",
            "BROTHER",
            "SISTER",
            "GRANDCHILD",
            "GRANDPARENT",
            "UNCLE",
            "AUNT",
            "NEPHEW",
            "NIECE",
            "COUSIN",
            "IN-LAW",
            "HOUSEHELP",
            "BOARDER",
          ],
          {
            required_error: "Relationship is required",
          }
        ),
        //personal information

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
        placeofbirth: z.string().min(1, "Place of Birth is Required"),
        citizenship: z.enum(
          ["FILIPINO", "DUAL CITIZEN", "NATURALIZED FILIPINO", "FOREIGNER"],
          {
            required_error: "Citizenship is Required",
          }
        ),

        //contact information

        mobilenumber: z.coerce
          .number({
            invalid_type_error: "Mobile Number is Required",
          })
          .min(1, "Mobile Number is Required"),
        emergencycontactname: z
          .string()
          .min(1, "Emergency Contact Name is Required"),
        emergencycontactnumber: z.coerce
          .number({
            invalid_type_error: "Emergency Contact Number is Required",
          })
          .min(1, "Emergency Contact Number is Required"),

        relationshiptoemergencycontact: z
          .string()
          .min(1, "Relationship to Emergency Contact is Required"),
        emailaddress: z
          .string()
          .email({ message: "Invalid email address" })
          .nonempty({ message: "Email is required" }),

        //government id
        governmentid: z
          .enum([
            "",
            "SSS",
            "TIN",
            "PAGIBIG",
            "PHILHEALTH",
            "NATIONAL ID",
            "BARANGAY ID",
          ])
          .optional(),

        governmentidnumber: z.coerce
          .number({
            invalid_type_error: "Government ID Number is Required",
          })
          .optional(),

        //educational information
        currentschoolenrollment: z.enum(["yes", "no"], {
          required_error: "Current School Enrollment is Required",
        }),
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

        //health information

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

        //migration History
        residentlived: z.enum(["yes", "no"], {
          required_error: "Resident Lived Required Field",
        }),
        barangayresidence: z.string().optional(),
        cityresidence: z.string().optional(),
        municipalityresidence: z.string().optional(),
        provinceresidence: z.string().optional(),
        reasonformoving: z.string().optional(),
      })
    )
    .optional(),
  archived: z.boolean().default(false).optional(),
  descriptor: z.array(z.number()).optional(),

  //new
  yearconducting: z.enum(["2025", "2026", "2027", "2028", "2029", "2030"], {
    required_error: "Year Conducting is Required",
  }),
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
  governmentid: z
    .enum([
      "",
      "SSS",
      "TIN",
      "PAGIBIG",
      "PHILHEALTH",
      "NATIONAL ID",
      "BARANGAY ID",
    ])
    .optional(),

  governmentidnumber: z.coerce
    .number({
      invalid_type_error: "Government ID Number is Required",
    })
    .optional(),
  schooltype: z.enum(["PUBLIC", "PRIVATE"], {
    required_error: "School Type is Required",
  }),
});

export type cencusType = z.infer<typeof CencusSchema>;
