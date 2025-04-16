import { Router } from "express";
import { verifyCode } from "../controllers/verification-code-controller";
const verificationCodeRoute = Router();
verificationCodeRoute.post("/verify-code", verifyCode);
export default verificationCodeRoute;
