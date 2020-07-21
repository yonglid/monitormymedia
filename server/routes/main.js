import express from "express";
import {
  createContent,
  getAllContent,
  getSingleContent,
  updateContent,
  deleteContent,
} from "../controllers/content";
import {createFeedback} from '../controllers/feedback';

const router = express.Router();
router.post("/content", createContent);
router.get("/content", getAllContent);
router.post("/feedback", createFeedback);
// /api/content/:contentId
router.get("/content/:contentId", getSingleContent);
router.patch("/content/:contentId", updateContent);
router.delete("/content/:contentId", deleteContent);
export default router;
