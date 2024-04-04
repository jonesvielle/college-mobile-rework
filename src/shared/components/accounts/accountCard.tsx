import * as React from 'react';
import Box from '../box';
import Icon from 'react-native-vector-icons/Ionicons';
import {responsiveFont, responsiveScale} from '../../utilities/helper';
import Text from '../text';
import {palette} from '../../theme/theme';

interface AccountCardProps {
  icon: string;
  text: string;
  hasForwardIcon?: boolean;
  showUnderlined?: boolean;
  color?: string;
}

const AccountCard = ({
  icon,
  text,
  hasForwardIcon = false,
  showUnderlined = false,
  color = palette.darkGrey,
}: AccountCardProps) => {
  return (
    <Box>
      <Box
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between">
        <Box flexDirection="row" alignItems="center">
          <Icon color={color} size={responsiveScale(10)} name={icon} />
          <Text
            fontSize={responsiveFont(16)}
            marginLeft="l"
            style={{color}}
            marginTop="xxs">
            {text}
          </Text>
        </Box>
        {hasForwardIcon ? (
          <Icon size={responsiveScale(10)} name="chevron-forward-outline" />
        ) : null}
      </Box>
      {showUnderlined ? (
        <Box
          marginTop="m"
          borderColor="secondaryLightGrey"
          borderWidth={responsiveScale(0.1)}
        />
      ) : null}
    </Box>
  );
};

export default AccountCard;
