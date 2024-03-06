import {
  BackgroundColorProps,
  BorderProps,
  SpacingProps,
} from '@shopify/restyle';
import {Theme} from '../theme/theme';

export type RestyleProps = SpacingProps<Theme> &
  BorderProps<Theme> &
  BackgroundColorProps<Theme>;
