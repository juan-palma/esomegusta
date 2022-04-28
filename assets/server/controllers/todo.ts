import {v4} from "../deps.ts";
import Todo from '../interfaces/Todo.ts';
import todos from '../stubs/todos.ts';


export default {
	getAllTodos: ({ response }: { response: any }) => {
		response.status = 200;
		response.body = {
			success: true,
			data: todos
		};
	},
	createTodo: async ({request, response}:{request:any, response:any}) => {
		const body = await request.body();
		if(!request.hasBody){
			response.status = 400;
			response.body = {
				success: false,
				message: "No data provied"
			};
			return;
		}

		//New data added.
		const values = await body.value;
		let newTodo:Todo = {
			id: v4.generate(),
			todo: values.todo,
			isCompleted: false
		}
		let data = [...todos, newTodo];
		response.status = 200;
		response.body = {
			success: true,
			data:data
		}
	},
	getTodoById: ({params, response}:{params:{id:string}, response:any}) => {
		const todo:Todo | undefined = todos.find(t =>{
			return t.id === params.id;
		});

		if(!todo){
			response.status = 404;
			response.body = {
				successes: false,
				message: "No found value"
			};
			return;
		}

		response.status = 200;
		response.body = {
			successes:true,
			data:todo
		};
	},
	updateTodoById: async ({params, request, response}:{params:{id:string}, request:any, response:any}) => {
		const todo:Todo | undefined = todos.find(t => t.id === params.id);
		if(!todo){
			response.status = 400;
			response.body = {
				success: false,
				message: "No value find"
			};
			return;
		}

		const body = await request.body();
		const value = await body.value;

		const updateData:{todo?:string; isCompleted?:boolean} = value;
		let newTodos = todos.map(t => {
			return t.id === params.id ? {...t, ...updateData} : t;
		});

		response.status = 200;
		response.body = {
			success: true,
			data: newTodos
		};
	},
	deleteTodoById: ({params, response}:{params:{id:string}, response:any}) => {
		const allTodos = todos.filter(t => t.id !== params.id);
		console.log(allTodos);

		response.status = 200;
		response.body = {
			success: true,
			data: allTodos
		}
	}
  };