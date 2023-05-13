import { createEffect } from "effector";

import { TTodoDelete } from "types";
import { URL } from "../constants";

type TAddTodoFx = (
  id: TTodoDelete
) => Promise<{ ok: boolean; id: TTodoDelete }>;

export const deleteTodoFx = createEffect<TAddTodoFx>(async (id) => {
  const req = await fetch(`${URL}/${id}`, {
    method: "DELETE",
  });
  return { ok: req.ok, id };
});
