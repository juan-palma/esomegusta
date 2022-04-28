import { v4 } from "../deps.ts";
// interface
import Todo from '../interfaces/Todo.ts';

let todos:Todo[] = [
  {
    id: v4.generate(),
    todo: 'walk dog',
    isCompleted: true
  },
  {
    id: v4.generate(),
    todo: 'eat food',
    isCompleted: false
  },
];

export default todos;