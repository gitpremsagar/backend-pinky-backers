import express from "express";
import {
  getAllusers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} from "../controllers/user.controllers";

const router = express.Router();

router.get("/", getAllusers);

router.post("/", createUser);

router.put("/:userId", updateUser);

router.delete("/:userId", deleteUser);

router.get("/:userId", getUserById);

export default router;
