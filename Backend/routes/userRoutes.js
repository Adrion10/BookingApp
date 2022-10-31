import express from "express";
const router = express.Router();
import {
  updateUser,
  deleteUser,
  getUser,
  getUsers,
} from "../controllers/userControllers.js";
import { verifyToken, verifyUser, verifyAdmin } from "../utils/verifyToken.js";
// import { createError } from "../utils/error.js";

// router.get("/checkauthenticaion", verifyToken, (req, res, next) => {
//   res.send("hello user, you are logged in!");
// });
// router.put("/checkuser:id", verifyUser, (req, res, next) => {
//   res.send("hello user, you are logged in and you can delete your account!");
// });
// router.put("/checkadmin:id", verifyAdmin, (req, res, next) => {
//   res.send("hello Admin, you are logged in and you can delete all account!");
// });
// Update
router.put("/:id", verifyUser, updateUser);

// Delete
router.delete("/:id", verifyUser, deleteUser);

//Get
router.get("/:id", verifyUser, getUser);

//get all
router.get("/", verifyAdmin, getUsers);

export default router;
