import express from "express";
import {
  createRegion,
  getRegions,
  getSingleRegion,
} from "../controllers/region.controller.js";

const router = express.Router();

router.post("/create-region", createRegion);
router.get("/get-regions", getRegions);
router.get("/get-region/:id", getSingleRegion);

export default router;
