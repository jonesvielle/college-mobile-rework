import * as React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Box from './box';
import {palette} from '../theme/theme';
import {responsiveFont, responsiveScale, width} from '../utilities/helper';
import {Image} from 'react-native-animatable';
import Text from './text';
import Icon from 'react-native-vector-icons/Ionicons';

// interface LinearGradientComponentProps {}

const LinearGradientComponent = () => {
  return (
    <>
      <LinearGradient
        colors={[palette.transparent, palette.black]}
        style={{
          height: responsiveScale(100),
          position: 'relative',
          zIndex: 2,
        }}
      />
      <Box zIndex={-4} position="absolute" width={'100%'}>
        <Image
          style={{
            width: '100%',
            height: responsiveScale(100),
          }}
          source={require('../assets/images/ephysics.jpeg')}
        />
      </Box>
      <Box
        zIndex={5}
        justifyContent="flex-end"
        height={responsiveScale(100)}
        width={'100%'}
        position="absolute">
        <Box
          zIndex={4}
          position="relative"
          paddingHorizontal="m"
          paddingBottom="s">
          <Text fontWeight="bold" fontSize={responsiveFont(20)} color="white">
            Introduction to electrical physics as a form of power
          </Text>
          <Box marginTop="m" flexDirection="row">
            <Box flexDirection="row" alignItems="center">
              <Icon
                size={responsiveScale(5)}
                style={{marginTop: responsiveScale(1)}}
                name="book-outline"
                color={palette.white}
              />
              <Text color="white" marginLeft="s">
                12 topics
              </Text>
            </Box>

            <Box marginLeft="m" flexDirection="row" alignItems="center">
              <Icon
                size={responsiveScale(5)}
                style={{marginTop: responsiveScale(1)}}
                name="time-outline"
                color={palette.white}
              />
              <Text color="white" marginLeft="s">
                10hr 32min
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default LinearGradientComponent;
