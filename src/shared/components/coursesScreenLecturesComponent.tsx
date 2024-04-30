/* eslint-disable @typescript-eslint/strict-boolean-expressions */

import * as React from 'react';
import Box from './box';
import Text from './text';
import {responsiveFont, responsiveScale} from '../utilities/helper';
import {palette} from '../theme/theme';
import Icon from 'react-native-vector-icons/Ionicons';
import {Pressable, Animated, View} from 'react-native';
import {Image} from 'react-native-animatable';
import * as Progress from 'react-native-progress';
import {ScrollView} from 'react-native-gesture-handler';
import LectureDetailsModal from './Modals/lecturesDetailsModal';
import {useRoute} from '@react-navigation/native';

// interface CoursesScreenLecturesComponentProps {}

const curriculum: CourseType[] = [
  {
    id: '345435',
    title: 'Introduction',
    duration: '55:09',
  },
  {
    id: '3454267635',
    title: 'Mathematical analysiss of heat in hre for the main',
    duration: '44:09',
  },
  {
    id: '3459876435',
    title: 'Heat capacity and performance',
    duration: '35:49',
  },
  {
    id: '34554345435',
    title: 'Introduction',
    duration: '25:30',
  },

  {
    id: '3454435',
    title: 'Introduction',
    duration: '55:09',
  },
  {
    id: '34545267635',
    title: 'Mathematical analysiss of heat in hre for the main',
    duration: '44:09',
  },
  {
    id: '34598576435',
    title: 'Heat capacity and performance',
    duration: '35:49',
  },
  {
    id: '345543345435',
    title: 'Introduction',
    duration: '25:30',
  },
];

export interface CourseType {
  id: string;
  title: string;
  duration: string;
  open?: boolean;
}
// type CoursesScreenLecturesComponentType = {
//   handleSelectCourse: (value: string) => void;
// };
const CoursesScreenLecturesComponent = () => {
  const routeParams = useRoute().params;
  // console.log('routeParams', routeParams);
  const height = React.useRef(new Animated.Value(0)).current;
  const [activeLecture, setActiveLecture] = React.useState<number>(0);
  const [accordionState, setAccordionState] = React.useState<'open' | 'close'>(
    'close',
  );
  const [updatedCurriculum, setUpdatedCurriculum] =
    React.useState<CourseType[]>();

  const handleCollapse = () => {
    // console.log('open called');
    Animated.timing(height, {
      toValue: 70, // Target height
      duration: 1000, // Animation duration in milliseconds
      useNativeDriver: false, // Set to false for height animations
    }).start();
  };

  React.useEffect(() => {
    handleCollapse();
  }, [curriculum]);

  const animatedHeight = height.interpolate({
    inputRange: [0, 70],
    outputRange: [0, 70],
  });
  //   console.log('updatedCurriculum', updatedCurriculum);
  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: palette.white,
        paddingBottom: responsiveScale(5),
      }}>
      <Box flex={1} backgroundColor="white" paddingRight="xl">
        <Box flex={1} marginTop="l">
          {curriculum.map((item, index) => (
            <Box key={index}>
              <Box
                key={index}
                marginTop="m"
                flexDirection="row"
                justifyContent="space-between">
                <Text style={{width: '10%'}} fontWeight="bold">
                  {index < 10 ? '0' : null}
                  {index + 1}
                </Text>
                <Box style={{width: '80%'}}>
                  <Pressable
                    onPress={() => {
                      routeParams?.handleSelectCourse(item.id);
                    }}>
                    <Text fontSize={responsiveFont(15)} fontWeight="bold">
                      {item.title}
                    </Text>
                  </Pressable>
                  <Text
                    fontSize={responsiveFont(15)}
                    color="secondaryLightGrey">
                    {item.duration}
                  </Text>
                </Box>

                <Box width={'10%'} alignItems="flex-end">
                  <Pressable
                    onPress={() => {
                      setActiveLecture(index);
                      // console.log(
                      //   'handle close clicked active index: ' + index,
                      // );
                      handleCollapse();
                      setAccordionState('close');
                    }}>
                    <Icon
                      size={responsiveScale(7)}
                      name="add"
                      style={{marginTop: responsiveScale(1.2)}}
                      color={palette.red}
                    />
                  </Pressable>

                  {/* {accordionState === 'open' && activeLecture === index ? (
                    <Pressable
                      onPress={() => {
                        setActiveLecture(index);
                        console.log('active index: ' + index);
                        handleClose();
                        setAccordionState('close');
                      }}>
                      <Box paddingVertical="m">
                        <Box
                          borderWidth={responsiveScale(0.3)}
                          width={responsiveScale(5)}
                          borderColor="collegeRed"
                        />
                      </Box>
                    </Pressable>
                  ) : null} */}
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </ScrollView>
  );
};

export default CoursesScreenLecturesComponent;
