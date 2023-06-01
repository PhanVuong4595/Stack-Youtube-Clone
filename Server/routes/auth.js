import express from "express";
import { googleAuth, logout, signin, signup } from "../controllers/auth.js";

const router = express.Router();

//CREATE A USER
router.post("/auth/signup", signup);

//SIGN IN
router.post("/auth/signin", signin);

//GOOGLE AUTH
router.post("/auth/google", googleAuth);

//logout
router.post("/logout", logout);

export default router;
