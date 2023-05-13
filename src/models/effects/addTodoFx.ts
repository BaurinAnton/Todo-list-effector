import { createEffect } from "effector";
import { TTodo, TTodoAdd } from "types";

const URL = "https://jsonplaceholder.typicode.com/todos";
const HEADERS = {
  "Content-type": "application/json; charset=UTF-8",
};

type TAddTodoFx = (todo: TTodoAdd) => Promise<TTodo>;

export const addTodoFx = createEffect<TAddTodoFx>(async (todo) => {
  const req = await fetch(URL, {
    method: "POST",
    body: JSON.stringify(todo),
    headers: HEADERS,
  });
  return req.json();
});
