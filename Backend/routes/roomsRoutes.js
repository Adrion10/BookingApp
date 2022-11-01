import express from "express";
const router = express.Router();
import {
  createRoom,
  updateRoom,
  deleteRoom,
  getRoom,
  getRooms,
} from "../controllers/roomControllers.js";
import { verifyAdmin } from "../utils/verifyToken.js";

// Create
router.post("/", verifyAdmin, createRoom);

// Update
router.put("/:id", verifyAdmin, updateRoom);

// Delete
router.delete("/:id", verifyAdmin, deleteRoom);

//Get
router.get("/:id", getRoom);

//get all
router.get("/", getRooms);

export default router;
