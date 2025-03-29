"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createContinueCencus = exports.deleteCencusbyId = exports.getCencusDatabyId = exports.getAllData = exports.createCencus = void 0;
const cencus_type_1 = require("../types/cencus-type");
const cencus_service_1 = require("../services/cencus-service");
const createCencus = async (req, res, next) => {
    try {
        const validatedData = cencus_type_1.CencusSchema.parse(req.body);
        const { createCencus, message } = await (0, cencus_service_1.createCencusService)(validatedData);
        res.status(200).json({
            message: message,
            user: createCencus,
        });
    }
    catch (error) {
        next(error);
    }
};
exports.createCencus = createCencus;
const getAllData = async (req, res, next) => {
    try {
        const { getAllDatas } = await (0, cencus_service_1.getAllCencusData)();
        res.status(200).json({
            data: getAllDatas,
        });
    }
    catch (error) {
        next(error);
    }
};
exports.getAllData = getAllData;
const getCencusDatabyId = async (req, res, next) => {
    try {
        const { id } = req.params;
        const findUserCencusData = await (0, cencus_service_1.getCencusDataId)(id);
        res.status(200).json({
            data: findUserCencusData,
        });
    }
    catch (error) {
        next(error);
    }
};
exports.getCencusDatabyId = getCencusDatabyId;
const deleteCencusbyId = async (req, res, next) => {
    try {
        const { id } = req.params;
        const deleteData = await (0, cencus_service_1.deleteCencus)(id);
        res.status(200).json({
            data: deleteData,
            message: "Deleted Successfully",
        });
    }
    catch (error) {
        next(error);
    }
};
exports.deleteCencusbyId = deleteCencusbyId;
const createContinueCencus = async (req, res, next) => {
    try {
        const { createCencus, message } = await (0, cencus_service_1.createContinueService)(req.body);
        res.status(200).json({
            message: message,
            user: createCencus,
        });
    }
    catch (error) {
        next(error);
    }
};
exports.createContinueCencus = createContinueCencus;
