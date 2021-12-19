import { Router } from 'express';
import * as filterController from '../controllers/filterController';

const router = Router();

router.get('/schools', filterController.getSchools);
router.get('/categories', filterController.getCategories);
router.get('/professors', filterController.getProfessorsByFilter);
router.get('/subjects', filterController.getSubjectsByFilter);

export default router;
