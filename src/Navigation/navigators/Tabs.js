import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { McVectorIcon } from 'Components';

import { Home, Profile } from 'Screens';

const Tab = createBottomTabNavigator();

const Tabs = ({ params }) => (
  <Tab.Navigator>
    <Tab.Screen
      name="Home"
      component={Home}
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ color, size }) => (
          <McVectorIcon
            type="AntDesign"
            name="home"
            color={color}
            size={size}
          />
        ),
      }}
    />
    <Tab.Screen
      name="Profile"
      component={Profile}
      options={{
        tabBarLabel: 'Profile',
        tabBarIcon: ({ color, size }) => (
          <McVectorIcon
            type="AntDesign"
            name="profile"
            color={color}
            size={size}
          />
        ),
      }}
    />
  </Tab.Navigator>
);

export default Tabs;
