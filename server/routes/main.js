import express from "express";
import {
  createContent,
  getAllContent,
  getSingleContent,
  updateContent,
  deleteContent,
} from "../controllers/content";

const router = express.Router();
router.post("/content", createContent);
router.get("/content", getAllContent);
router.get("/content/:contentId", getSingleContent);
router.patch("/content/:contentId", updateContent);
router.delete("/content/:contentId", deleteContent);
export default router;
