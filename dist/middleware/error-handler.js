"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const customError_1 = require("../utils/customError");
const errorHandler = (err, req, res, next) => {
    const statusCode = err instanceof customError_1.CustomError ? err.statusCode : 500;
    res.status(statusCode).json({
        error: err.message || "Internal Server Error",
    });
};
exports.errorHandler = errorHandler;
