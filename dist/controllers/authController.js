"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAccount = exports.getAccountAdminOnly = exports.getAccountData = exports.forgotPassword = exports.resetPassword = exports.userAccountData = exports.authLogout = exports.authSignup = exports.authSignin = void 0;
const authService_1 = require("../services/authService");
const auth_validation_1 = require("../validation/auth-validation");
const authModel_1 = require("../model/authModel");
const customError_1 = require("../utils/customError");
const authSignin = async (req, res, next) => {
    try {
        const validatedData = auth_validation_1.signinSchema.parse(req.body);
        const { user, token } = await (0, authService_1.login)(validatedData);
        res.cookie("token", token, {
            httpOnly: true,
            secure: true,
            sameSite: "strict",
            maxAge: 24 * 60 * 60 * 1000,
        });
        res.cookie("email", user.email, {
            httpOnly: true,
            secure: true,
            sameSite: "strict",
            maxAge: 24 * 60 * 60 * 1000,
        });
        res.cookie("role", user.role, {
            httpOnly: true,
            secure: true,
            sameSite: "strict",
            maxAge: 24 * 60 * 60 * 1000,
        });
        res.status(200).json({
            message: "Login successful",
            user: { id: user._id, email: user.email, role: user.role },
        });
    }
    catch (error) {
        next(error);
    }
};
exports.authSignin = authSignin;
const authSignup = async (req, res, next) => {
    try {
        const validatedData = auth_validation_1.signupSchema.parse(req.body);
        const newUser = await (0, authService_1.createUser)(validatedData);
        res.status(201).json({
            message: "User registered successfully",
            user: {
                id: newUser._id,
                email: newUser.email,
                role: newUser.role,
            },
        });
    }
    catch (error) {
        next(error);
    }
};
exports.authSignup = authSignup;
const authLogout = (req, res) => {
    res.clearCookie("token");
    res.clearCookie("email");
    res.clearCookie("role");
    res.status(200).json({ message: "Logout successful" });
};
exports.authLogout = authLogout;
const userAccountData = async (req, res, next) => {
    try {
        const { id } = req.params;
        const getData = await (0, authService_1.userData)(id);
        res.status(200).json(getData);
    }
    catch (error) {
        next(error);
    }
};
exports.userAccountData = userAccountData;
const resetPassword = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { newpassword } = req.body;
        const { message } = await (0, authService_1.resetUserPassword)({
            userid: id,
            newpassword,
        });
        res.status(200).json({ message: message });
    }
    catch (error) {
        next(error);
    }
};
exports.resetPassword = resetPassword;
const forgotPassword = async (req, res, next) => {
    try {
        const { email } = req.body;
        const { message } = await (0, authService_1.forgotUserPassword)(email);
        res.status(200).json({ message: message });
    }
    catch (error) {
        next(error);
    }
};
exports.forgotPassword = forgotPassword;
const getAccountData = async (req, res, next) => {
    try {
        const getAllData = await authModel_1.authModel.find({ role: "staff" });
        res.status(200).json({ data: getAllData });
    }
    catch (error) {
        next(error);
    }
};
exports.getAccountData = getAccountData;
const getAccountAdminOnly = async (req, res, next) => {
    try {
        const getAllData = await authModel_1.authModel.find({ role: "admin" });
        res.status(200).json({ data: getAllData });
    }
    catch (error) {
        next(error);
    }
};
exports.getAccountAdminOnly = getAccountAdminOnly;
const deleteAccount = async (req, res, next) => {
    try {
        const { id } = req.params;
        const deletedAccount = await authModel_1.authModel.findByIdAndDelete({ _id: id });
        if (!deletedAccount) {
            throw new customError_1.CustomError("Account not found", 404);
        }
        res.status(200).json({ message: "Account deleted" });
    }
    catch (error) {
        next(error);
    }
};
exports.deleteAccount = deleteAccount;
