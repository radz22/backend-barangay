import { Router } from "express";
import { getCookies } from "../controllers/cookie-controller";
const cookieRoute = Router();

cookieRoute.get("/", getCookies);

export default cookieRoute;
