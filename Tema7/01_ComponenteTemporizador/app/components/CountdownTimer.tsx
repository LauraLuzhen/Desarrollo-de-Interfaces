import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';

const CountdownTimer = () => {
  const [secondsLeft, setSecondsLeft] = useState(60);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (!isRunning || secondsLeft === 0) return;

    const interval = setInterval(() => {
      setSecondsLeft(prev => prev - 1);
    }, 1000);

    return () => {
        clearInterval(interval);
    };
  }, [isRunning, secondsLeft]);

  return (
    <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
      <Text style={{ fontSize: 40 }}>{secondsLeft}s</Text>
      <Button title={isRunning ? "Pause" : "Start"} onPress={() => setIsRunning(prev => !prev)} />
      <Button title="Reset" onPress={() => { setIsRunning(false); setSecondsLeft(60); }} />
    </View>
  );
};

export default CountdownTimer;