import { ChangeEvent, memo } from "react";
import styled from "styled-components";

import { ADD } from "./constants";

type TAddTodoProps = {
  handleAddTodo: () => void;
  handleChangeInput: (event: ChangeEvent<HTMLInputElement>) => void;
  valueChangeInput: string;
};

export const AddTodo = memo(
  ({ handleAddTodo, handleChangeInput, valueChangeInput }: TAddTodoProps) => (
    <AddTodoStyle>
      <InputStyle
        type="text"
        onChange={handleChangeInput}
        value={valueChangeInput}
      />
      <ButtonStyle onClick={handleAddTodo}>{ADD}</ButtonStyle>
    </AddTodoStyle>
  )
);

const AddTodoStyle = styled.div`
  display: flex;
  align-items: center;
`;

const InputStyle = styled.input`
  width: 100%;
  margin-right: 10px;
  padding: 4px;
  font-size: 20px;
`;

const ButtonStyle = styled.button`
  padding: 6px;
  font-size: 20px;
  background-color: #4bb04b;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 5px;
`;
