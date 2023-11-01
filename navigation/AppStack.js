import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { EditProfileScreen } from '../screens';
import { Colors } from '../config';

const Stack = createStackNavigator();

export const AppStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#00A9FF',
          borderBottomLeftRadius: 25,
          // borderBottomRightRadius: 20,
        },
      }}
    >
    <Stack.Screen
      name='Edit Profile'
      component={EditProfileScreen}
      options={{
        headerTitleStyle: {
          color: 'white',
        },
      }}
    />
  </Stack.Navigator>
  );
};

