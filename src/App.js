import React from 'react';
import {View, StatusBar} from 'react-native';
import AuthNavigation from './navigations/AuthStack';
import {OnBoarding} from './screens/onBoarding/OnBoarding';

import {Provider} from 'react-redux';
import {createStore} from 'redux';
import Reducers from './redux/reducers';
import {
  NavigationContainer,
} from '@react-navigation/native';
const App = () => {
  
  const store = createStore(Reducers);
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AuthNavigation />
      </NavigationContainer>
      </Provider>
  );
};

export default App;
