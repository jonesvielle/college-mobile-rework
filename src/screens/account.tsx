import * as React from 'react';
import Box from '../shared/components/box';
import Text from '../shared/components/text';
import PrimaryLayout from '../shared/components/layout';
import {Image} from 'react-native-animatable';
import {responsiveFont, responsiveScale} from '../shared/utilities/helper';

import AccountCard from '../shared/components/accounts/accountCard';
import {palette} from '../shared/theme/theme';
import {Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {type RootStackNavigationProps} from '../navigation/types';

const Account = () => {
  const navigation = useNavigation<RootStackNavigationProps>();
  return (
    <PrimaryLayout title="Account">
      <Box paddingHorizontal="m" flex={1}>
        <Box alignItems="center" flexDirection="row" marginTop="l">
          <Image
            style={{
              width: responsiveScale(30),
              height: responsiveScale(30),
              borderRadius: responsiveScale(100),
            }}
            source={require('../shared/assets/images/person.webp')}
            resizeMode="contain"
          />
          <Box marginLeft="m" width={'70%'}>
            <Text fontWeight="bold" color="darkGrey">
              {'John Jones'}
            </Text>
            <Text
              fontSize={responsiveFont(12)}
              //   paddingHorizontal="l"
              color="secondaryLightGrey"
              marginTop="xxs">
              {'Federal University of Technology Akure'}
            </Text>
            <Text
              fontSize={responsiveFont(12)}
              color="secondaryLightGrey"
              marginTop="xxs">
              {'Mechanical Engineering'}
            </Text>
          </Box>
        </Box>

        <Box marginTop="xl">
          <Pressable
            onPress={() => {
              navigation.navigate('updateProfileScreen');
            }}>
            <AccountCard
              showUnderlined
              hasForwardIcon
              text="Manage Profile"
              icon="settings-outline"
            />
          </Pressable>
        </Box>
        <Box marginTop="xl">
          <AccountCard
            text="08108135505"
            showUnderlined
            icon="phone-portrait-outline"
          />
        </Box>
        <Box marginTop="xl">
          <AccountCard color={palette.red} text="Logout" icon="exit" />
        </Box>
      </Box>
    </PrimaryLayout>
  );
};

export default Account;
