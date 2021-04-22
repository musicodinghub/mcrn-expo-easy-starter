import React from 'react';
import { Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import Tabs from './Tabs';
import { Home, Profile } from 'Screens';

const Stack = createStackNavigator();

const HomeStack = ({ params }) => (
  <Stack.Navigator>
    <Stack.Screen
      name="Home"
      component={Tabs}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="Profile"
      component={Profile}
      options={{
        headerShown: true,
      }}
    />
  </Stack.Navigator>
);

export default HomeStack;
