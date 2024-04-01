import {createTheme} from '@shopify/restyle';

export const palette = {
  purpleLight: '#8C6FF7',
  purplePrimary: '#5A31F4',
  purpleDark: '#3F22AB',

  greenLight: '#56DCBA',
  greenPrimary: '#0ECD9D',
  greenDark: '#0A906E',

  black: '#0B0B0B',
  red: '#FB3846',
  secondaryGrey: '#4F4F4F',
  secondaryLightGrey: '#828282',
  secondaryLightBackground: '#E5E4E2',
  darkGrey: '#333333',
  white: '#FFFFFF',
  lightCollegeRed: '#ffeaea',
  yellow: '#F2C94C',
};

const theme = createTheme({
  colors: {
    mainBackground: palette.white,
    cardPrimaryBackground: palette.purplePrimary,
    collegeRed: palette.red,
    secondaryGrey: palette.secondaryGrey,
    darkGrey: palette.darkGrey,
    secondaryLightGrey: palette.secondaryLightGrey,
    secondaryLightBackground: palette.secondaryLightBackground,
    white: palette.white,
    lightCollegeRed: palette.lightCollegeRed,
    yellow: palette.yellow,
  },
  spacing: {
    none: 0,
    xxxxs: 0.6,
    xxxs: 1,
    xxs: 3,
    xs: 6,
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
    xxl: 72,
    xxxl: 100,
    lg: 140,
  },
  textVariants: {
    header: {
      fontWeight: 'bold',
      fontSize: 34,
    },
    body: {
      fontSize: 16,
      lineHeight: 24,
    },
    defaults: {
      // We can define a default text variant here.
    },
  },
});

export type Theme = typeof theme;
export default theme;
