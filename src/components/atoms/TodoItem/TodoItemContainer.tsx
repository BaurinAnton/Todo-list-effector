import { useCallback, useEffect } from "react";
import { completedTodo, deleteTodo } from "../../../models/events";
import { TTodo } from "types";
import { TodoItem } from "./TodoItem";

type TTodoItemContainerProps = {
  todo: TTodo;
};

export const TodoItemContainer = ({ todo }: TTodoItemContainerProps) => {
  const handleDeleteTodo = useCallback(() => {
    deleteTodo(todo.id);
  }, [todo.id]);

  const handleChangeTodo = useCallback(() => {
    completedTodo({ completed: !todo.completed, id: todo.id });
  }, [todo.completed, todo.id]);

  return (
    <TodoItem
      handleDeleteTodo={handleDeleteTodo}
      handleChangeTodo={handleChangeTodo}
      isCompleted={todo.completed}
    >
      {todo.title}
    </TodoItem>
  );
};
