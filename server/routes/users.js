import express from "express";
import { login, signup } from "../controllers/auth.js";

const router = express.Router();

router.post('/signup', signup)

router.post('/login', login)

router.get("/", (req, res) => {
  res.send("Hii welcome");
})

export default router;