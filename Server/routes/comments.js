import express from "express";
import { verifyToken } from "../Utils/verifyToken.js";
import {
  addComment,
  deleteComment,
  getComments,
} from "../controllers/comment.js";
const router = express.Router();

router.post("/comments", verifyToken, addComment);
router.delete("/comments/:id", verifyToken, deleteComment);
router.get("/comments/:videoId", getComments);

export default router;
