import { Request, Response, NextFunction } from "express";
import { faceModel } from "../model/image-detection-model";
export const createFace = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { firstName, lastName, descriptor } = req.body;

    if (!firstName || !lastName || !descriptor) {
      res.status(400).json({ error: "Missing required fields" });
      return;
    }

    const createFace = await faceModel.create({
      firstName,
      lastName,
      descriptor,
    });
    res.status(201).json(createFace);
  } catch (error) {
    next(error);
  }
};
export const getFace = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const faces = await faceModel.find();
    res.json(faces);
  } catch (error) {
    next(error);
  }
};
