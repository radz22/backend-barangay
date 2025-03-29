"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCookies = void 0;
const customError_1 = require("../utils/customError");
const getCookies = (req, res, next) => {
    try {
        const token = req.cookies.token;
        const email = req.cookies.email;
        const role = req.cookies.role;
        if (!token || !email || !role) {
            throw new customError_1.CustomError("Unauthorized: No cookies found", 404);
        }
        res.status(200).json({
            message: "Cookies retrieved successfully",
            token,
            role,
        });
    }
    catch (error) {
        next(error);
    }
};
exports.getCookies = getCookies;
