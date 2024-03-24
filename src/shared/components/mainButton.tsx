import {
  type StyleProp,
  type TextStyle,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  useRestyle,
  spacing,
  border,
  backgroundColor,
  composeRestyleFunctions,
} from '@shopify/restyle';
import {type Theme} from '../theme/theme';
import Text from './text';
import {type RestyleProps} from '../utilities/types';
import Box from './box';
import React from 'react';

const restyleFunctions = composeRestyleFunctions<Theme, RestyleProps>([
  spacing,
  border,
  backgroundColor,
]);

type Props = RestyleProps & {
  onPress: () => void;
  label: string;
  textProp: StyleProp<TextStyle>;
};

const MainButton = ({onPress, textProp, label, ...rest}: Props) => {
  const props = useRestyle(restyleFunctions, rest);

  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
      <Box {...props}>
        <Text style={textProp}>{label}</Text>
      </Box>
    </TouchableOpacity>
  );
};

export default MainButton;
