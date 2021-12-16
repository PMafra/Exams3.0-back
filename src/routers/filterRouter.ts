import { Router } from 'express';
import * as filterController from '../controllers/filterController';
import auth from '../middlewares/auth';

const router = Router();

router.get('/schools', filterController.getSchools);
router.use(auth);

export default router;
