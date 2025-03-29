"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cookie_controller_1 = require("../controllers/cookie-controller");
const cookieRoute = (0, express_1.Router)();
cookieRoute.get("/", cookie_controller_1.getCookies);
exports.default = cookieRoute;
