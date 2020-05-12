import express from 'express';
import { createCause, getAllCause, getSingleCause, updateCause, deleteCause } from '../controllers/cause';
import { createContent, getAllContent, getSingleContent, updateContent, deleteContent } from '../controllers/content';

const router = express.Router();
router.post('/causes', createCause);
router.get('/causes', getAllCause); 
router.get('/causes/:causeId', getSingleCause);
router.patch('/causes/:causeId', updateCause); 
router.delete('/causes/:causeId', deleteCause);

router.post('/content', createContent); 
router.get('/content', getAllContent); 
router.get('/content/:contentId', getSingleContent); 
router.patch('/content/:contentId', updateContent); 
router.delete('/content/:contentId', deleteContent); 
export default router;
