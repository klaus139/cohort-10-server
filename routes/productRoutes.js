import express from "express";
import formidable from "express-formidable";
import checkId from "../middlewares/checkId.js";
import { authenticate } from "../middlewares/authMiddleware.js";
import { authorizeAdmin } from "../middlewares/authorizeAdmin.js";
import { addProduct } from "../controllers/productController.js";

const productRouter =express.Router();
console.log('we ar ehere')
productRouter.post('/', authenticate, authorizeAdmin, formidable(), addProduct);

export default productRouter;
