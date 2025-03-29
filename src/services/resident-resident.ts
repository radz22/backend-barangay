import { ResidentType } from "../types/resident-type";
import { Resident } from "../model/resident-modal";
import { CustomError } from "../utils/customError";
export const createResidentService = async (dataresident: ResidentType) => {
  const createResident = await Resident.create(dataresident);
  return { createResident, message: "Sucess Created" };
};

export const getAllResident = async () => {
  const getAllDatas = await Resident.find({});

  return { getAllDatas };
};

export const getResidentId = async (id: string) => {
  const findUserResidentData = await Resident.findById(id);
  if (!findUserResidentData) {
    throw new CustomError("User not found", 404);
  }
  return { findUserResidentData };
};
export const deleteResident = async (id: string) => {
  const deleteData = await Resident.findByIdAndDelete(id);
  if (!deleteData) {
    throw new CustomError("User not found ", 404);
  }
  return { deleteData };
};
