import { Router } from 'express';
import * as examController from '../controllers/examController';

const router = Router();

router.get('', examController.getFilteredExams);
router.post('/add', examController.addNewExam);

export default router;
