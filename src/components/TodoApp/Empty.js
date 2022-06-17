import React from 'react';
import styled from 'styled-components/native';

function Empty() {
  return (
    <EmptyContainer>
      <EmptyImage
        resizeMode="cover"
        source={require('../../assets/images/young_and_happy.png')}
      />
      <Description>Hello World!</Description>
    </EmptyContainer>
  );
}

export default Empty;

const EmptyContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const EmptyImage = styled.Image`
  width: 300px;
  height: 200px;
`;

const Description = styled.Text`
  font-size: 24px;
  color: #9e9e9e;
`;
