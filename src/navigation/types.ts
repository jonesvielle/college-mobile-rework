import {type StackNavigationProp} from '@react-navigation/stack';

export interface RootStackNavigationType {
  HomeScreen: undefined;
  loginScreen: undefined;
  forgotPasswordScreen: undefined;
  signUpScreen: undefined;
  otpScreen: undefined;
  confirmEmailScreen: undefined;
  changePasswordScreen: undefined;
  TourScreen: undefined;
}

export type RootStackNavigationProps =
  StackNavigationProp<RootStackNavigationType>;
