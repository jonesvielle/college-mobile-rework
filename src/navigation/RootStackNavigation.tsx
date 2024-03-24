import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import {type RootStackNavigationType} from './types';
import TourScreen from '../screens/TourScreen';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/signUpScreen';
import React from 'react';

const RootStack = createStackNavigator<RootStackNavigationType>();

const RootStackNavigation = () => {
  return (
    <RootStack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
      initialRouteName="TourScreen">
      <RootStack.Screen name="loginScreen" component={LoginScreen} />
      <RootStack.Screen name="signUpScreen" component={SignUpScreen} />
      <RootStack.Screen name="TourScreen" component={TourScreen} />
    </RootStack.Navigator>
  );
};

export default RootStackNavigation;
