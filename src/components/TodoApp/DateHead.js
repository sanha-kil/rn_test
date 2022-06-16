import React from 'react';
import {StatusBar, Text, View} from 'react-native';
import styled from 'styled-components';

function DateHead({date}) {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const adjustedDate = `${year}년 ${month}월 ${day}일`;

  return (
    <>
      <StatusBar backgroundColor="#26a69a" />
      <DateContainer>
        <DateText>{adjustedDate}</DateText>
      </DateContainer>
    </>
  );
}

export default DateHead;

const DateContainer = styled(View)`
  padding: 16px;
  background-color: #26a69a;
`;

const DateText = styled(Text)`
  font-size: 24px;
  color: white;
`;
