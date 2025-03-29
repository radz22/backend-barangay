import { Request, Response, NextFunction } from "express";
import { residentSchema } from "../types/resident-type";
import { createResidentService } from "../services/resident-resident";
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
