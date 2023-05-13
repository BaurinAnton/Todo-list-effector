import { useStore } from "effector-react";
import styled from "styled-components";
import { $isLoading, $todosCompleted, $todosNotCompleted } from "models/stores";
import { TodoItemContainer } from "../../atoms";
import { getTodos } from "models/events";
import { useEffect } from "react";

export const TodoListContainer = () => {
  const isLoading = useStore($isLoading);
  const todosCompleted = useStore($todosCompleted);
  const todosNotCompleted = useStore($todosNotCompleted);

  useEffect(() => getTodos(), []);

  if (isLoading) return <LoadingStyle>Загрузка...</LoadingStyle>;

  return (
    <>
      <div>
        <TitleTodoListStyle>Невыполненные TODO</TitleTodoListStyle>
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
        <TitleTodoListStyle>Выполненные TODO</TitleTodoListStyle>
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
