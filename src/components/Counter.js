import React, {useState} from 'react';
import {Button, Text, View} from 'react-native';
import styled from 'styled-components';

function Counter() {
  const [number, setNumber] = useState(0);

  const onIncrease = () => {
    setNumber(prev => prev + 1);
  };

  const onDecrease = () => {
    setNumber(prev => prev - 1);
  };

  return (
    <CounterContainer>
      <NumberWrapper>
        <Number>{number}</Number>
      </NumberWrapper>
      <Button title="+1" onPress={onIncrease} />
      <Button title="-1" onPress={onDecrease} />
    </CounterContainer>
  );
}

export default Counter;

const CounterContainer = styled(View)`
  flex: 1;
`;

const NumberWrapper = styled(View)`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Number = styled(Text)`
  font-size: 72px;
  font-weight: bold;
`;
