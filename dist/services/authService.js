"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.forgotUserPassword = exports.resetUserPassword = exports.userData = exports.login = exports.createUser = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const authModel_1 = require("../model/authModel");
const customError_1 = require("../utils/customError");
const jwt_1 = require("../utils/jwt");
const node_mailer_1 = __importDefault(require("../utils/node-mailer"));
require("dotenv/config");
const createUser = async ({ email, password, role }) => {
    const existingUser = await authModel_1.authModel.findOne({ email });
    if (existingUser) {
        throw new customError_1.CustomError("Email already exists", 400);
    }
    const hashedPassword = await bcrypt_1.default.hash(password, 10);
    const newUser = await authModel_1.authModel.create({
        email,
        password: hashedPassword,
        role,
    });
    return newUser;
};
exports.createUser = createUser;
const login = async ({ email, password }) => {
    const user = await authModel_1.authModel.findOne({ email });
    if (!user) {
        throw new customError_1.CustomError("Invalid email or password", 400);
    }
    const isMatch = await bcrypt_1.default.compare(password, user.password);
    if (!isMatch) {
        throw new customError_1.CustomError("Invalid email or password", 400);
    }
    const token = (0, jwt_1.generateToken)({ id: user._id });
    return { user, token };
};
exports.login = login;
const userData = async (id) => {
    const authToken = (0, jwt_1.verifyToken)(id);
    const findUser = await authModel_1.authModel.findById(authToken.id);
    if (!findUser) {
        throw new customError_1.CustomError("User not found", 404);
    }
    return findUser;
};
exports.userData = userData;
const resetUserPassword = async ({ userid, newpassword, }) => {
    const hashedNewPassword = await bcrypt_1.default.hash(newpassword, 10);
    const updateUser = await authModel_1.authModel.findByIdAndUpdate(userid, { password: hashedNewPassword }, { new: true });
    if (!updateUser) {
        throw new customError_1.CustomError("User not found", 404);
    }
    return {
        message: "Password reset successfully",
    };
};
exports.resetUserPassword = resetUserPassword;
const forgotUserPassword = async (email) => {
    const findEmail = await authModel_1.authModel.findOne({ email });
    if (!findEmail) {
        throw new customError_1.CustomError("Account not exists", 404);
    }
    const getUserid = findEmail._id;
    const resetLink = `http://localhost:5173/page/reset-password/${getUserid}`;
    const mailOptions = {
        from: process.env.EMAIL,
        to: email,
        subject: "Password Reset Request",
        text: `Hi,\n\nWe received a request to reset your password. Please use the link below to reset your password:\n\n${resetLink}\n\nIf you did not request this, please ignore this email.\n\nBest regards,\nBarangay BonBon`, // Plain text version
        html: `<p>Hi,</p>
           <p>We received a request to reset your password. Please use the link below to reset your password:</p>
           <p><a href="${resetLink}" target="_blank" style="color: blue;">Reset Password</a></p>
           <p>If you did not request this, please ignore this email.</p>
           <p>Best regards,<br>BARANGAY</p>`,
    };
    const emailSent = await (0, node_mailer_1.default)(mailOptions);
    if (!emailSent) {
        throw new customError_1.CustomError("Email not sent", 404);
    }
    return {
        message: "Email sent successfully",
    };
};
exports.forgotUserPassword = forgotUserPassword;
