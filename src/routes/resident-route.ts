import { Router } from "express";
import {
  createResident,
  getAllResidentt,
  getResidentById,
  deleteResidentbyId,
  registerFaceResident,
  getResidentWithDescriptor,
} from "../controllers/resident-controller";

const residentRouter = Router();
residentRouter.post("/", createResident);

residentRouter.get("/", getAllResidentt);
residentRouter.get("/resident", getResidentWithDescriptor);
residentRouter.get("/:id", getResidentById);
residentRouter.delete("/:id", deleteResidentbyId);
residentRouter.put("/:id", registerFaceResident);

export default residentRouter;
