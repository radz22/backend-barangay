"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteResident = exports.getResidentId = exports.getAllResident = exports.createResidentService = void 0;
const resident_modal_1 = require("../model/resident-modal");
const customError_1 = require("../utils/customError");
const createResidentService = async (dataresident) => {
    const createResident = await resident_modal_1.Resident.create(dataresident);
    return { createResident, message: "Sucess Created" };
};
exports.createResidentService = createResidentService;
const getAllResident = async () => {
    const getAllDatas = await resident_modal_1.Resident.find({});
    return { getAllDatas };
};
exports.getAllResident = getAllResident;
const getResidentId = async (id) => {
    const findUserResidentData = await resident_modal_1.Resident.findById(id);
    if (!findUserResidentData) {
        throw new customError_1.CustomError("User not found", 404);
    }
    return { findUserResidentData };
};
exports.getResidentId = getResidentId;
const deleteResident = async (id) => {
    const deleteData = await resident_modal_1.Resident.findByIdAndDelete(id);
    if (!deleteData) {
        throw new customError_1.CustomError("User not found ", 404);
    }
    return { deleteData };
};
exports.deleteResident = deleteResident;
