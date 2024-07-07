import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getAllCategories = async (req: Request, res: Response) => {
  try {
    const categories = await prisma.category.findMany();
    res.json({ categories });
  } catch (error) {
    console.log("Error in getAllCategories: ", error);
    res.status(500).json({ error: "Error getting all categories" });
  }
};

export const getCategoryById = async (req: Request, res: Response) => {
  const { categoryId } = req.params;
  try {
    const category = await prisma.category.findUnique({
      where: {
        categoryId,
      },
    });
    res.json({ category });
  } catch (error) {
    console.log("Error in getCategoryById: ", error);
    res.status(500).json({ error: "Error getting category by id" });
  }
};

export const createCategory = async (req: Request, res: Response) => {
  const { categoryName } = req.body;
  try {
    const category = await prisma.category.create({
      data: {
        categoryName,
      },
    });
    res.json({ category });
  } catch (error) {
    console.log("Error in createCategory: ", error);
    res.status(500).json({ error: "Error creating category" });
  }
};

export const updateCategory = async (req: Request, res: Response) => {
  const { categoryId } = req.params;
  const { categoryName } = req.body;
  try {
    const category = await prisma.category.update({
      where: {
        categoryId,
      },
      data: {
        categoryName,
      },
    });
    res.json({ category });
  } catch (error) {
    console.log("Error in updateCategory: ", error);
    res.status(500).json({ error: "Error updating category" });
  }
};

export const deleteCategory = async (req: Request, res: Response) => {
  const { categoryId } = req.params;
  try {
    await prisma.category.delete({
      where: {
        categoryId,
      },
    });
    res.json({ message: "Category deleted successfully" });
  } catch (error) {
    console.log("Error in deleteCategory: ", error);
    res.status(500).json({ error: "Error deleting category" });
  }
};
