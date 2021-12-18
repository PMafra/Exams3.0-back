import { Router } from 'express';
import * as filterController from '../controllers/filterController';

const router = Router();

router.get('/schools', filterController.getSchools);
router.get('/categories', filterController.getCategories);
router.post('/professors', filterController.getProfessorsByFilter);
router.post('/subjects', filterController.getSubjectsByFilter);

export default router;
