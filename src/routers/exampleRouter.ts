import { Router } from 'express';
import * as exampleController from '../controllers/exampleController';
import auth from '../middlewares/auth';

const router = Router();

router.use(auth);
router.get('', exampleController.example);

export default router;
