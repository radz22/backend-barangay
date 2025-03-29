"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
require("dotenv/config");
const connectDB = async () => {
    try {
        await mongoose_1.default.connect(process.env.MONGODB_URL);
        console.log("Connected to database");
    }
    catch (err) {
        console.error(err);
        process.exit(1); // Exit process with failure
    }
};
exports.default = connectDB;
