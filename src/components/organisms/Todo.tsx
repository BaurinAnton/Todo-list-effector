import { styled } from "styled-components";
import { AddTodoContainer, TodoListContainer } from "components/molecules";

export const Todo = () => (
  <TodoStyle>
    <AddTodoContainer />
    <TodoListContainer />
  </TodoStyle>
);

const TodoStyle = styled.div``;
