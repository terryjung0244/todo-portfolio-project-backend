import { Router } from 'express';
import * as todoController from '../controller/todo';

const router = Router();

router.get('/getAllTodos', todoController.getAllTodos);
router.get('/getTodoByParams/:id', todoController.getTodoByParams);
router.get('/getTodoByQuery', todoController.getTodoByQuery);

router.post('/createTodo', todoController.createTodo);

router.put('/updateTodo', todoController.updateTodo);

router.delete('/deleteTodo', todoController.deleteTodo);

export default router;
