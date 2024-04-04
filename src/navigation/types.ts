import {type StackNavigationProp} from '@react-navigation/stack';
import {type BottomTabNavigationProp} from '@react-navigation/bottom-tabs';

export interface RootStackNavigationType {
  HomeScreen: undefined;
  loginScreen: undefined;
  forgotPasswordScreen: undefined;
  signUpScreen: undefined;
  otpScreen: undefined;
  confirmEmailScreen: undefined;
  changePasswordScreen: undefined;
  TourScreen: undefined;
  checkEmailScreen: undefined;
  resetPassword: undefined;
  welcomeScreen: undefined;
  BottomTabNavigation: undefined;
  searchScreen: undefined;
  updateProfileScreen: undefined;
}

export interface BottomTabNavigationType {
  dashboard: undefined;
  allCourses: undefined;
  favourites: undefined;
  downloads: undefined;
  account: undefined;
}

export type RootStackNavigationProps =
  StackNavigationProp<RootStackNavigationType>;

export type BottomTabNavigationProps =
  BottomTabNavigationProp<BottomTabNavigationType>;
