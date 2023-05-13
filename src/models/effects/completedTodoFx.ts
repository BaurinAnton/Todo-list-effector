import { createEffect } from "effector";

import { TTodo, TTodoCompleted } from "types";

const HEADERS = {
  "Content-type": "application/json; charset=UTF-8",
};

type TCompletedTodoFx = (
  todo: TTodoCompleted,
  id: TTodo["id"]
) => Promise<TTodo>;

export const completedTodoFx = createEffect<TCompletedTodoFx>(
  async ({ completed, id }) => {
    const URL = `https://jsonplaceholder.typicode.com/todos/${id}`;
    const body = { completed };

    const req = await fetch(URL, {
      method: "PATCH",
      body: JSON.stringify(body),
      headers: HEADERS,
    });
    return req.json();
  }
);
