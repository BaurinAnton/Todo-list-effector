import { memo } from "react";
import { styled } from "styled-components";

import { TTodo } from "types";

type TTodoItemProps = {
  children: React.ReactNode;
  handleDeleteTodo: () => void;
  handleChangeTodo: () => void;
  isCompleted: TTodo["completed"];
};

export const TodoItem = memo(
  ({
    children,
    handleDeleteTodo,
    handleChangeTodo,
    isCompleted,
  }: TTodoItemProps) => (
    <TodoItemStyle>
      <ChangeTodoItemStyle
        type="checkbox"
        onChange={handleChangeTodo}
        checked={isCompleted}
      />
      <TextTodoItemStyle isCompleted={isCompleted}>
        {children}
      </TextTodoItemStyle>
      <DeleteTodoItemStyle onClick={handleDeleteTodo}>
        Удалить
      </DeleteTodoItemStyle>
    </TodoItemStyle>
  )
);

const TodoItemStyle = styled.div`
  padding: 10px;
  border-radius: 5px;
  border: 1px solid green;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
`;

const DeleteTodoItemStyle = styled.button`
  padding: 6px;
  font-size: 16px;
  background-color: #ff2828;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 5px;
`;

const ChangeTodoItemStyle = styled.input`
  transform: scale(1.3);
`;

type TTextTodoItemStyleProps = {
  isCompleted: TTodo["completed"];
};
const TextTodoItemStyle = styled.div<TTextTodoItemStyleProps>`
  font-size: 20px;
  text-decoration: ${({ isCompleted }) => isCompleted && "line-through"};
`;
