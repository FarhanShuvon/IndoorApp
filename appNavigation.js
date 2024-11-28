import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from './screens/Login';
import Signup from './screens/Signup';
import Home from './screens/Home';
import WelcomePage from './screens/WelcomePage'; // Updated file name
import AddPlayground from './screens/AddPlayground'; 
import Booking from './screens/Booking';

const Stack = createStackNavigator();

export default function AppNavigation() {
  return (
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }} // Hide header for Login Page
        />
      <Stack.Screen
        name="WelcomePage"
        component={WelcomePage}
        options={{ headerShown: false }} // Hide header for Welcome Page
      />
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{ headerShown : false }} // Example: Custom title for Signup
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }} // Hide header for Home Page
      />
      <Stack.Screen
        name="AddPlayground"
        component={AddPlayground}
        options={{ headerShown: false }} // Hide header for Home Page
      />
      <Stack.Screen
        name="Booking"
        component={Booking}
        options={{ headerShown: false }} // Hide header for Home Page
      />
    </Stack.Navigator>
  );
}
