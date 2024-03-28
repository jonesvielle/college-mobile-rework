import * as React from 'react';
import {useState} from 'react';
import {Pressable} from 'react-native';
import Box from '../shared/components/box';
import {responsiveFont, responsiveScale} from '../shared/utilities/helper';
import {useNavigation} from '@react-navigation/native';
import Text from '../shared/components/text';
import {Image} from 'react-native-animatable';
import MainTextInput from '../shared/components/mainTextInput';
import MainButton from '../shared/components/mainButton';
import PrimaryLayout from '../shared/components/layout';
import {Formik} from 'formik';
import * as yup from 'yup';
import MainSelectInput from '../shared/components/mainSelectInput';
import UniversityListModal from '../shared/components/Modals/universityListModal';
import {type RootStackNavigationProps} from '../navigation/types';

const SignUpScreen = () => {
  const navigation = useNavigation<RootStackNavigationProps>();
  const [activeInput, setActiveInput] = useState<'email' | 'password'>(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [university, setUniversity] = useState('');
  const [showUniversityListModal, setShowUniversityListModal] = useState(false);

  const initialValues = {
    email: '',
    password: '',
    university: '',
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
    university: yup
      .string()
      .required('university is required')
      .label('university'),
  });

  const universityList = [
    'LAGOS STATE UNIVERSITY',
    'FEDERAL UNIVERSITY OF PETROLEUM RESOURCES EFFURUN',
    'UNIVERSITY OF LAGOS',
    'DELTA STATE UNIVERSITY',
    'YABA COLLEGE OF TECHNOLOGY',
  ];

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={loginValidationSchema}
      onSubmit={() => {
        // console.log('login');
        const payload = {
          email,
          password,
          university,
        };
        alert(payload);
      }}>
      {({values, setFieldValue, handleSubmit, errors, touched}) => (
        <PrimaryLayout hideBackButton>
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
                Already have an account?{' '}
              </Text>
              <Pressable
                onPress={() => {
                  navigation.navigate('loginScreen');
                }}>
                <Text color="collegeRed" fontWeight="bold">
                  Login
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
                wrapperStyle={{
                  marginTop: responsiveScale(10),
                }}
                label="Password"
                placeholder="Password"
                onChangeText={e => {
                  setFieldValue('password', e, true);
                  setPassword(e);
                }}
              />

              <MainSelectInput
                errorMessage={errors.university}
                onPress={() => {
                  setShowUniversityListModal(true);
                }}
                wrapperStyle={{marginTop: responsiveScale(10)}}
                label="Select University"
                placeholder={
                  university.length === 0
                    ? 'Select University'
                    : university.length > 30
                    ? `${university.slice(0, 31)}...`
                    : university
                }
              />
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
                label={'SIGN UP'}
                backgroundColor="collegeRed"
              />
            </Box>
          </Box>
          <UniversityListModal
            sendUniversity={selectedUniversity => {
              setUniversity(selectedUniversity);
              setFieldValue('university', selectedUniversity, true);
              setShowUniversityListModal(false);
            }}
            data={universityList}
            onDismiss={() => {
              setShowUniversityListModal(false);
            }}
            show={showUniversityListModal}
          />
        </PrimaryLayout>
      )}
    </Formik>
  );
};

export default SignUpScreen;
