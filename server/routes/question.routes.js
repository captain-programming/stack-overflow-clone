import express from "express";
import { askQuestion, deleteQuestion, getQuestion, getQuestionById } from "../controllers/askQuestion.controller.js";

const router = express.Router();

router.post("/ask", askQuestion);
router.get("/", getQuestion);
router.get("/:id", getQuestionById);
router.delete("/delete/:id", deleteQuestion);

export default router;