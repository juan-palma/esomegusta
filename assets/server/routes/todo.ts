import { Router } from "../deps.ts";

const router = new Router();

// Controller definitions
import todoController from "../controllers/todo.ts";

router
	.get("/todo", todoController.getAllTodos)
	.post("/todo", todoController.createTodo)
	.get("/todo/:id", todoController.getTodoById)
	.put("/todo/:id", todoController.updateTodoById)
	.delete("/todo/:id", todoController.deleteTodoById);

export default router;