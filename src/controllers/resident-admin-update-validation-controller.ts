import { Request, Response, NextFunction } from "express";
import { CustomError } from "../utils/customError";
import { ResidentUpdateModel } from "../model/resident-admin-update-validation-model";
import { reasonMessageModel } from "../model/reason-message-decline-model";
import cloudinary from "../utils/cloudinary";
export const createResidentUpdate = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const {
      updateid,
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
      image,
    } = req.body;

    const existResident = await ResidentUpdateModel.findOne({ updateid });

    if (existResident) {
      throw new CustomError("Wait for Admin Approval", 400);
    }

    const uploadedResponse = await cloudinary.v2.uploader.upload(image, {
      upload_preset: "",
    });
    const updateData = {
      updateid,
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
      cloudinaryphoto: uploadedResponse.url,
      cloudinaryid: uploadedResponse.public_id,
    };

    const createUpdateResident = await ResidentUpdateModel.create(updateData);

    res.status(200).json({
      data: createUpdateResident,
      message: "Resident updated successfully",
    });
  } catch (error) {
    next(error);
  }
};
export const getAll = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const getAllData = await ResidentUpdateModel.find({});

    res.status(200).json({ data: getAllData });
  } catch (error) {
    next(error);
  }
};

export const decline = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { reasonid, reason } = req.body;

    await ResidentUpdateModel.findOneAndDelete({ updateid: reasonid });

    const existingReason = await reasonMessageModel.findOne({ reasonid });

    let result;

    if (existingReason) {
      result = await reasonMessageModel.findOneAndUpdate(
        { reasonid },
        { reason },
        { new: true }
      );
    } else {
      result = await reasonMessageModel.create({ reasonid, reason });
    }

    res.status(200).json({
      data: result,
      message: "Declined successfully",
    });
  } catch (error) {
    next(error);
  }
};

export const getByResidentReasonMessage = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { id } = req.params;
    const getReasonMessage = await reasonMessageModel.findOne({
      reasonid: id,
    });

    res.status(200).json({ data: getReasonMessage });
  } catch (error) {
    next(error);
  }
};
