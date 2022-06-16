import React from 'react';
import {View} from 'react-native';
import DateHead from './DateHead';

function TodoApp() {
  const today = new Date();
  return (
    <View>
      <DateHead date={today} />
    </View>
  );
}

export default TodoApp;
