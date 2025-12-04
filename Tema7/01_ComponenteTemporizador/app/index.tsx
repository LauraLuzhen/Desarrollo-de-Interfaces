import React from 'react';
import { View } from 'react-native';
import CountdownTimer from './components/CountdownTimer';

export default function Index() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <CountdownTimer />
    </View>
  );
}