import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from 'styled-components';
import { McVectorIcon, McTabIcon, McText } from 'Components';
import { Images, Colors } from 'Constants';

import { Home, Profile } from 'Screens';

const Tab = createBottomTabNavigator();

const Tabs = ({ params }) => {
  const theme = useTheme();
  return (
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
          tabBarLabel: ({ focused, color }) => (
            <McText medium size={10} color={color}>
              Profile
            </McText>
          ),
          tabBarIcon: ({ focused, color, size }) => (
            <McTabIcon
              icon={Images.profile}
              color={color}
              size={24}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default Tabs;
