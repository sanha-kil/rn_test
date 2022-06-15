import React from 'react';
import {SafeAreaView} from 'react-native';
import styled from 'styled-components';
import Counter from './components/Counter';

const App = () => {
  return (
    <MainView>
      <Counter />
    </MainView>
  );
};

export default App;

const MainView = styled(SafeAreaView)`
  flex: 1;
  background-color: cyan;
`;
