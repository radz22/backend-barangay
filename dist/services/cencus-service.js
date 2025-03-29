"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createContinueService = exports.deleteCencus = exports.getCencusDataId = exports.getCencusData = exports.getAllCencusData = exports.createCencusService = void 0;
const cencus_model_1 = require("../model/cencus-model");
const customError_1 = require("../utils/customError");
const resident_modal_1 = require("../model/resident-modal");
const cencus_continue_model_1 = require("../model/cencus-continue-model");
const createCencusService = async (datacencus) => {
    console.log(datacencus);
    const createCencus = await cencus_model_1.cencusModel.create(datacencus);
    if (datacencus.householdMembers && datacencus.householdMembers.length > 0) {
        const residentData = datacencus.householdMembers.map((member) => ({
            firstName: member.firstname,
            lastName: member.lastname,
            middlename: member.middlename,
            dateofbirth: member.birthday,
            gender: member.gender,
            civilstatus: member.civilstatus,
        }));
        await resident_modal_1.Resident.insertMany(residentData);
    }
    return { createCencus, message: "Sucess Created" };
};
exports.createCencusService = createCencusService;
const getAllCencusData = async () => {
    const getAllDatas = await cencus_model_1.cencusModel.find({});
    return { getAllDatas };
};
exports.getAllCencusData = getAllCencusData;
const getCencusData = async (emailaccount) => {
    const findUserCencusData = await cencus_model_1.cencusModel.findOne({ emailaccount });
    if (!findUserCencusData) {
        throw new customError_1.CustomError("User not found", 404);
    }
    return findUserCencusData;
};
exports.getCencusData = getCencusData;
const getCencusDataId = async (id) => {
    const findUserCencusData = await cencus_model_1.cencusModel.findById(id);
    if (!findUserCencusData) {
        throw new customError_1.CustomError("User not found", 404);
    }
    return findUserCencusData;
};
exports.getCencusDataId = getCencusDataId;
const deleteCencus = async (id) => {
    const deleteData = await cencus_model_1.cencusModel.findByIdAndDelete(id);
    if (!deleteData) {
        throw new customError_1.CustomError("User not found ", 404);
    }
    return deleteData;
};
exports.deleteCencus = deleteCencus;
const createContinueService = async (datacencus) => {
    const createCencus = await cencus_continue_model_1.cencusContinueModel.create(datacencus);
    return { createCencus, message: "Save Success" };
};
exports.createContinueService = createContinueService;
