import { Router } from 'express';
import { validateRequest } from '../../../middlewares';
import * as TodosController from './todos.controller';
import { Todo } from './todos.model';

const router = Router();


router.get('/', TodosController.findAll);
router.post('/', validateRequest({ body: Todo }), TodosController.createOne);

export default router;