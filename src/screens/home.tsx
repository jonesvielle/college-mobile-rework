import * as React from 'react';
import PrimaryLayout from '../shared/components/layout';
import Box from '../shared/components/box';
import Text from '../shared/components/text';
import {responsiveFont, responsiveScale} from '../shared/utilities/helper';
import Icon from 'react-native-vector-icons/Ionicons';
import {Platform, Pressable} from 'react-native';
import {Image} from 'react-native-animatable';
import FilterSelectInput from '../shared/components/filterSelectInput';
import {type CourseType} from '../shared/types/courseTypes';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import * as Progress from 'react-native-progress';
import {palette} from '../shared/theme/theme';
import CoursesCrad from '../shared/components/coursesCard';

const levels = ['500L', '400L', '300L', '200L', '100L'];

export const continuesLearning: CourseType[] = [
  {
    title: 'Introduction to Web Applications',
    courseDescription:
      'Web development is the process of creating a website that is visually appealing and engaging to the user.',
    courseImage: require('../shared/assets/images/physics.webp'),
    level: '500L',
    courseCode: 'THP401',
  },
  {
    title: 'Introduction to Web Applications and databases design',
    courseDescription:
      'Web development is the process of creating a website that is visually appealing and engaging to the user.',
    courseImage: require('../shared/assets/images/physics.webp'),
    level: '500L',
    courseCode: 'THP401',
  },
];

const Home = () => {
  const [progressValue, setProgressValue] = React.useState<number>();
  const progress = React.useRef(0).current;
  React.useEffect(() => {
    setProgressValue(0.3);
  }, []);
  return (
    <PrimaryLayout headerType="landing">
      <Box flex={1} marginHorizontal="m" marginTop="l">
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text
            color="darkGrey"
            fontSize={responsiveFont(20)}
            fontWeight="bold">
            Welcome Jones
          </Text>
          <Box
            marginTop="s"
            flexDirection="row"
            // alignItems="center"
            justifyContent="space-between">
            <Text color="secondaryLightGrey">Let's continue learning</Text>
            <Box flexDirection="row">
              <Text marginRight="m" color="secondaryLightGrey">
                Sort
              </Text>
              <FilterSelectInput
                getSelectedValue={level => {
                  // console.log('level', level);
                }}
                data={levels}
              />
            </Box>
          </Box>
          <Box marginTop="l" zIndex={-1}>
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={continuesLearning}
              renderItem={({item}) => (
                <Box
                  margin="s"
                  width={responsiveScale(100)}
                  backgroundColor="white"
                  borderRadius={responsiveScale(5)}
                  padding="m"
                  style={
                    Platform.OS === 'android'
                      ? {
                          shadowColor: '#000',
                          shadowOffset: {
                            width: 0,
                            height: 3,
                          },
                          shadowOpacity: 0.27,
                          shadowRadius: responsiveScale(5),

                          elevation: 3,
                        }
                      : {
                          shadowColor: '#000',
                          shadowOffset: {
                            width: 0,
                            height: 3,
                          },
                          shadowOpacity: 0.27,
                          shadowRadius: responsiveScale(1),

                          elevation: 1,
                        }
                  }>
                  <Box flexDirection="row" alignItems="center">
                    <Image
                      borderRadius={responsiveScale(2)}
                      style={{
                        width: responsiveScale(18),
                        height: responsiveScale(18),
                        marginLeft: responsiveScale(2),
                      }}
                      source={require('../shared/assets/images/physics.webp')}
                    />
                    <Box flexDirection="column">
                      <Text
                        paddingHorizontal="m"
                        fontWeight="bold"
                        color="darkGrey"
                        fontSize={responsiveFont(15)}
                        style={{width: responsiveScale(80)}}>
                        {item.title.length > 35
                          ? item.title.slice(0, 35) + '...'
                          : item.title}
                      </Text>
                      <Text
                        paddingHorizontal="m"
                        color="secondaryLightGrey"
                        marginTop="xxs"
                        fontSize={responsiveFont(12)}>
                        Course code:{' '}
                        <Text fontWeight="bold" color="darkGrey">
                          {item.courseCode}
                        </Text>
                      </Text>
                    </Box>
                  </Box>
                  <Box
                    marginTop="m"
                    flexDirection="row"
                    alignItems="center"
                    justifyContent="space-between">
                    <Text
                      fontWeight="bold"
                      color="collegeRed"
                      fontSize={responsiveFont(12)}>
                      22 lessons
                    </Text>
                    <Text color="darkGrey" fontSize={responsiveFont(12)}>
                      42 lessons
                    </Text>
                  </Box>
                  <Box marginTop="s">
                    <Progress.Bar
                      useNativeDriver={false}
                      animationConfig={{duration: 3000, delay: 500}}
                      width={responsiveScale(400)}
                      color={palette.red}
                      borderWidth={0}
                      style={{
                        top: 0,
                        // flex: 1,
                        backgroundColor: palette.secondaryLightBackground,
                      }}
                      progress={progressValue}
                    />
                  </Box>
                </Box>
              )}
            />
          </Box>
          <Box
            marginTop="m"
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between">
            <Text
              fontWeight="bold"
              color="darkGrey"
              fontSize={responsiveFont(15)}>
              Popular courses
            </Text>
            <Text
              fontWeight="bold"
              color="collegeRed"
              fontSize={responsiveFont(15)}>
              Show all
            </Text>
          </Box>
          <Box marginTop="m">
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={continuesLearning}
              renderItem={({item}) => (
                <Box backgroundColor="white" width={responsiveScale(90)}>
                  <Image
                    borderRadius={responsiveScale(2)}
                    style={{
                      width: responsiveScale(80),
                      height: responsiveScale(40),
                      marginLeft: responsiveScale(2),
                    }}
                    source={require('../shared/assets/images/physics.webp')}
                  />
                  <Box padding="s">
                    <Text
                      fontWeight="bold"
                      fontSize={responsiveFont(15)}
                      color="darkGrey">
                      Introduction to thermal physics
                    </Text>
                    <Text
                      color="secondaryLightGrey"
                      marginTop="xxs"
                      fontSize={responsiveFont(12)}>
                      Course code:{' '}
                      <Text fontWeight="bold" color="darkGrey">
                        {'THICO'}
                      </Text>
                    </Text>
                  </Box>
                </Box>
              )}
            />
          </Box>

          {/* for past questions */}
          <Box
            marginTop="l"
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between">
            <Text
              fontWeight="bold"
              color="darkGrey"
              fontSize={responsiveFont(15)}>
              Past questions
            </Text>
            <Text
              fontWeight="bold"
              color="collegeRed"
              fontSize={responsiveFont(15)}>
              Show all
            </Text>
          </Box>
          <Box marginTop="m" marginBottom="m">
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={continuesLearning}
              renderItem={({item}) => (
                <Box backgroundColor="white" width={responsiveScale(90)}>
                  <Image
                    borderRadius={responsiveScale(2)}
                    style={{
                      width: responsiveScale(80),
                      height: responsiveScale(40),
                      marginLeft: responsiveScale(2),
                    }}
                    source={require('../shared/assets/images/physics.webp')}
                  />
                  <Box padding="s">
                    <Text
                      fontWeight="bold"
                      fontSize={responsiveFont(15)}
                      color="darkGrey">
                      Introduction to thermal physics
                    </Text>
                    <Text
                      color="secondaryLightGrey"
                      marginTop="xxs"
                      fontSize={responsiveFont(12)}>
                      Course code:{' '}
                      <Text fontWeight="bold" color="darkGrey">
                        {'THICO'}
                      </Text>
                    </Text>
                  </Box>
                </Box>
              )}
            />
          </Box>

          {/* for other courses */}
          <Box
            marginTop="m"
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between">
            <Text
              fontWeight="bold"
              color="darkGrey"
              fontSize={responsiveFont(15)}>
              Other courses
            </Text>
          </Box>
          <Box marginTop="m" marginBottom="m">
            <FlatList
              showsHorizontalScrollIndicator={false}
              data={continuesLearning}
              renderItem={({item}) => (
                <CoursesCrad
                  rating="4.5"
                  title={item.title}
                  courseCode={item.courseCode}
                />
              )}
            />
          </Box>
        </ScrollView>
      </Box>
    </PrimaryLayout>
  );
};

export default Home;
