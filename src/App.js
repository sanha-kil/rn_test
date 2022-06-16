import React from 'react';
import {SafeAreaView} from 'react-native';
import styled from 'styled-components';
import TodoApp from './components/TodoApp/TodoApp';

const App = () => {
  return (
    <MainView>
      <TodoApp />
    </MainView>
  );
};

export default App;

const MainView = styled(SafeAreaView)`
  flex: 1;
`;
