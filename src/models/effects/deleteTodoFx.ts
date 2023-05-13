import { createEffect } from "effector";

import { TTodoDelete } from "types";

type TAddTodoFx = (
  id: TTodoDelete
) => Promise<{ ok: boolean; id: TTodoDelete }>;

export const deleteTodoFx = createEffect<TAddTodoFx>(async (id) => {
  const URL = `https://jsonplaceholder.typicode.com/todos/${id}`;

  const req = await fetch(URL, {
    method: "DELETE",
  });
  return { ok: req.ok, id };
});
