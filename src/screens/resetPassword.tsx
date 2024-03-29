import * as React from 'react';
import Text from '../shared/components/text';
import {useState} from 'react';
import Box from '../shared/components/box';
import PrimaryLayout from '../shared/components/layout';
import {responsiveFont, responsiveScale} from '../shared/utilities/helper';
import {Image} from 'react-native-animatable';
import MainTextInput from '../shared/components/mainTextInput';
import {Formik} from 'formik';
import * as yup from 'yup';
import MainButton from '../shared/components/mainButton';

// interface ResetPasswordProps {}

const ResetPassword = () => {
  const [activeInput, setActiveInput] = useState<
    'confirmPassword' | 'password'
  >();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const initialValues = {
    password: '',
    confirmPassword: '',
  };
  const validationSchema = yup.object().shape({
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
    confirmPassword: yup
      .string()
      .required('Confirmed password is required')
      .matches(/^.{8,}$/, 'Password with minimum length of 8 is required')
      .matches(/\d/, 'Password requires atleast a digit')
      .matches(/^.+$/, 'Password requires atleast one character')
      .matches(
        /^(?=.*[A-Z]).+$/,
        'Password requires atleast one UPPERCASE letter',
      )
      .oneOf([yup.ref('password'), null], 'Passwords must match'),
  });
  return (
    <Formik
      onSubmit={() => {
        // console.log('submitted');
      }}
      validationSchema={validationSchema}
      initialValues={initialValues}>
      {({errors, handleSubmit, setFieldValue}) => (
        <PrimaryLayout
          bottomButtonPressed={handleSubmit}
          shouldPushButton
          showBottomButton
          bottomButtonText="UPDATE">
          <Box flex={1} padding="m">
            <Box marginTop="m" flexDirection="row" alignItems="center">
              <Text
                fontWeight="bold"
                fontSize={responsiveFont(25)}
                color="darkGrey">
                Reset Password
              </Text>
              <Image
                style={{
                  width: responsiveScale(15),
                  height: responsiveScale(15),
                  marginLeft: responsiveScale(2),
                }}
                source={require('../shared/assets/images/mechanicman.png')}
              />
            </Box>
            <Box paddingHorizontal="xxs" marginTop="s" flexDirection="row">
              <Text color="secondaryLightGrey" fontSize={responsiveFont(15)}>
                Please enter your new password and confirm the password
              </Text>
            </Box>
            <Box paddingHorizontal="xxs">
              <MainTextInput
                errorMessage={errors.password}
                isPassword
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

              <MainTextInput
                isPassword
                errorMessage={errors.confirmPassword}
                onFocus={e => {
                  setActiveInput('confirmPassword');
                }}
                isActive={activeInput === 'confirmPassword'}
                wrapperStyle={{marginTop: responsiveScale(10)}}
                label="Confirm Password"
                placeholder="Confirm password"
                onChangeText={e => {
                  setFieldValue('confirmPassword', e, true);
                  setPassword(e);
                }}
              />
            </Box>
          </Box>
        </PrimaryLayout>
      )}
    </Formik>
  );
};

export default ResetPassword;
