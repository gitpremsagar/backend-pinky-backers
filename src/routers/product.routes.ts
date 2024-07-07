import express from "express";
import {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/product.controllers";

const router = express.Router();

router.get("/", getAllProducts);

router.post("/", createProduct);

router.put("/:productId", updateProduct);

router.delete("/:productId", deleteProduct);

router.get("/:productId", getProductById);

export default router;
