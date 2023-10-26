import { ITodo } from 'model/todo';
import { Request, Response } from 'express';
import todoSchema from '../schema/todo';
import { getNanoid } from '../util/getNanoId';

let todos: ITodo[] = [
  {
    id: '0',
    title: 'abc',
    completed: false,
  },
  {
    id: '1',
    title: 'awe',
    completed: true,
  },
  {
    id: '2',
    title: 'tree',
    completed: true,
  },
];

interface IResponse {
  message: string;
  result?: ITodo[] | ITodo;
}

export const getAllTodos = async (req: Request, res: Response) => {
  try {
    const result: ITodo[] = await todoSchema.find();
    res.json({ message: 'Succesfully get all todos', result });
  } catch (err) {
    res.json({ message: JSON.stringify(err) });
  }
};

// params
export const getTodoByParams = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const result: ITodo = await todoSchema.findOne({ id });
    res.json({ message: `Succesfully get todo ${id}`, result });
  } catch (err) {
    res.json({ message: JSON.stringify(err) });
  }
};

// query
export const getTodoByQuery = async (req: Request, res: Response) => {
  const { title } = req.query;
  try {
    const result: ITodo = await todoSchema.findOne({ title });
    res.json({ message: `Succesfully get todo ${title}`, result });
  } catch (err) {
    res.json({ message: JSON.stringify(err) });
  }
};

// post
export const createTodo = async (req: Request, res: Response) => {
  try {
    const id = getNanoid();
    const newTodo = new todoSchema({
      id,
      title: req.body.title,
      completed: req.body.completed,
      // ...req.body
    });
    await newTodo.save(); // save()는 mongodb에서 제공해주는 method중에 하나.
    res.json({ message: 'successfully added!' });
  } catch (err) {
    res.json({ message: JSON.stringify(err) });
  }
};

// put
export const updateTodo = async (req: Request, res: Response) => {
  try {
    await todoSchema.findOneAndUpdate(
      { id: req.body.id },
      { title: req.body.title, completed: req.body.completed },
    );
    res.json({ message: `succesfully updated (id: ${req.body.id})` });
  } catch (err) {
    res.json({ message: JSON.stringify(err) });
  }
};

// delete
export const deleteTodo = async (req: Request, res: Response) => {
  try {
    await todoSchema.findOneAndDelete({ id: req.query.id });
    res.json({ message: `successfully updated (id: ${req.query.id})` });
  } catch (err) {
    res.json({ message: JSON.stringify(err) });
  }
};
