import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import {type RootStackNavigationType} from './types';
import TourScreen from '../screens/TourScreen';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/signUpScreen';
import React from 'react';
import ForgotPassword from '../screens/forgotPassword';
import CheckEmailScreen from '../screens/checkEmailScreen';

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
      <RootStack.Screen
        name="forgotPasswordScreen"
        component={ForgotPassword}
      />
      <RootStack.Screen name="checkEmailScreen" component={CheckEmailScreen} />
    </RootStack.Navigator>
  );
};

export default RootStackNavigation;