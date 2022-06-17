import React, {useState} from 'react';
import {Image, Keyboard, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';

function AddTodo() {
  const [input, setInput] = useState('');
  console.log(input);

  const addTodoList = () => {
    setInput('');
    Keyboard.dismiss();
  };

  return (
    <AddBlock>
      <TodoInput
        placeholder="할 일을 입력해주세요"
        value={input}
        onChangeText={setInput}
      />
      <TouchableOpacity activeOpacity={0.5} onPress={addTodoList}>
        <AddButton>
          <Image
            source={require('../../assets/icons/add_white/add_white.png')}
          />
        </AddButton>
      </TouchableOpacity>
    </AddBlock>
  );
}

export default AddTodo;

const AddBlock = styled.View`
  display: flex;
  align-items: center;
  flex-direction: row;
  padding: 0 16px;
  border-color: #bdbdbd;
  border-top-width: 0.7px;
  border-bottom-width: 0.7px;
`;

const TodoInput = styled.TextInput`
  flex: 1;
  font-size: 16px;
  padding: 16px 0;
`;

const AddButton = styled.View`
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: #26a69a;
  border-radius: 24px;
`;
