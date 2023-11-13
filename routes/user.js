import express from "express";
import {
  updateUser,
  deleteUser,
  getUser,
  getUsers,
} from "../controllers/user.js";
import { verifyAdmin, verifyUser } from "../utils/verify.js";

const router = express.Router();

router.get("/", verifyAdmin, getUsers)
router.route('/:id')
  .get(verifyUser, getUser)
  .put(verifyUser, updateUser)
  .delete(verifyUser, deleteUser)

export default router
