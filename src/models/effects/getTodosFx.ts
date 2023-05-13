import { createEffect } from "effector";

import { TTodos } from "types";

const URL = "https://jsonplaceholder.typicode.com/todos";

type TGetTodosFx = () => Promise<TTodos>;

export const getTodosFx = createEffect<TGetTodosFx>(async () => {
  const req = await fetch(URL);
  return req.json();
});
