import express from "express";
import { register } from "../controllers/authControllers";

const router = express.Router();

router.get("/register", register);

export default router;
