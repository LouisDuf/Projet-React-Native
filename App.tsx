import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import Navigation from './navigation/Navigation';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
