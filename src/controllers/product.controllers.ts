import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getAllProducts = async (req: Request, res: Response) => {
  try {
    const products = await prisma.product.findMany({
      include: {
        category: true,
      },
    });
    res.json({ products });
  } catch (error) {
    console.log("Error in getAllProducts: ", error);
    res.status(500).json({ error: "Error getting all products" });
  }
};

export const getProductById = async (req: Request, res: Response) => {
  const { productId } = req.params;
  try {
    const product = await prisma.product.findUnique({
      where: {
        productId,
      },
    });
    res.json({ product });
  } catch (error) {
    console.log("Error in getProductById: ", error);
    res.status(500).json({ error: "Error getting product by id" });
  }
};

export const createProduct = async (req: Request, res: Response) => {
  const { productName, description, imageUrl, price, stock, categoryId } =
    req.body;
  try {
    const product = await prisma.product.create({
      data: {
        productName,
        description,
        imageUrl,
        price,
        stock,
        categoryId,
      },
    });
    res.json({ product });
  } catch (error) {
    console.log("Error in createProduct: ", error);
    res.status(500).json({ error: "Error creating product" });
  }
};

export const updateProduct = async (req: Request, res: Response) => {
  const { productId } = req.params;
  const { productName, description, imageUrl, price, stock, categoryId } =
    req.body;
  try {
    const product = await prisma.product.update({
      where: {
        productId,
      },
      data: {
        productName,
        description,
        imageUrl,
        price,
        stock,
        categoryId,
      },
    });
    res.json({ product });
  } catch (error) {
    console.log("Error in updateProduct: ", error);
    res.status(500).json({ error: "Error updating product" });
  }
};

export const deleteProduct = async (req: Request, res: Response) => {
  const { productId } = req.params;
  try {
    const product = await prisma.product.delete({
      where: {
        productId,
      },
    });
    res.json({ product });
  } catch (error) {
    console.log("Error in deleteProduct: ", error);
    res.status(500).json({ error: "Error deleting product" });
  }
};
