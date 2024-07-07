import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getAllusers = async (req: Request, res: Response) => {
  try {
    const users = await prisma.user.findMany();
    res.json({ users });
  } catch (error) {
    console.log("Error in getAllusers: ", error);
    res.status(500).json({ error: "Error getting all users" });
  }
};

export const getUserById = async (req: Request, res: Response) => {
  const { userId } = req.params;
  try {
    const user = await prisma.user.findUnique({
      where: {
        userId,
      },
    });
    res.json({ user });
  } catch (error) {
    console.log("Error in getUserById: ", error);
    res.status(500).json({ error: "Error getting user by id" });
  }
};

export const createUser = async (req: Request, res: Response) => {
  const { email, firstName, lastName, contactNumber } = req.body;
  try {
    const user = await prisma.user.create({
      data: {
        email,
        firstName,
        lastName,
        contactNumber,
      },
    });
    res.json({ user });
  } catch (error) {
    console.log("Error in createUser: ", error);
    res.status(500).json({ error: "Error creating user" });
  }
};

export const updateUser = async (req: Request, res: Response) => {
  const { userId } = req.params;
  const { email, firstName, lastName, contactNumber } = req.body;
  try {
    const user = await prisma.user.update({
      where: {
        userId,
      },
      data: {
        email,
        firstName,
        lastName,
        contactNumber,
      },
    });
    res.json({ user });
  } catch (error) {
    console.log("Error in updateUser: ", error);
    res.status(500).json({ error: "Error updating user" });
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  const { userId } = req.params;
  try {
    await prisma.user.delete({
      where: {
        userId,
      },
    });
    res.json({ message: "User deleted" });
  } catch (error) {
    console.log("Error in deleteUser: ", error);
    res.status(500).json({ error: "Error deleting user" });
  }
};
