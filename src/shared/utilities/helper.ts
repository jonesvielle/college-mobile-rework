import {
  backgroundColor,
  border,
  composeRestyleFunctions,
  spacing,
} from '@shopify/restyle';
import {Dimensions} from 'react-native';
import {type Theme} from '../theme/theme';
import {type IntegerReturnType, type RestyleProps} from './types';

export const {fontScale, scale, height, width} = Dimensions.get('window');

export const responsiveFont: IntegerReturnType = (value: number) => {
  return fontScale * value;
};
export const responsiveScale: IntegerReturnType = (value: number) => {
  return scale * value;
};

export const restyleFunctions = composeRestyleFunctions<Theme, RestyleProps>([
  spacing,
  border,
  backgroundColor,
]);
