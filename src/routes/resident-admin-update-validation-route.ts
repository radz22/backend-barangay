import { Router } from "express";
import {
  createResidentUpdate,
  getAll,
  decline,
  getByResidentReasonMessage,
} from "../controllers/resident-admin-update-validation-controller";
const residentAdminValidationUpdateRoute = Router();

residentAdminValidationUpdateRoute.get("/", getAll);
residentAdminValidationUpdateRoute.get("/:id", getByResidentReasonMessage);

residentAdminValidationUpdateRoute.post("/", createResidentUpdate);
residentAdminValidationUpdateRoute.post("/decline", decline);

export default residentAdminValidationUpdateRoute;
