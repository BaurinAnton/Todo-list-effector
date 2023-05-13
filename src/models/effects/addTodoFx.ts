import { createEffect } from "effector";

import { TTodo, TTodoAdd } from "types";
import { URL, HEADERS } from "../constants";

type TAddTodoFx = (todo: TTodoAdd) => Promise<TTodo>;

export const addTodoFx = createEffect<TAddTodoFx>(async (todo) => {
  const req = await fetch(URL, {
    method: "POST",
    body: JSON.stringify(todo),
    headers: HEADERS,
  });
  return req.json();
});
