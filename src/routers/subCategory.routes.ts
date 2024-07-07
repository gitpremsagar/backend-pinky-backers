import express from "express";
import {
  getAllSubCategories,
  getSubCategoryById,
  createSubCategory,
  updateSubCategory,
  deleteSubCategory,
} from "../controllers/subCategory.controllers";

const router = express.Router();

router.get("/", getAllSubCategories);

router.post("/", createSubCategory);

router.put("/:subCategoryId", updateSubCategory);

router.delete("/:subCategoryId", deleteSubCategory);

router.get("/:subCategoryId", getSubCategoryById);

export default router;
