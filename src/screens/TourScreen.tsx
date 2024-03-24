/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useRef, useState} from 'react';
import {ThemeProvider} from '@shopify/restyle';
import {Animated, Image, Platform, Pressable, StatusBar} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/Ionicons';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import Box from '../shared/components/box';
import MainButton from '../shared/components/mainButton';
import {responsiveFont, responsiveScale} from '../shared/utilities/helper';
import Indicator from '../shared/components/indicator';
import Text from '../shared/components/text';
import {palette} from '../shared/theme/theme';

function TourScreen(): React.JSX.Element {
  const navigation = useNavigation();

  const [isNewDevice, setIsNewDevice] = useState<boolean>(true);
  const [indicatorState, setIndicatorState] = useState<string>('1');
  const [tourDone, setTourDone] = useState<boolean>(false);

  const slideOutAnimationValue1 = useRef(new Animated.Value(0)).current;
  const slideOutAnimationValue2 = useRef(new Animated.Value(0)).current;
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
      // console.log('error storing value', e);
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
      // console.log('error reading valrue heurr', e);
    }
  };
  useEffect(() => {
    (async () => {
      try {
        await checkIsNewDevice();
        return '';
      } catch {
        return '';
      }
    })();
  }, []);

  const swipeLeft = () => {
    if (indicatorState === '3') {
      return;
    }
    if (indicatorState === '1') {
      Animated.timing(slideOutAnimationValue1, {
        toValue: -1000,
        duration: 200,
        useNativeDriver: false,
      }).start(() => {
        setIndicatorState('2');
        slideOutAnimationValue2.setValue(0);
      });
    }
    if (indicatorState === '2') {
      Animated.timing(slideOutAnimationValue2, {
        toValue: -1000,
        duration: 200,
        useNativeDriver: false,
      }).start(() => {
        setIndicatorState('3');
        setTourDone(true);
      });
    }
  };

  // let imageSource;
  // switch (indicatorState) {
  //   case '1':
  //     imageSource = require('../shared/assets/images/wizimage1.png');
  //     break;
  //   case '2':
  //     imageSource = require('../shared/assets/images/wizimage2.png');
  //   case '3':
  //     imageSource = require('../shared/assets/images/wizimage3.png');
  //     break;
  //   // Add more cases as needed
  // }

  const tourText = {
    '1': 'World-class instructors share skills, experience with you.',
    '2': 'Download materials, learn at your pace anytime, anywhere.',
    '3': 'You are good to go!',
  };

  return (
    <>
      <StatusBar />
      <Box flex={1} backgroundColor="white">
        <Box padding="xl" alignItems="center" justifyContent="center">
          {indicatorState === '3' ? (
            <Box marginTop="xxxs" marginBottom="lg"></Box>
          ) : (
            <Box
              marginTop="xxxs"
              marginBottom="xxxl"
              width={'100%'}
              alignItems="flex-end">
              <Pressable
                onPress={() => {
                  navigation.navigate('loginScreen');
                }}>
                <Box alignItems="center" flexDirection="row">
                  <Text
                    fontSize={responsiveFont(12)}
                    color="collegeRed"
                    borderRadius={responsiveScale(2)}
                    textProp={{
                      color: palette.red,
                      fontWeight: 'bold',
                    }}>
                    SKIP
                  </Text>
                  <Icon name="arrow-forward" color={palette.red} size={20} />
                </Box>
              </Pressable>
            </Box>
          )}
          {indicatorState === '1' ? (
            <Animated.Image
              // onError={() => {
              //   console.log('ok wrong');
              // }}
              resizeMode="contain"
              style={{
                width: responsiveScale(100),
                height: responsiveScale(100),
                marginLeft: slideOutAnimationValue1,
              }}
              source={require('../shared/assets/images/wizimage1.png')}
            />
          ) : null}
          {indicatorState === '2' ? (
            <Animated.Image
              // onError={() => {
              //   console.log('ok wrong');
              // }}
              resizeMode="contain"
              style={{
                width: responsiveScale(100),
                height: responsiveScale(100),
                marginLeft: slideOutAnimationValue2,
              }}
              source={require('../shared/assets/images/wizimage2.png')}
            />
          ) : null}
          {indicatorState === '3' ? (
            <Animated.Image
              // onError={() => {
              //   console.log('ok wrong');
              // }}
              resizeMode="contain"
              style={{
                width: responsiveScale(100),
                height: responsiveScale(100),
              }}
              source={require('../shared/assets/images/wizimage2.png')}
            />
          ) : null}
          <Text
            color="secondaryGrey"
            fontFamily="DM Sans"
            fontSize={responsiveFont(16)}
            textAlign="center"
            marginTop="l">
            {tourText[indicatorState]}
          </Text>
          <Indicator
            indicatorOnePressed={() => {
              if (!tourDone) {
                return;
              }
              setIndicatorState('1');
              slideOutAnimationValue1.setValue(0);
            }}
            indicatorState={indicatorState}
            marginTop="xl"
            indicatorTwoPressed={() => {
              if (!tourDone) {
                return;
              }
              setIndicatorState('2');
              slideOutAnimationValue2.setValue(0);
            }}
            indicatorThreePressed={() => {
              if (!tourDone) {
                return;
              }
              setIndicatorState('3');
            }}
          />
          <Box width={'100%'} marginTop="xl">
            <MainButton
              onPress={
                indicatorState === '3'
                  ? () => {
                      navigation.navigate('loginScreen');
                    }
                  : swipeLeft
              }
              borderRadius={responsiveScale(2)}
              paddingVertical="m"
              textProp={{
                textAlign: 'center',
                fontWeight: 'bold',
                color: 'white',
              }}
              backgroundColor={'collegeRed'}
              marginTop="xl"
              label={indicatorState === '3' ? 'LOGIN' : 'NEXT'}
            />
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default TourScreen;
