import * as React from 'react';
import {useState, useRef} from 'react';
import Box from '../shared/components/box';
import Text from '../shared/components/text';
import PrimaryLayout from '../shared/components/layout';
import {Image} from 'react-native-animatable';
import {responsiveFont, responsiveScale} from '../shared/utilities/helper';
import MainTextInput from '../shared/components/mainTextInput';
import {type ActiveInputTypes} from '../shared/types/inputs';
import UseTimer from '../shared/hooks/useTimer';
import {Pressable} from 'react-native';

// interface OtpScreenProps {}

const OtpScreen = () => {
  const [activeInput, setActiveInput] = useState<ActiveInputTypes>();
  const [otp1, setOtp1] = useState('');
  const [otp2, setOtp2] = useState('');
  const [otp3, setOtp3] = useState('');
  const [otp4, setOtp4] = useState('');

  const textInputRef1 = useRef(null);
  const textInputRef2 = useRef(null);
  const textInputRef3 = useRef(null);
  const textInputRef4 = useRef(null);

  const {startTimer, minuteValue, secondValue, restartTimer} = UseTimer();
  React.useEffect(() => {
    startTimer(300);
  }, []);

  //   console.log('minute value=', minuteValue, '  second value=', secondValue);

  return (
    <PrimaryLayout
      shouldPushButton
      showBottomButton={
        otp1.length > 0 && otp2.length > 0 && otp3.length > 0 && otp4.length > 0
      }>
      <Box flex={1} padding="m">
        <Box marginTop="m" flexDirection="row" alignItems="center">
          <Text
            fontWeight="bold"
            fontSize={responsiveFont(25)}
            color="darkGrey">
            Verify Email
          </Text>
          <Image
            style={{
              width: responsiveScale(15),
              height: responsiveScale(15),
              marginLeft: responsiveScale(5),
            }}
            source={require('../shared/assets/images/sadgirl.png')}
          />
        </Box>
        <Box marginTop="l">
          <Text fontSize={responsiveFont(15)} color="secondaryLightGrey">
            Enter the four digit code sent to you at{' '}
            <Text
              fontSize={responsiveFont(15)}
              fontWeight="bold"
              color="secondaryGrey">
              obenobejones@gmail.com
            </Text>
          </Text>
        </Box>
        <Box flexDirection="row" justifyContent="space-between">
          <MainTextInput
            inputRef={textInputRef1}
            isNumeric
            maxLength={1}
            onChangeText={text => {
              setOtp1(text);
              if (text.length > 0) {
                textInputRef2.current?.focus();
              }
            }}
            isActive={activeInput === 'otp1'}
            onFocus={() => {
              setActiveInput('otp1');
            }}
            wrapperStyle={{width: '20%'}}
          />
          <MainTextInput
            isNumeric
            maxLength={1}
            inputRef={textInputRef2}
            onChangeText={text => {
              setOtp2(text);
              if (text.length > 0) {
                textInputRef3.current?.focus();
              }
            }}
            isActive={activeInput === 'otp2'}
            onFocus={() => {
              setActiveInput('otp2');
            }}
            wrapperStyle={{width: '20%'}}
          />
          <MainTextInput
            isNumeric
            maxLength={1}
            inputRef={textInputRef3}
            onChangeText={text => {
              setOtp3(text);
              if (text.length > 0) {
                textInputRef4.current?.focus();
              }
            }}
            isActive={activeInput === 'otp3'}
            onFocus={() => {
              setActiveInput('otp3');
            }}
            wrapperStyle={{width: '20%'}}
          />
          <MainTextInput
            isNumeric
            maxLength={1}
            inputRef={textInputRef4}
            onChangeText={text => {
              setOtp4(text);
            }}
            isActive={activeInput === 'otp4'}
            onFocus={() => {
              setActiveInput('otp4');
            }}
            wrapperStyle={{width: '20%'}}
          />
        </Box>

        {Number(minuteValue) > 0 || Number(secondValue) > 0 ? (
          <Box marginTop="l">
            <Text fontSize={responsiveFont(15)} color="secondaryLightGrey">
              Wait for{' '}
              <Text
                fontSize={responsiveFont(15)}
                fontWeight="bold"
                color="secondaryGrey">
                {minuteValue}:{secondValue}
              </Text>{' '}
              to request for a new code
            </Text>
          </Box>
        ) : (
          <Box marginTop="l" flexDirection="row" alignItems="center">
            <Text fontSize={responsiveFont(15)} color="secondaryLightGrey">
              Didn't receive code?{' '}
            </Text>
            <Pressable
              onPress={() => {
                // console.log('got code');
                restartTimer(300);
              }}>
              <Text
                fontSize={responsiveFont(15)}
                fontWeight="bold"
                color="collegeRed">
                send again
              </Text>
            </Pressable>
          </Box>
        )}
      </Box>
    </PrimaryLayout>
  );
};

export default OtpScreen;
