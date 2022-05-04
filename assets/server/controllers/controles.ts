import getAllProductos from "./functions/getAllProductos.ts";
import getAllDestacados from "./functions/getAllDestacados.ts";
import getAllCategorias from "./functions/getAllCategorias.ts";
import getCategoriaByName from "./functions/getCategoriaByName.ts";
import getFind from "./functions/getFind.ts";


export default {
	getAllDestacados: getAllDestacados,
	getAllProductos: getAllProductos,
	// createTodo: async ({request, response}:{request:any, response:any}) => {
	// 	const body = await request.body();
	// 	if(!request.hasBody){
	// 		response.status = 400;
	// 		response.body = {
	// 			success: false,
	// 			message: "No data provied"
	// 		};
	// 		return;
	// 	}

	// 	//New data added.
	// 	const values = await body.value;
	// 	const newTodo:Todo = {
	// 		id: globalThis.crypto.randomUUID(),
	// 		todo: values.todo,
	// 		isCompleted: false
	// 	}
	// 	const data = [...todos, newTodo];
	// 	response.status = 200;
	// 	response.body = {
	// 		success: true,
	// 		data:data
	// 	}
	// },
	// getTodoById: ({params, response}:{params:{id:string}, response:any}) => {
	// 	const todo:Todo | undefined = todos.find(t =>{
	// 		return t.id === params.id;
	// 	});

	// 	if(!todo){
	// 		response.status = 404;
	// 		response.body = {
	// 			successes: false,
	// 			message: "No found value"
	// 		};
	// 		return;
	// 	}

	// 	response.status = 200;
	// 	response.body = {
	// 		successes:true,
	// 		data:todo
	// 	};
	// },
	// updateTodoById: async ({params, request, response}:{params:{id:string}, request:any, response:any}) => {
	// 	const todo:Todo | undefined = todos.find(t => t.id === params.id);
	// 	if(!todo){
	// 		response.status = 400;
	// 		response.body = {
	// 			success: false,
	// 			message: "No value find"
	// 		};
	// 		return;
	// 	}

	// 	const body = await request.body();
	// 	const value = await body.value;

	// 	const updateData:{todo?:string; isCompleted?:boolean} = value;
	// 	const newTodos = todos.map(t => {
	// 		return t.id === params.id ? {...t, ...updateData} : t;
	// 	});

	// 	response.status = 200;
	// 	response.body = {
	// 		success: true,
	// 		data: newTodos
	// 	};
	// },
	// deleteTodoById: ({params, response}:{params:{id:string}, response:any}) => {
	// 	const allTodos = todos.filter(t => t.id !== params.id);

	// 	response.status = 200;
	// 	response.body = {
	// 		success: true,
	// 		data: allTodos
	// 	}
	// },
	getAllCategorias : getAllCategorias,
	getAllCategoriasByName : getCategoriaByName,
	getFind: getFind
  };