import React from 'react';
import {Text} from 'react-native';
import styled from 'styled-components';

function TodoList({todos}) {
  console.log(todos);
  return (
    <TodoListContainer>
      <Text>TodoList</Text>
    </TodoListContainer>
  );
}

export default TodoList;

const TodoListContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
