import * as React from 'react';
import {useState} from 'react';
import {Platform, Pressable} from 'react-native';
import Box from '../shared/components/box';
import Icon from 'react-native-vector-icons/Ionicons';
import {palette} from '../shared/theme/theme';
import {
  height,
  responsiveFont,
  responsiveScale,
} from '../shared/utilities/helper';
import {useNavigation} from '@react-navigation/native';
import Text from '../shared/components/text';
import {Image} from 'react-native-animatable';
import {TextInput} from 'react-native-gesture-handler';
import MainTextInput from '../shared/components/mainTextInput';
import MainButton from '../shared/components/mainButton';
import PrimaryLayout from '../shared/components/layout';
import {Formik} from 'formik';
import * as yup from 'yup';
import {type RootStackNavigationProps} from '../navigation/types';

const LoginScreen = () => {
  const navigation = useNavigation<RootStackNavigationProps>();
  const [activeInput, setActiveInput] = useState<'email' | 'password'>(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const initialValues = {
    email: '',
    password: '',
  };

  const loginValidationSchema = yup.object().shape({
    email: yup
      .string()
      .email('Enter a valid email')
      .required('Email is required')
      .label('email'),
    password: yup
      .string()
      .required('Password is required')
      .matches(/^.{8,}$/, 'Password with minimum length of 8 is required')
      .matches(/\d/, 'Password requires atleast a digit')
      .matches(/^.+$/, 'Password requires atleast one character')
      .matches(
        /^(?=.*[A-Z]).+$/,
        'Password requires atleast one UPPERCASE letter',
      )
      .label('password'),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={loginValidationSchema}
      onSubmit={() => {}}>
      {({values, setFieldValue, handleSubmit, errors, touched}) => (
        <PrimaryLayout>
          <Box flex={1} padding="m">
            <Box marginTop="m" flexDirection="row" alignItems="center">
              <Text
                fontWeight="bold"
                fontSize={responsiveFont(25)}
                color="darkGrey">
                Welcome to college
              </Text>
              <Image
                style={{
                  width: responsiveScale(15),
                  height: responsiveScale(15),
                  marginLeft: responsiveScale(2),
                }}
                source={require('../shared/assets/images/welcomegirl.png')}
              />
            </Box>
            <Box paddingHorizontal="xxs" marginTop="s" flexDirection="row">
              <Text color="secondaryLightGrey" fontSize={responsiveFont(15)}>
                You don't have an account?{' '}
              </Text>
              <Pressable
                onPress={() => {
                  navigation.navigate('signUpScreen');
                }}>
                <Text color="collegeRed" fontWeight="bold">
                  Sign Up
                </Text>
              </Pressable>
            </Box>
            <Box paddingHorizontal="xxs">
              <MainTextInput
                errorMessage={errors.email}
                onFocus={e => {
                  setActiveInput('email');
                }}
                isActive={activeInput === 'email'}
                wrapperStyle={{marginTop: responsiveScale(10)}}
                label="Email"
                placeholder="Email"
                onChangeText={e => {
                  setFieldValue('email', e, true);
                  setEmail(e);
                }}
              />

              <MainTextInput
                isPassword
                errorMessage={errors.password}
                onFocus={e => {
                  setActiveInput('password');
                }}
                isActive={activeInput === 'password'}
                wrapperStyle={{marginTop: responsiveScale(10)}}
                label="Password"
                placeholder="Password"
                onChangeText={e => {
                  setFieldValue('password', e, true);
                  setPassword(e);
                }}
              />
            </Box>
            <Box
              marginTop="l"
              flexDirection="row"
              alignItems="center"
              justifyContent="space-between">
              <Text color="collegeRed">Wrong password *</Text>
              <Text fontWeight="bold" color="collegeRed">
                Forgot password?
              </Text>
            </Box>
            <Box marginTop="xl">
              <MainButton
                onPress={handleSubmit}
                padding="m"
                textProp={{
                  color: 'white',
                  fontWeight: 'bold',
                  textAlign: 'center',
                }}
                borderRadius={responsiveScale(1)}
                label={'LOGIN'}
                backgroundColor="collegeRed"
              />
            </Box>
          </Box>
        </PrimaryLayout>
      )}
    </Formik>
  );
};

export default LoginScreen;
