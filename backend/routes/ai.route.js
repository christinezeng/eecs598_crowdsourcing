import express from "express";
import { generateContent } from "../controllers/ai.controllers.js";

const router = express.Router();

router.get("/", generateContent);

export default router;