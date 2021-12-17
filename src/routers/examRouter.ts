import { Router } from 'express';
import * as examController from '../controllers/examController';
import auth from '../middlewares/auth';

const router = Router();

router.post('', examController.getFilteredExams);

router.use(auth);

export default router;
