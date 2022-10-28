import express from "express";
const router = express.Router();
import {
  createHotel,
  updateHotel,
  deleteHotel,
  getHotel,
  getHotels,
} from "../controllers/hotelControllers.js";
// import { createError } from "../utils/error.js";

// Create
router.post("/", createHotel);

// Update
router.put("/:id", updateHotel);

// Delete
router.delete("/:id", deleteHotel);

//Get
router.get("/:id", getHotel);

//get all
router.get("/", getHotels);

export default router;
