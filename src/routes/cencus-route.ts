import { Router } from "express";
import {
  createCencus,
  getAllData,
  getCencusDatabyId,
  deleteCencusbyId,
} from "../controllers/cencus-controller";
const cencusRouter = Router();

cencusRouter.post("/", createCencus);
cencusRouter.get("/", getAllData);
cencusRouter.get("/user/:id", getCencusDatabyId);
cencusRouter.delete("/:id", deleteCencusbyId);

export default cencusRouter;
