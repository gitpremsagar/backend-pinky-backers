import express from "express";
import {
  getAllCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
} from "../controllers/category.controllers";

const router = express.Router();

router.get("/", getAllCategories);

router.post("/", createCategory);

router.put("/:categoryId", updateCategory);

router.delete("/:categoryId", deleteCategory);

router.get("/:categoryId", getCategoryById);

export default router;
