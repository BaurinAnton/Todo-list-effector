import { createStore, sample } from "effector";

import type { TTodos } from "types/todos";
import {
  ERROR_ADD_TODO,
  ERROR_COMPLETED_TODO,
  ERROR_DELETE_TODO,
  ERROR_GET_TODO,
} from "models/constants";
import { addTodo, deleteTodo, completedTodo, getTodos } from "../events";
import {
  getTodosFx,
  addTodoFx,
  completedTodoFx,
  deleteTodoFx,
} from "../effects";

export const $todos = createStore<TTodos>([])
  .on(getTodosFx.doneData, (_, todos) => [...todos])
  .on(getTodosFx.fail, () => alert(ERROR_GET_TODO))

  .on(addTodoFx.doneData, (todos, todo) => [...todos, todo])
  .on(addTodoFx.fail, () => alert(ERROR_ADD_TODO))

  .on(deleteTodoFx.doneData, (todos, isOk) =>
    todos.filter((todo) => todo.id !== isOk.id)
  )
  .on(deleteTodoFx.fail, () => alert(ERROR_DELETE_TODO))

  .on(completedTodoFx.doneData, (todos, patchTodo) =>
    todos.map((todo) => {
      if (todo.id === patchTodo.id)
        return { ...todo, completed: patchTodo.completed };

      return todo;
    })
  )
  .on(completedTodoFx.fail, () => alert(ERROR_COMPLETED_TODO));

export const $isLoading = createStore<boolean>(false)
  .on(getTodosFx, () => true)
  .on(getTodosFx.done, () => false)
  .on(getTodosFx.fail, () => false)

  .on(addTodoFx, () => true)
  .on(addTodoFx.done, () => false)
  .on(addTodoFx.fail, () => false)

  .on(deleteTodoFx, () => true)
  .on(deleteTodoFx.done, () => false)
  .on(deleteTodoFx.fail, () => false)

  .on(completedTodoFx, () => true)
  .on(completedTodoFx.done, () => false)
  .on(completedTodoFx.fail, () => false);

sample({
  clock: getTodos,
  target: getTodosFx,
});

sample({
  clock: addTodo,
  target: addTodoFx,
});

sample({
  clock: completedTodo,
  target: completedTodoFx,
});

sample({
  clock: deleteTodo,
  target: deleteTodoFx,
});
