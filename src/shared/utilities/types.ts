import {
  type BackgroundColorProps,
  type BorderProps,
  type SpacingProps,
} from '@shopify/restyle';
import {type Theme} from '../theme/theme';

export type RestyleProps = SpacingProps<Theme> &
  BorderProps<Theme> &
  BackgroundColorProps<Theme>;

export type IntegerReturnType = (value: number) => number;
export type StringReturnType = (value: string) => string;
export type IntegerStringReturnType = (value: number) => string;
export type StringIntegerReturnType = (value: string) => number;
export type IntegerVoidReturnType = (value: number) => void;
export type StringVoidReturnType = (value: string) => void;
