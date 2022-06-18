import React, {useState} from 'react';
import {Platform} from 'react-native';
import styled from 'styled-components/native';
import 'react-native-get-random-values';
import {v4 as uuidv4} from 'uuid';
import TodoInput from './TodoInput';
import DateHead from './DateHead';
import Empty from './Empty';
import TodoList from './TodoList';

function TodoApp() {
  const [todos, setTodos] = useState([
    {
      id: 0,
      text: '작업',
      done: true,
    },
  ]);
  const today = new Date();

  const addTodo = input => {
    const targetTodo = {id: uuidv4(), text: input, done: false};
    setTodos([...todos, targetTodo]);
  };

  console.log(todos);

  return (
    <TodoAppContainer>
      <TodoAppAvoid behavior={Platform.OS === 'ios' ? 'padding' : null}>
        <DateHead date={today} />
        {todos.length ? <TodoList todos={todos} /> : <Empty />}
        <TodoInput addTodo={addTodo} />
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
