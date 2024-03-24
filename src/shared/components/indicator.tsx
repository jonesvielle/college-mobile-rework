import * as React from 'react';
import Box from './box';
import {responsiveScale, restyleFunctions} from '../utilities/helper';
import {type RestyleProps} from '../utilities/types';
import {useRestyle} from '@shopify/restyle';
import {Pressable} from 'react-native';

type IndicatorProps = RestyleProps & {
  indicatorState: string;
  indicatorOnePressed: () => void;
  indicatorTwoPressed: () => void;
  indicatorThreePressed: () => void;
};

const Indicator = ({
  indicatorState,
  indicatorOnePressed,
  indicatorTwoPressed,
  indicatorThreePressed,
  ...rest
}: IndicatorProps) => {
  const props = useRestyle(restyleFunctions, rest);
  return (
    <Box {...props} marginTop="l" flexDirection="row">
      {/* indicator 1 */}
      <Pressable onPress={indicatorOnePressed}>
        <Box
          borderColor={indicatorState === '1' ? 'collegeRed' : 'secondaryGrey'}
          borderWidth={indicatorState === '1' ? responsiveScale(0.5) : 0}
          padding="xxs"
          borderRadius={responsiveScale(100)}>
          <Box
            backgroundColor={
              indicatorState === '1' ? 'collegeRed' : 'secondaryGrey'
            }
            padding="xxs"
            borderRadius={responsiveScale(100)}
          />
        </Box>
      </Pressable>

      <Pressable onPress={indicatorTwoPressed}>
        <Box
          marginHorizontal={'xxs'}
          borderColor={indicatorState === '2' ? 'collegeRed' : 'secondaryGrey'}
          borderWidth={indicatorState === '2' ? responsiveScale(0.5) : 0}
          padding="xxs"
          borderRadius={responsiveScale(100)}>
          <Box
            backgroundColor={
              indicatorState === '2' ? 'collegeRed' : 'secondaryGrey'
            }
            padding="xxs"
            borderRadius={responsiveScale(100)}
          />
        </Box>
      </Pressable>

      <Pressable onPress={indicatorThreePressed}>
        <Box
          borderColor={indicatorState === '3' ? 'collegeRed' : 'secondaryGrey'}
          borderWidth={indicatorState === '3' ? responsiveScale(0.5) : 0}
          padding="xxs"
          borderRadius={responsiveScale(100)}>
          <Box
            backgroundColor={
              indicatorState === '3' ? 'collegeRed' : 'secondaryGrey'
            }
            padding="xxs"
            borderRadius={responsiveScale(100)}
          />
        </Box>
      </Pressable>
    </Box>
  );
};

export default Indicator;
