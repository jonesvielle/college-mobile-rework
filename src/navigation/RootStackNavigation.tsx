import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import {type RootStackNavigationType} from './types';
import TourScreen from '../screens/TourScreen';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/signUpScreen';
import React, {useEffect} from 'react';
import ForgotPassword from '../screens/forgotPassword';
import CheckEmailScreen from '../screens/checkEmailScreen';
import OtpScreen from '../screens/otpScreen';
import ResetPassword from '../screens/resetPassword';
import WelcomeScreen from '../screens/welcomeScreen';
import BottomTabNavigation from './BottomTabNavigation';
import SearchScreen from '../screens/searchScreen';
import UpdateProfileScreen from '../screens/updateProfileScreen';
import {Platform} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import CourseDetails from '../screens/courseDetails';
import CourseScreen from '../screens/courseScreen';

const RootStack = createStackNavigator<RootStackNavigationType>();

const RootStackNavigation = () => {
  useEffect(() => {
    if (Platform.OS === 'ios') return;
    SplashScreen.hide();
  }, []);
  return (
    <RootStack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
      initialRouteName="BottomTabNavigation">
      <RootStack.Screen name="loginScreen" component={LoginScreen} />
      <RootStack.Screen name="signUpScreen" component={SignUpScreen} />
      <RootStack.Screen name="TourScreen" component={TourScreen} />
      <RootStack.Screen
        name="forgotPasswordScreen"
        component={ForgotPassword}
      />
      <RootStack.Screen name="checkEmailScreen" component={CheckEmailScreen} />
      <RootStack.Screen name="otpScreen" component={OtpScreen} />
      <RootStack.Screen name="resetPassword" component={ResetPassword} />
      <RootStack.Screen name="welcomeScreen" component={WelcomeScreen} />
      <RootStack.Screen
        name="BottomTabNavigation"
        component={BottomTabNavigation}
      />
      <RootStack.Screen name="searchScreen" component={SearchScreen} />
      <RootStack.Screen
        name="updateProfileScreen"
        component={UpdateProfileScreen}
      />
      <RootStack.Screen name="courseDetails" component={CourseDetails} />
      <RootStack.Screen name="courseScreen" component={CourseScreen} />
    </RootStack.Navigator>
  );
};

export default RootStackNavigation;
