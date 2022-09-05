import { ParamsWithId } from '../../../interfaces/ParamsWithId';
import { Router } from 'express';
import { validateRequest } from '../../../middlewares';
import * as TodosController from './todos.controller';
import { Todo } from './todos.model';

const router = Router();


router.get('/', TodosController.findAll);
router.get('/:id', validateRequest({ params: ParamsWithId }), TodosController.findOne);
router.post('/', validateRequest({ body: Todo }), TodosController.createOne);
router.put('/:id', validateRequest({ params: ParamsWithId, body: Todo }), TodosController.updateOne);
router.delete('/:id', validateRequest({ params: ParamsWithId }), TodosController.deleteOne);

export default router;