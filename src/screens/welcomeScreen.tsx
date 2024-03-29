import * as React from 'react';
import PrimaryLayout from '../shared/components/layout';
import Text from '../shared/components/text';
import Box from '../shared/components/box';
import {
  height,
  responsiveFont,
  responsiveScale,
  width,
} from '../shared/utilities/helper';
import {Image} from 'react-native-animatable';

const WelcomeScreen = () => {
  return (
    <PrimaryLayout showBottomButton hideBackButton>
      <Box flex={1} padding="m">
        <Box
          flex={1}
          marginTop="m"
          flexDirection="row"
          alignItems="center"
          justifyContent="center">
          <Image
            style={{
              width,
              height,
              marginLeft: responsiveScale(2),
              position: 'absolute',
              flex: 1,
              zIndex: -1,
            }}
            source={require('../shared/assets/images/welcomeBackground.png')}
          />

          <Box alignItems="center" paddingHorizontal="xl" marginTop="xxxl">
            <Text
              fontWeight="bold"
              fontSize={responsiveFont(25)}
              color="darkGrey">
              Welcome
            </Text>
            <Text
              marginTop="xl"
              textAlign="center"
              fontSize={responsiveFont(13)}
              color="secondaryLightGrey">
              We have sent you a reset password link on your registered email
              address
            </Text>
          </Box>
        </Box>
      </Box>
    </PrimaryLayout>
  );
};

export default WelcomeScreen;
