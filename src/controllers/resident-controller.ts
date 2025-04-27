import { Request, Response, NextFunction } from "express";
import { residentSchema } from "../types/resident-type";
import { createResidentService } from "../services/resident-resident";
import { Resident } from "../model/resident-modal";
import { CustomError } from "../utils/customError";
import { ResidentUpdateModel } from "../model/resident-admin-update-validation-model";
import cloudinary from "../utils/cloudinary";
import { reasonMessageModel } from "../model/reason-message-decline-model";
import {
  getAllResident,
  getResidentId,
  deleteResident,
} from "../services/resident-resident";
export const createResident = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const validatedData = residentSchema.parse(req.body);
    const { message, createResident } = await createResidentService(
      validatedData
    );

    res.status(201).json({
      message: message,
      data: createResident,
    });
  } catch (error) {
    next(error);
  }
};
export const getAllResidentt = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { getAllDatas } = await getAllResident();

    res.status(200).json({ data: getAllDatas });
  } catch (error) {
    next(error);
  }
};
export const getResidentById = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { id } = req.params;

    const { findUserResidentData } = await getResidentId(id);

    res.status(200).json({
      data: findUserResidentData,
    });
  } catch (error) {
    next(error);
  }
};
export const deleteResidentbyId = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { id } = req.params;

    const { deleteData } = await deleteResident(id);

    res.status(200).json({
      data: deleteData,
      message: "Deleted Successfully",
    });
  } catch (error) {
    next(error);
  }
};
export const registerFaceResident = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { id } = req.params;
    const { descriptor } = req.body;
    const faceRegister = await Resident.findByIdAndUpdate(
      { _id: id },
      { descriptor: descriptor }
    );

    if (!faceRegister) {
      throw new CustomError("Face Register Failed", 400);
    }

    res.status(200).json({
      data: faceRegister,
      message: "Face Register Successfully",
    });
  } catch (error) {
    next(error);
  }
};

export const updateResident = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { id } = req.params;
    const {
      firstName,
      lastName,
      middlename,
      dateofbirth,
      age,
      gender,
      civilstatus,
      mobilenumber,
      streetname,
      province,
      cloudinaryid,

      citizenship,
      city,
      currentschoolenrollment,
      educationalattainment,
      emailadress,
      emergencycontactname,
      emergencycontactnumber,
      employmentstatus,
      placeofbirth,
      relationshiptoemergencycontact,
      schooltype,
    } = req.body;

    const updateData = {
      firstName,
      lastName,
      middlename,
      dateofbirth,
      age,
      gender,
      civilstatus,
      mobilenumber,
      streetname,
      province,

      citizenship,
      city,
      currentschoolenrollment,
      educationalattainment,
      emailadress,
      emergencycontactname,
      emergencycontactnumber,
      employmentstatus,
      placeofbirth,
      relationshiptoemergencycontact,
      schooltype,
    };

    const updatedResident = await Resident.findByIdAndUpdate(id, updateData, {
      new: true,
      runValidators: true,
    });

    if (!updatedResident) {
      throw new CustomError("Resident not found", 404);
    }
    await ResidentUpdateModel.findOneAndDelete({
      updateid: id,
    });
    await reasonMessageModel.findOneAndDelete({
      reasonid: id,
    });
    await cloudinary.v2.uploader.destroy(cloudinaryid);

    res.status(200).json({
      data: updatedResident,
      message: "Resident updated successfully",
    });
  } catch (error) {
    next(error);
  }
};

export const getResidentWithDescriptor = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const residents = await Resident.find({
      descriptor: { $exists: true, $size: 128 },
    });
    res.json(residents);
  } catch (error) {
    next(error);
  }
};

export const archived = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;

    const updateResident = await Resident.findByIdAndUpdate(id, {
      archived: true,
    });

    if (!updateResident) {
      throw new CustomError("Error", 404);
    }

    res.status(200).json({
      message: "Successful Deleted",
    });
  } catch (error) {
    next(error);
  }
};

export const restore = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;

    const updateResident = await Resident.findByIdAndUpdate(id, {
      archived: false,
    });

    if (!updateResident) {
      throw new CustomError("Error", 404);
    }

    res.status(200).json({
      message: "Successful Restore",
    });
  } catch (error) {
    next(error);
  }
};
