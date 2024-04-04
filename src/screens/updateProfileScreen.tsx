import * as React from 'react';
import PrimaryLayout from '../shared/components/layout';
import Box from '../shared/components/box';
import Text from '../shared/components/text';
import {responsiveFont, responsiveScale} from '../shared/utilities/helper';
import {Image} from 'react-native-animatable';
import MainTextInput from '../shared/components/mainTextInput';

const UpdateProfileScreen = () => {
  return (
    <PrimaryLayout
      showBottomButton
      bottomButtonText="Update"
      headerType="inner">
      <Box flex={1} padding="l">
        <Box marginTop="m" flexDirection="row" alignItems="center">
          <Text fontSize={responsiveFont(25)} color="darkGrey">
            Manage Profile
          </Text>
          <Image
            style={{
              width: responsiveScale(15),
              height: responsiveScale(15),
              marginLeft: responsiveScale(2),
            }}
            source={require('../shared/assets/images/happyboy.png')}
          />
        </Box>
        <Box
          marginVertical="xl"
          alignItems="center"
          justifyContent="center"
          flexDirection="row">
          <Image
            style={{
              width: responsiveScale(45),
              height: responsiveScale(45),
              marginLeft: responsiveScale(2),
            }}
            source={require('../shared/assets/images/addprofile.png')}
          />
        </Box>
        <Box>
          <MainTextInput label="Full Name" placeholder="Enter full name" />
          <MainTextInput
            wrapperStyle={{marginTop: responsiveScale(8)}}
            label="Phone Number"
            placeholder="Enter phone number, e.g 08100000000"
            isNumeric
            maxLength={11}
          />
        </Box>
      </Box>
    </PrimaryLayout>
  );
};

export default UpdateProfileScreen;
