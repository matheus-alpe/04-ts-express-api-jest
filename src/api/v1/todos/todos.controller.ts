import { NextFunction, Request, Response } from 'express';
import { TodoWithId, Todos, Todo } from './todos.model';

export async function findAll(req: Request, res: Response<TodoWithId[]>, next: NextFunction) {
  try {
    const todos = await Todos.find().toArray();
    res.json(todos);
  } catch (error) {
    next(error);
  }
}

export async function createOne(req: Request<{}, TodoWithId, Todo>, res: Response<TodoWithId>, next: NextFunction) {
  try {
    const insertedResult = await Todos.insertOne(req.body);
    if (!insertedResult.acknowledged) throw new Error('Error inserting todo.');
  
    res.status(201).json({
      _id: insertedResult.insertedId,
      ...req.body,
    });
  } catch (error) {
    next(error);
  }
}