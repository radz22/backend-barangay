import { Router } from "express";
import {
  createFace,
  getFace,
  getFirstAndLastName,
} from "../controllers/image-detection-route";
const imageDetectionRoute = Router();

imageDetectionRoute.post("/", createFace);
imageDetectionRoute.get("/", getFace);
imageDetectionRoute.get("/:firstName/:lastName", getFirstAndLastName);

export default imageDetectionRoute;
