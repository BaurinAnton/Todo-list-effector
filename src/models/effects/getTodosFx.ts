import { createEffect } from "effector";

import { TTodos } from "types";
import { URL } from "../constants";

type TGetTodosFx = () => Promise<TTodos>;

export const getTodosFx = createEffect<TGetTodosFx>(async () => {
  const req = await fetch(URL);
  return req.json();
});
