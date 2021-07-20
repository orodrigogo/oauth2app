import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import { Profile } from '../screens/Profile';
import { SignIn } from '../screens/SignIn';
import { theme } from '../styles/theme';

const { Navigator, Screen } = createStackNavigator();

export function Routes() {
  return (
    <NavigationContainer>
      <Navigator headerMode="none">
        <Screen
          name="SignIn"
          component={SignIn}
        />
        <Screen
          name="Profile"
          component={Profile}
        />
      </Navigator>
    </NavigationContainer>
  )
}