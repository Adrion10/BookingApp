import express from "express";
const router = express.Router();
import {
  updateUser,
  deleteUser,
  getUser,
  getUsers,
} from "../controllers/userControllers.js";
import { verifyToken } from "../utils/verifyToken.js";
// import { createError } from "../utils/error.js";

router.get("/checkauthenticaion", verifyToken, (req, res, next) => {
  res.send("hello user, you are logged in!");
});
// Update
router.put("/:id", updateUser);

// Delete
router.delete("/:id", deleteUser);

//Get
router.get("/:id", getUser);

//get all
router.get("/", getUsers);

export default router;
