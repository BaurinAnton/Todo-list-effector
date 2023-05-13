import { useEffect } from "react";
import { useStore } from "effector-react";
import styled from "styled-components";

import { $isLoading, $todosCompleted, $todosNotCompleted } from "models/stores";
import { getTodos } from "models/events";
import { COMPLITED_TODO, LOADING, NOT_COMPLITED_TODO } from "./constants";
import { TodoItemContainer } from "../../atoms";

export const TodoListContainer = () => {
  const isLoading = useStore($isLoading);
  const todosCompleted = useStore($todosCompleted);
  const todosNotCompleted = useStore($todosNotCompleted);

  useEffect(() => getTodos(), []);

  if (isLoading) return <LoadingStyle>{LOADING}</LoadingStyle>;

  return (
    <>
      <div>
        <TitleTodoListStyle>{NOT_COMPLITED_TODO}</TitleTodoListStyle>
        <TodoListStyle>
          {todosNotCompleted.map((todo) => (
            <TodoItemContainer
              isCompleted={todo.completed}
              id={todo.id}
              title={todo.title}
              key={todo.id}
            />
          ))}
        </TodoListStyle>
      </div>
      <div>
        <TitleTodoListStyle>{COMPLITED_TODO}</TitleTodoListStyle>
        <TodoListStyle>
          {todosCompleted.map((todo) => (
            <TodoItemContainer
              isCompleted={todo.completed}
              id={todo.id}
              title={todo.title}
              key={todo.id}
            />
          ))}
        </TodoListStyle>
      </div>
    </>
  );
};

const TitleTodoListStyle = styled.span`
  margin-top: 16px;
  font-size: 20px;
`;

const TodoListStyle = styled.div`
  margin-top: 10px;
  font-size: 20px;
  width: 100%;
  height: 20vh;
  overflow: scroll;
`;

const LoadingStyle = styled.div`
  margin-top: 10px;
  text-align: center;
  width: 100%;
`;
