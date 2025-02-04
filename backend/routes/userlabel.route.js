import express from "express";
import { createUserLabel, updateUserLabel } from "../controllers/userlabel.controllers.js";

const router = express.Router();

router.post("/", createUserLabel);
router.put("/:user_id/:image_id", updateUserLabel);

export default router;