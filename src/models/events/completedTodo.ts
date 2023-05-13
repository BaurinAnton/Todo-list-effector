import { createEvent } from "effector";
import type { TTodoCompleted } from "types";

export const completedTodo = createEvent<TTodoCompleted>();
