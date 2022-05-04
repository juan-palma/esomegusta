import { Router } from "../deps.ts";
import controles from "../controllers/controles.ts";


// Controller definitions
const router = new Router();
router
	.get("/producto", controles.getAllProductos)
	// .post("/producto", controles.createTodo)
	// .get("/producto/:id", controles.getTodoById)
	// .put("/producto/:id", controles.updateTodoById)
	// .delete("/producto/:id", controles.deleteTodoById)
	.get("/destacados", controles.getAllDestacados)
	.get("/categorias", controles.getAllCategorias)
	.get("/categorias/:name", controles.getAllCategoriasByName)
	.get("/find/:text", controles.getFind)
;

export default router;