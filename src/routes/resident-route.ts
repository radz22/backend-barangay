import { Router } from "express";
import {
  createResident,
  getAllResidentt,
  getResidentById,
  deleteResidentbyId,
} from "../controllers/resident-controller";
const residentRouter = Router();
residentRouter.post("/", createResident);
residentRouter.get("/", getAllResidentt);
residentRouter.get("/:id", getResidentById);
residentRouter.delete("/:id", deleteResidentbyId);

export default residentRouter;
