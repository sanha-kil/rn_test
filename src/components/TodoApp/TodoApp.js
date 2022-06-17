import React from 'react';
import {Platform} from 'react-native';
import styled from 'styled-components/native';
import AddTodo from './AddTodo';
import DateHead from './DateHead';
import Empty from './Empty';

function TodoApp() {
  const today = new Date();
  return (
    <TodoAppContainer>
      <TodoAppAvoid behavior={Platform.OS === 'ios' ? 'padding' : null}>
        <DateHead date={today} />
        <Empty />
        <AddTodo />
      </TodoAppAvoid>
    </TodoAppContainer>
  );
}

export default TodoApp;

const TodoAppContainer = styled.View`
  flex: 1;
`;

const TodoAppAvoid = styled.KeyboardAvoidingView`
  flex: 1;
`;
