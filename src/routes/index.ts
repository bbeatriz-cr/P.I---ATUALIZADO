import { Router } from 'express';
import * as HomeController from '../controllers/homeController';
import * as formController from '../controllers/formController';

const router = Router();

router.get('/', HomeController.home);

router.get('/form',formController.form)

export default router;