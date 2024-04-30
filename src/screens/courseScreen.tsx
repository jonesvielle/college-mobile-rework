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
import LectureDetailsModal from '../shared/components/Modals/lecturesDetailsModal';

// interface CourseScreenProps {}

const CourseScreen = () => {
  const [showLectureDetailsModal, setShowLectureDetailsModal] =
    React.useState(false);
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
        handleSelectCourse={value => {
          // console.log('value selected: ' + value);
          setShowLectureDetailsModal(true);
        }}
        navigatorStyle={{
          alignSelf: 'center',
          width: '100%',
          backgroundColor: 'white',
          elevation: 0,
          padding: responsiveScale(5),
        }}
      />

      <LectureDetailsModal
        onDismiss={() => {
          setShowLectureDetailsModal(false);
        }}
        show={showLectureDetailsModal}
      />
    </PrimaryLayout>
  );
};

export default CourseScreen;
