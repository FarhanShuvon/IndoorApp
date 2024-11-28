import React from 'react';
import { NavigationContainer } from '@react-navigation/native'; // Import NavigationContainer
import AppNavigation from './appNavigation';


export default function App() {
  return (
    <NavigationContainer>
      <AppNavigation />

    </NavigationContainer>
  );
}
