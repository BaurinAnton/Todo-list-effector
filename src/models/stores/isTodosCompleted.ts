import { $todos } from "./todos";

export const $todosCompleted = $todos.map((todo) =>
  todo.filter((todo) => todo.completed)
);

export const $todosNotCompleted = $todos.map((todo) =>
  todo.filter((todo) => !todo.completed)
);
