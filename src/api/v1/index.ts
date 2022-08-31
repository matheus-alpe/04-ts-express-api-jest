import express from 'express';

import MessageResponse from '@interfaces/MessageResponse';
import todos from './todos/todos.route';

const router = express.Router();

router.get<{}, MessageResponse>('/', (req, res) => {
  res.json({
    message: 'TODOS API - V1',
  });
});

router.use('/todos', todos);

export default router;
