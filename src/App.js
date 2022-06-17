import React from 'react';
import styled from 'styled-components/native';
import TodoApp from './components/TodoApp/TodoApp';

const App = () => {
  return (
    <MainView>
      <TodoApp />
    </MainView>
  );
};

export default App;

const MainView = styled.SafeAreaView`
  flex: 1;
`;
