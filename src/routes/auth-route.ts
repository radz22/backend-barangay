import { Router } from "express";
import {
  authSignin,
  authSignup,
  authLogout,
  userAccountData,
  resetPassword,
  forgotPassword,
  getAccountData,
  deleteAccount,
  getAccountAdminOnly,
} from "../controllers/authController";

const authRouter = Router();

authRouter.get("/:id", userAccountData);
authRouter.post("/signin", authSignin);
authRouter.post("/signup", authSignup);
authRouter.post("/logout", authLogout);
authRouter.post("/forgot-password", forgotPassword);
authRouter.put("/:id", resetPassword);
authRouter.get("/data/admin", getAccountAdminOnly);
authRouter.get("/", getAccountData);
authRouter.delete("/:id", deleteAccount);

export default authRouter;
