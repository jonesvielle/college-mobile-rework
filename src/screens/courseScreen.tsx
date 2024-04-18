import * as React from 'react';
import PrimaryLayout from '../shared/components/layout';
import {palette} from '../shared/theme/theme';
import {
  responsiveFont,
  responsiveScale,
  width,
} from '../shared/utilities/helper';
import {Image} from 'react-native-animatable';
import Box from '../shared/components/box';
import Text from '../shared/components/text';
import LinearGradient from 'react-native-linear-gradient';
import LinearGradientComponent from '../shared/components/LinearGradientComponent';
import TopTabCourseScreenNavigation from '../navigation/TopTabCourseScreenNavigation';

// interface CourseScreenProps {}

const CourseScreen = () => {
  return (
    <PrimaryLayout
      transparent
      headerIconColor={palette.white}
      headerType="inner"
      hasShareIcon>
      <Box>
        <LinearGradientComponent />
      </Box>

      <TopTabCourseScreenNavigation
        navigatorStyle={{
          alignSelf: 'center',
          width: '100%',
          backgroundColor: 'white',
          elevation: 0,
          padding: responsiveScale(5),
        }}
      />
    </PrimaryLayout>
  );
};

export default CourseScreen;
