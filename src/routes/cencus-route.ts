import { Router } from "express";
import {
  createCencus,
  getAllData,
  getCencusDatabyId,
  deleteCencusbyId,
  deleteArchiveCencusbyId,
} from "../controllers/cencus-controller";
const cencusRouter = Router();

cencusRouter.post("/", createCencus);
cencusRouter.get("/", getAllData);
cencusRouter.get("/user/:id", getCencusDatabyId);
cencusRouter.delete("/:id", deleteCencusbyId);
cencusRouter.delete("/archive/:id", deleteArchiveCencusbyId);
cencusRouter.post("/restore/:id", deleteArchiveCencusbyId);

export default cencusRouter;
