import express from "express";
import {
  createRegion,
  deleteRegion,
  editRegion,
  getRegions,
  getSingleRegion,
} from "../controllers/region.controller.js";

const router = express.Router();

router.post("/create-region", createRegion);
router.get("/get-regions", getRegions);
router.get("/get-region/:id", getSingleRegion);
router.delete("/delete-region/:id", deleteRegion);
router.put("/edit-refion/:id", editRegion);

export default router;
