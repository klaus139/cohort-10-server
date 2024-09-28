import express from "express";
import { authenticate } from "../middlewares/authMiddleware.js";
import { authorizeAdmin } from "../middlewares/authorizeAdmin.js";
import { createCategory } from "../controllers/categoryController.js";
const router = express.Router();

router.post('/', authenticate, authorizeAdmin, createCategory)

export default router;