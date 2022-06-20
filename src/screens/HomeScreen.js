import {observer} from 'mobx-react-lite';
import React, {useEffect} from 'react';
import {Button, Text, View} from 'react-native';
import {store} from '../stores/store';

const HomeScreen = observer(({navigation}) => {
  useEffect(() => {
    navigation.setOptions({title: '홈'});
  }, [navigation]);

  return (
    <View>
      <Text>{store.value}</Text>
      <Button title="Detail Open" onPress={() => navigation.push('Detail')} />
    </View>
  );
});

export default HomeScreen;
