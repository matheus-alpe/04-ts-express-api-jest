import { Router, Request, Response } from 'express';
import { TodoWithId, Todos } from './todos.model';

const router = Router();

router.get('/', async (req: Request, res: Response<TodoWithId[]>) => {
  const result = await Todos.find();
  console.log('result:', result);
  const todos = await result.toArray();
  console.log('todos:', todos);
  res.json(todos);
});

export default router;