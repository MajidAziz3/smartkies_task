import React from 'react';
import {View, StatusBar} from 'react-native';
import AuthNavigation from './navigations/AuthStack';
import {OnBoarding} from './screens/onBoarding/OnBoarding';
import {
  NavigationContainer,
} from '@react-navigation/native';
const App = () => {
  return (
      <NavigationContainer>
        <AuthNavigation />
      </NavigationContainer>
  );
};

export default App;
