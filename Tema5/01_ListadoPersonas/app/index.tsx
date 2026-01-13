import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import PeopleList from './view/PeopleList';

export default function App() {
  return (
    <SafeAreaProvider>
      <PeopleList />
    </SafeAreaProvider>
  );
}