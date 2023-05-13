import { createStore, sample } from "effector";

import type { TTodos } from "types/todos";
import { addTodo, deleteTodo, completedTodo, getTodos } from "../events";
import {
  getTodosFx,
  addTodoFx,
  completedTodoFx,
  deleteTodoFx,
} from "../effects";

export const $todos = createStore<TTodos>([])
  .on(getTodosFx.doneData, (_, todos) => [...todos])
  .on(getTodosFx.fail, () => alert("Не удалось запросить Todo"))

  .on(addTodoFx.doneData, (todos, todo) => [...todos, todo])
  .on(addTodoFx.fail, () => alert("Не удалось добавить todo-штку"))

  .on(deleteTodoFx.doneData, (todos, isOk) =>
    todos.filter((todo) => todo.id !== isOk.id)
  )
  .on(deleteTodoFx.fail, () => alert("Не удалось удалить todo-штку"))

  .on(completedTodoFx.doneData, (todos, patchTodo) =>
    todos.map((todo) => {
      if (todo.id === patchTodo.id)
        return { ...todo, completed: patchTodo.completed };

      return todo;
    })
  )
  .on(completedTodoFx.fail, () => alert("Не удалось выполнить todo-шку"));

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
