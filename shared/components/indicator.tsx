import * as React from 'react';
import Box from './box';
import {responsiveScale, restyleFunctions} from '../utilities/helper';
import {RestyleProps} from '../utilities/types';
import {useRestyle} from '@shopify/restyle';

type IndicatorProps = RestyleProps & {};

const Indicator = ({...rest}: IndicatorProps) => {
  const props = useRestyle(restyleFunctions, rest);
  return (
    <Box {...props} marginTop="l" flexDirection="row">
      {/* indicator 1 */}
      <Box
        borderColor="secondaryGrey"
        borderWidth={responsiveScale(0.5)}
        padding="xxs"
        borderRadius={responsiveScale(100)}>
        <Box
          backgroundColor="secondaryGrey"
          padding="xxs"
          borderRadius={responsiveScale(100)}
        />
      </Box>

      <Box
        marginHorizontal="xs"
        borderColor="secondaryGrey"
        borderWidth={responsiveScale(0.5)}
        padding="xxs"
        borderRadius={responsiveScale(100)}>
        <Box
          backgroundColor="secondaryGrey"
          padding="xxs"
          borderRadius={responsiveScale(100)}
        />
      </Box>

      <Box
        borderColor="secondaryGrey"
        borderWidth={responsiveScale(0.5)}
        padding="xxs"
        borderRadius={responsiveScale(100)}>
        <Box
          backgroundColor="secondaryGrey"
          padding="xxs"
          borderRadius={responsiveScale(100)}
        />
      </Box>
    </Box>
  );
};

export default Indicator;
