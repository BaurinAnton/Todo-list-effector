import { memo, useCallback } from "react";

import { completedTodo, deleteTodo } from "models/events";
import { TTodo } from "types";
import { TodoItem } from "./TodoItem";

type TTodoItemContainerProps = {
  isCompleted: TTodo["completed"];
  id: TTodo["id"];
  title: TTodo["title"];
};

export const TodoItemContainer = memo(
  ({ isCompleted, id, title }: TTodoItemContainerProps) => {
    const handleDeleteTodo = useCallback(() => {
      deleteTodo(id);
    }, [id]);

    const handleChangeTodo = useCallback(() => {
      completedTodo({ completed: !isCompleted, id });
    }, [isCompleted, id]);

    return (
      <TodoItem
        handleDeleteTodo={handleDeleteTodo}
        handleChangeTodo={handleChangeTodo}
        isCompleted={isCompleted}
      >
        {title}
      </TodoItem>
    );
  }
);
