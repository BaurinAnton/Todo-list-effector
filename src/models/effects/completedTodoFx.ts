import { createEffect } from "effector";

import { TTodo, TTodoCompleted } from "types";
import { URL, HEADERS } from "../constants";

type TCompletedTodoFx = (
  todo: TTodoCompleted,
  id: TTodo["id"]
) => Promise<TTodo>;

export const completedTodoFx = createEffect<TCompletedTodoFx>(
  async ({ completed, id }) => {
    const body = { completed };

    const req = await fetch(`${URL}/${id}`, {
      method: "PATCH",
      body: JSON.stringify(body),
      headers: HEADERS,
    });
    return req.json();
  }
);
