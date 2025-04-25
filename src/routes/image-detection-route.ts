import { Router } from "express";
import {
  createFace,
  getFace,
  getFirstAndLastName,
  verifyResident,
} from "../controllers/image-detection-route";
const imageDetectionRoute = Router();

imageDetectionRoute.post("/", createFace);
imageDetectionRoute.post("/verify", verifyResident);

imageDetectionRoute.get("/", getFace);
imageDetectionRoute.get("/:firstName/:lastName", getFirstAndLastName);

export default imageDetectionRoute;
