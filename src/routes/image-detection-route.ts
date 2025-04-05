import { Router } from "express";
import { createFace, getFace } from "../controllers/image-detection-route";
const imageDetectionRoute = Router();

imageDetectionRoute.post("/", createFace);
imageDetectionRoute.get("/", getFace);

export default imageDetectionRoute;
