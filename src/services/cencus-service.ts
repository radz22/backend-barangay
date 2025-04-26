import { cencusType } from "../types/cencus-type";
import { cencusModel } from "../model/cencus-model";
import { CustomError } from "../utils/customError";
import { Resident } from "../model/resident-modal";
import { cencusContinueModel } from "../model/cencus-continue-model";
export const createCencusService = async (datacencus: cencusType) => {
  const existingCencus = await cencusModel.findOne({
    firstname: datacencus.firstname,
    lastname: datacencus.lastname,
    middlename: datacencus.middlename,
  });

  if (existingCencus) {
    throw new CustomError("Household Head already exists", 400);
  }
  const createCencus = await cencusModel.create(datacencus);

  await Resident.create({
    cencusid: createCencus._id,
    firstName: datacencus.firstname,
    lastName: datacencus.lastname,
    middlename: datacencus.middlename,
    dateofbirth: datacencus.birthday,
    gender: datacencus.gender,
    civilstatus: datacencus.civilstatus,
    descriptor: datacencus.descriptor,
    staffaccountcreate: datacencus.staffaccountcreate,
    age: datacencus.age,

    // New fields
    citizenship: datacencus.citizenship,
    placeofbirth: datacencus.placeofbirth,
    emailadress: datacencus.emailadress,
    schooltype: datacencus.schooltype,
    educationalattainment: datacencus.educationalattainment,
    employmentstatus: datacencus.employmentstatus,
    currentschoolenrollment: datacencus.currentschoolenrollment,
    emergencycontactname: datacencus.emergencycontactname,
    emergencycontactnumber: datacencus.emergencycontactnumber,
    relationshiptoemergencycontact: datacencus.relationshiptoemergencycontact,

    mobilenumber: datacencus.mobilenumber,
    city: datacencus.city,
    streetname: datacencus.streetname,
    province: datacencus.province,
  });
  if (datacencus.householdMembers && datacencus.householdMembers.length > 0) {
    const memberCreationPromises = datacencus?.householdMembers.map(
      async (member) => {
        const existingResident = await Resident.findOne({
          firstName: member.firstname,
          lastName: member.lastname,
          middlename: member.middlename,
        });

        if (!existingResident) {
          return Resident.create({
            cencusid: createCencus._id,
            firstName: member.firstname,
            lastName: member.lastname,
            middlename: member.middlename,
            dateofbirth: member.birthday,
            gender: member.gender,
            civilstatus: member.civilstatus,
            staffaccountcreate: datacencus.staffaccountcreate,
            age: member.age,

            citizenship: member.citizenship,
            placeofbirth: member.placeofbirth,
            emailadress: member.emailaddress,
            schooltype: member.schooltype,
            educationalattainment: member.educationalattainment,
            employmentstatus: member.employmentstatus,
            currentschoolenrollment: member.currentschoolenrollment,
            emergencycontactname: member.emergencycontactname,
            emergencycontactnumber: member.emergencycontactnumber,
            relationshiptoemergencycontact:
              member.relationshiptoemergencycontact,

            mobilenumber: member.mobilenumber,
            city: datacencus.city,
            streetname: datacencus.streetname,
            province: datacencus.province,
          });
        }
        return null;
      }
    );

    await Promise.all(memberCreationPromises);
  }

  return { createCencus, message: "Successfully Created" };
};

export const getAllCencusData = async () => {
  const getAllDatas = await cencusModel.find({});

  return { getAllDatas };
};

export const getCencusData = async (emailaccount: string) => {
  const findUserCencusData = await cencusModel.findOne({ emailaccount });
  if (!findUserCencusData) {
    throw new CustomError("User not found", 404);
  }
  return findUserCencusData;
};
export const getCencusDataId = async (id: string) => {
  const findUserCencusData = await cencusModel.findById(id);
  if (!findUserCencusData) {
    throw new CustomError("User not found", 404);
  }
  return findUserCencusData;
};
export const deleteCencus = async (id: string) => {
  const deleteData = await cencusModel.findByIdAndDelete(id);
  if (!deleteData) {
    throw new CustomError("User not found ", 404);
  }
  return deleteData;
};
export const createContinueService = async (datacencus: cencusType) => {
  const createCencus = await cencusContinueModel.create(datacencus);
  return { createCencus, message: "Save Success" };
};
