import { Request, Response, NextFunction } from "express";
import { CencusSchema } from "../types/cencus-type";
import {
  createCencusService,
  getAllCencusData,
  getCencusDataId,
  deleteCencus,
  createContinueService,
} from "../services/cencus-service";
export const createCencus = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const validatedData = CencusSchema.parse(req.body);

    const { createCencus, message } = await createCencusService(validatedData);

    res.status(200).json({
      message: message,
      user: createCencus,
    });
  } catch (error) {
    next(error);
  }
};

export const getAllData = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { getAllDatas } = await getAllCencusData();

    res.status(200).json({
      data: getAllDatas,
    });
  } catch (error) {
    next(error);
  }
};

export const getCencusDatabyId = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { id } = req.params;

    const findUserCencusData = await getCencusDataId(id);

    res.status(200).json({
      data: findUserCencusData,
    });
  } catch (error) {
    next(error);
  }
};
export const deleteCencusbyId = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { id } = req.params;

    const deleteData = await deleteCencus(id);

    res.status(200).json({
      data: deleteData,
      message: "Deleted Successfully",
    });
  } catch (error) {
    next(error);
  }
};
export const createContinueCencus = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { createCencus, message } = await createContinueService(req.body);

    res.status(200).json({
      message: message,
      user: createCencus,
    });
  } catch (error) {
    next(error);
  }
};
