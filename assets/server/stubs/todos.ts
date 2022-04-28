// interface
import Todo from '../interfaces/Todo.ts';

const todos:Todo[] = [
  {
    id: globalThis.crypto.randomUUID(),
    todo: 'walk dog',
    isCompleted: true
  },
  {
    id: globalThis.crypto.randomUUID(),
    todo: 'eat food',
    isCompleted: false
  },
];

export default todos;