import express from "express";
import { getImages } from "../controllers/image.controllers.js";

const router = express.Router();

router.get("/", getImages);

export default router;