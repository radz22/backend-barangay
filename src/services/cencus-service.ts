import { cencusType } from "../types/cencus-type";
import { cencusModel } from "../model/cencus-model";
import { CustomError } from "../utils/customError";
import { Resident } from "../model/resident-modal";
import { cencusContinueModel } from "../model/cencus-continue-model";
export const createCencusService = async (datacencus: cencusType) => {
  console.log(datacencus);
  const createCencus = await cencusModel.create(datacencus);

  if (datacencus.householdMembers && datacencus.householdMembers.length > 0) {
    const residentData = datacencus.householdMembers.map((member) => ({
      firstName: member.firstname,
      lastName: member.lastname,
      middlename: member.middlename,
      dateofbirth: member.birthday,
      gender: member.gender,
      civilstatus: member.civilstatus,
    }));

    await Resident.insertMany(residentData);
  }
  return { createCencus, message: "Sucess Created" };
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
