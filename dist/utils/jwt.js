"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = exports.generateToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
require("dotenv/config");
const customError_1 = require("./customError");
const secretKey = process.env.JWT_SECRET; // Ensure it's a string
const generateToken = (payload, expiresIn = "1d") => {
    return jsonwebtoken_1.default.sign(payload, secretKey, { expiresIn });
};
exports.generateToken = generateToken;
const verifyToken = (token) => {
    try {
        return jsonwebtoken_1.default.verify(token, secretKey);
    }
    catch (err) {
        throw new customError_1.CustomError("Token Expired", 400);
    }
};
exports.verifyToken = verifyToken;
