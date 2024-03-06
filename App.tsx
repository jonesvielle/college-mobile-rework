/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import Box from './shared/components/box';
import Text from './shared/components/text';
import {ThemeProvider} from '@shopify/restyle';
import theme from './shared/theme/theme';
import {Image, Platform, StatusBar} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {responsiveFont, responsiveScale} from './shared/utilities/helper';
import MainButton from './shared/components/mainButton';
import Indicator from './shared/components/indicator';
const viewTest = require('react-native');

function App(): React.JSX.Element {
  const [isNewDevice, setIsNewDevice] = useState<boolean>(true);

  useEffect(() => {
    if (Platform.OS === 'ios') return;
    SplashScreen.hide();
  }, []);
  const storeIsNewDevice = async (value: string) => {
    try {
      await AsyncStorage.setItem('isNewDevice', value);
      setIsNewDevice(false);
    } catch (e) {
      // saving error
      console.log('error storing value', e);
    }
  };
  const checkIsNewDevice = async () => {
    try {
      const value = await AsyncStorage.getItem('isNewDevice');
      if (value !== null) {
        setIsNewDevice(false);
        return;
      }
      await storeIsNewDevice('no');
    } catch (e) {
      // error reading value
      console.log('error reading value heurer', e);
    }
  };
  useEffect(() => {
    (async () => {
      try {
        await checkIsNewDevice();
      } catch (error) {
        console.log('error saving datrah');
      }
    })();
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <StatusBar />
      <Box flex={1}>
        <Box
          padding="xl"
          alignItems="center"
          justifyContent="center"
          marginTop="xxxl">
          <Image
            resizeMode="contain"
            style={{width: responsiveScale(100), height: responsiveScale(100)}}
            source={require('./shared/assets/images/wizimage1.png')}
          />
          <Text
            color="secondaryGrey"
            fontFamily="DM Sans"
            fontSize={responsiveFont(16)}
            textAlign="center"
            marginTop="l">
            Watch world-class instructors share their skills and years of work
            experience with you.
          </Text>
          <Indicator marginTop="xl" />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
