import express from "express";
import { verifyToken } from "../Utils/verifyToken.js";
import { deleteUser, dislike, getUser, like, subscribe, unsubscribe, update } from "../controllers/user.js";

const router = express.Router();

//update user
router.put("/users/:id", verifyToken, update);

//delete user
router.delete("/users/:id", verifyToken,deleteUser);

//get a user
router.get("/users/find/:id", getUser);

//subscribe a user
router.put("/users/sub/:id", verifyToken, subscribe);

//unsubscribe a user
router.put("/users/unsub/:id", verifyToken, unsubscribe);

//like a video
router.put("/users/like/:videoId", verifyToken, like);

//dislike a video
router.put("/users/dislike/:videoId", verifyToken, dislike);

export default router;
