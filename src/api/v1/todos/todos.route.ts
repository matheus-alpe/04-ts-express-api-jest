import { Router, Request, Response } from 'express';
import { TodoWithId, Todos } from './todos.model';

const router = Router();

router.get('/', async (req: Request, res: Response<TodoWithId[]>) => {
  const todos = await Todos.find().toArray();
  res.json(todos);
});

router.post('/', async (req: Request, res: Response) => {
  const { content } = req.body;
  const { insertedId } = await Todos.insertOne({
    content,
    done: false,
  });

  res.status(201).json({ id: insertedId });
});

export default router;