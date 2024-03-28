import * as React from 'react';
import PrimaryLayout from '../shared/components/layout';
import Text from '../shared/components/text';
import Box from '../shared/components/box';
import {responsiveFont, responsiveScale} from '../shared/utilities/helper';
import {Image} from 'react-native-animatable';
import MainTextInput from '../shared/components/mainTextInput';
import {Formik} from 'formik';
import * as yup from 'yup';
import {type ActiveInputTypes} from '../shared/types/inputs';

// interface ForgotPasswordProps {}

const ForgotPassword = () => {
  const [activeInput, setActiveInput] = React.useState<ActiveInputTypes>();
  const [email, setEmail] = React.useState('');
  const initialValues = {
    email: '',
  };
  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .email('Enter a valid email')
      .required('Email is required')
      .label('email'),
  });
  return (
    <Formik
      onSubmit={() => {
        // console.log('submit');
      }}
      validationSchema={validationSchema}
      initialValues={initialValues}>
      {({errors, setFieldValue, handleSubmit}) => (
        <PrimaryLayout bottomButtonPressed={handleSubmit} showBottomButton>
          <Box backgroundColor="white" flex={1} padding="m">
            <Box marginTop="m" flexDirection="row" alignItems="center">
              <Text
                fontWeight="bold"
                fontSize={responsiveFont(25)}
                color="darkGrey">
                Forgot Password
              </Text>
              <Image
                style={{
                  width: responsiveScale(15),
                  height: responsiveScale(15),
                  marginLeft: responsiveScale(2),
                }}
                source={require('../shared/assets/images/sadgirl.png')}
              />
            </Box>
            <Box paddingHorizontal="xxs" marginTop="s" flexDirection="row">
              <Text color="secondaryLightGrey" fontSize={responsiveFont(15)}>
                Please enter your registered email to confirm your password.
              </Text>
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
            </Box>
          </Box>
        </PrimaryLayout>
      )}
    </Formik>
  );
};

export default ForgotPassword;
