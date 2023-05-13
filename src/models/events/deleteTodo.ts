import { createEvent } from "effector";
import type { TTodoDelete } from "types";

export const deleteTodo = createEvent<TTodoDelete>();
