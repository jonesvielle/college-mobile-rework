import {
  backgroundColor,
  border,
  composeRestyleFunctions,
  spacing,
} from '@shopify/restyle';
import {Dimensions} from 'react-native';
import {Theme} from '../theme/theme';
import {RestyleProps} from './types';

const {fontScale, scale, height, width} = Dimensions.get('window');

export const responsiveFont = (value: number) => {
  return fontScale * value;
};
export const responsiveScale = (value: number) => {
  return scale * value;
};

export const restyleFunctions = composeRestyleFunctions<Theme, RestyleProps>([
  spacing,
  border,
  backgroundColor,
]);
