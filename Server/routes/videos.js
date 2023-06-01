import express from "express";
import { verifyToken } from "../Utils/verifyToken.js";
import {
  addVideo,
  addView,
  deleteVideo,
  getByTag,
  getVideo,
  random,
  search,
  sub,
  trend,
  updateVideo,
} from "../controllers/video.js";

const router = express.Router();

//create a video
router.post("/videos", verifyToken, addVideo);
router.put("/videos/:id", verifyToken, updateVideo);
router.delete("/videos/:id", verifyToken, deleteVideo);
router.get("/videos/find/:id", getVideo);
router.put("/videos/view/:id", addView);
router.get("/videos/trend", trend);
router.get("/videos/random", random);
router.get("/videos/sub", verifyToken, sub);
router.get("/videos/tags", getByTag);
router.get("/videos/search", search);

export default router;
