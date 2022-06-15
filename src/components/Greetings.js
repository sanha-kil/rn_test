import React from 'react';
import {Text, View} from 'react-native';
import styled from 'styled-components';

function Greetings({messege}) {
  return (
    <GreetingsView>
      <HelloText>안녕하세요 {messege}</HelloText>
    </GreetingsView>
  );
}

export default Greetings;

const GreetingsView = styled(View)``;

const HelloText = styled(Text)`
  color: red;
`;
