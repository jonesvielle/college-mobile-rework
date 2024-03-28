import * as React from 'react';
import PrimaryLayout from '../shared/components/layout';
import Box from '../shared/components/box';
import Text from '../shared/components/text';
import {Image} from 'react-native-animatable';
import {responsiveFont, responsiveScale} from '../shared/utilities/helper';
import MainButton from '../shared/components/mainButton';

// interface CheckEmailScreenProps {}

const CheckEmailScreen = () => {
  return (
    <PrimaryLayout hideBackButton>
      <Box flex={1} justifyContent="center" alignItems="center">
        <Image
          style={{
            width: responsiveScale(70),
            height: responsiveScale(70),
          }}
          source={require('../shared/assets/images/mailbox.png')}
        />
        <Text
          textAlign="center"
          fontSize={responsiveFont(20)}
          color="darkGrey"
          marginTop="xxl">
          Check your email
        </Text>
        <Box paddingHorizontal="xl" marginTop="l">
          <Text
            textAlign="center"
            fontSize={responsiveFont(13)}
            color="secondaryLightGrey">
            We have sent you a reset password link on your registered email
            address
          </Text>
        </Box>
        <Box paddingHorizontal="s" marginTop="xxxl">
          <MainButton
            paddingVertical="m"
            paddingHorizontal="xxl"
            textProp={{
              color: 'white',
              fontWeight: 'bold',
              textAlign: 'center',
            }}
            borderRadius={responsiveScale(1)}
            label={'Continue'}
            backgroundColor="collegeRed"
          />
        </Box>
      </Box>
    </PrimaryLayout>
  );
};

export default CheckEmailScreen;
