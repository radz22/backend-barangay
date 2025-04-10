import { Request, Response, NextFunction } from "express";
import { residentSchema } from "../types/resident-type";
import { createResidentService } from "../services/resident-resident";
import { Resident } from "../model/resident-modal";
import { CustomError } from "../utils/customError";
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
      gender,
      civilstatus,
      nationality,
      mobilenumber,
      address,
      streetname,
      province,
      isUpdated,
    } = req.body;

    const updateData = {
      firstName,
      lastName,
      middlename,
      dateofbirth,
      gender,
      civilstatus,
      nationality,
      mobilenumber,
      address,
      streetname,
      province,
      isUpdated,
    };

    // Use findByIdAndUpdate to update the resident's data
    const updatedResident = await Resident.findByIdAndUpdate(id, updateData, {
      new: true, // To return the updated document
      runValidators: true, // To ensure validation is applied during update
    });

    if (!updatedResident) {
      throw new CustomError("Resident not found", 404);
    }

    // Send the updated resident data in the response
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
