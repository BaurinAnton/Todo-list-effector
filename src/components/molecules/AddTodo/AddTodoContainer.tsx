import { addTodo } from "models/events";
import { TTodo } from "types";
import { AddTodo } from "./AddTodo";
import { ChangeEvent, useCallback, useState } from "react";

export const AddTodoContainer = () => {
  const [valueChangeInput, setValueChangeInput] = useState<TTodo["title"]>("");

  const handleAddTodo = useCallback(() => {
    const newTodo = {
      userId: 1,
      title: valueChangeInput,
      completed: false,
    };

    addTodo(newTodo);
  }, [valueChangeInput]);

  const handleChangeInput = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setValueChangeInput(event.target.value);
    },
    []
  );

  return (
    <AddTodo
      handleAddTodo={handleAddTodo}
      handleChangeInput={handleChangeInput}
      valueChangeInput={valueChangeInput}
    />
  );
};
