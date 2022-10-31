import express from "express";
const router = express.Router();
import {
  updateUser,
  deleteUser,
  getUser,
  getUsers,
} from "../controllers/UserControllers.js";
// import { createError } from "../utils/error.js";

// Update
router.put("/:id", updateUser);

// Delete
router.delete("/:id", deleteUser);

//Get
router.get("/:id", getUser);

//get all
router.get("/", getUsers);

export default router;
