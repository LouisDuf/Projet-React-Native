import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Master from '../screens/Master';
import Detail from '../screens/Detail';

const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Master" component={Master} />
      <Tab.Screen name="Detail" component={Detail} />
    </Tab.Navigator>
  );
};

export default Navigation;
