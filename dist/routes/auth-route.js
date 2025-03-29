"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authController_1 = require("../controllers/authController");
const authRouter = (0, express_1.Router)();
authRouter.get("/:id", authController_1.userAccountData);
authRouter.post("/signin", authController_1.authSignin);
authRouter.post("/signup", authController_1.authSignup);
authRouter.post("/logout", authController_1.authLogout);
authRouter.post("/forgot-password", authController_1.forgotPassword);
authRouter.put("/:id", authController_1.resetPassword);
authRouter.get("/data/admin", authController_1.getAccountAdminOnly);
authRouter.get("/", authController_1.getAccountData);
authRouter.delete("/:id", authController_1.deleteAccount);
exports.default = authRouter;
