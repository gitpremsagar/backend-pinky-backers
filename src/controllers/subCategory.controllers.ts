import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getAllSubCategories = async (req: Request, res: Response) => {
  try {
    const subCategories = await prisma.subCategory.findMany();
    res.json({ subCategories });
  } catch (error) {
    console.log("Error in getAllSubCategories: ", error);
    res.status(500).json({ error: "Error getting all subCategories" });
  }
};

export const getSubCategoryById = async (req: Request, res: Response) => {
  const { subCategoryId } = req.params;
  try {
    const subCategory = await prisma.subCategory.findUnique({
      where: {
        subCategoryId,
      },
    });
    res.json({ subCategory });
  } catch (error) {
    console.log("Error in getSubCategoryById: ", error);
    res.status(500).json({ error: "Error getting subCategory by id" });
  }
};

export const createSubCategory = async (req: Request, res: Response) => {
  const { subCategoryName, categoryId } = req.body;
  try {
    const subCategory = await prisma.subCategory.create({
      data: {
        subCategoryName,
        categoryId,
      },
    });
    res.json({ subCategory });
  } catch (error) {
    console.log("Error in createSubCategory: ", error);
    res.status(500).json({ error: "Error creating subCategory" });
  }
};

export const updateSubCategory = async (req: Request, res: Response) => {
  const { subCategoryId } = req.params;
  const { subCategoryName, categoryId } = req.body;
  try {
    const subCategory = await prisma.subCategory.update({
      where: {
        subCategoryId,
      },
      data: {
        subCategoryName,
        categoryId,
      },
    });
    res.json({ subCategory });
  } catch (error) {
    console.log("Error in updateSubCategory: ", error);
    res.status(500).json({ error: "Error updating subCategory" });
  }
};

export const deleteSubCategory = async (req: Request, res: Response) => {
  const { subCategoryId } = req.params;
  try {
    await prisma.subCategory.delete({
      where: {
        subCategoryId,
      },
    });
    res.json({ message: "SubCategory deleted successfully" });
  } catch (error) {
    console.log("Error in deleteSubCategory: ", error);
    res.status(500).json({ error: "Error deleting subCategory" });
  }
};
