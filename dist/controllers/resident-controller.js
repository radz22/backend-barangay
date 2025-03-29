"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteResidentbyId = exports.getResidentById = exports.getAllResidentt = exports.createResident = void 0;
const resident_type_1 = require("../types/resident-type");
const resident_resident_1 = require("../services/resident-resident");
const resident_resident_2 = require("../services/resident-resident");
const createResident = async (req, res, next) => {
    try {
        const validatedData = resident_type_1.residentSchema.parse(req.body);
        const { message, createResident } = await (0, resident_resident_1.createResidentService)(validatedData);
        res.status(201).json({
            message: message,
            data: createResident,
        });
    }
    catch (error) {
        next(error);
    }
};
exports.createResident = createResident;
const getAllResidentt = async (req, res, next) => {
    try {
        const { getAllDatas } = await (0, resident_resident_2.getAllResident)();
        res.status(200).json({ data: getAllDatas });
    }
    catch (error) {
        next(error);
    }
};
exports.getAllResidentt = getAllResidentt;
const getResidentById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { findUserResidentData } = await (0, resident_resident_2.getResidentId)(id);
        res.status(200).json({
            data: findUserResidentData,
        });
    }
    catch (error) {
        next(error);
    }
};
exports.getResidentById = getResidentById;
const deleteResidentbyId = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { deleteData } = await (0, resident_resident_2.deleteResident)(id);
        res.status(200).json({
            data: deleteData,
            message: "Deleted Successfully",
        });
    }
    catch (error) {
        next(error);
    }
};
exports.deleteResidentbyId = deleteResidentbyId;
