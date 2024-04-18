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
];

const titles = [
  {
    title: 'Introduction',
    duration: '55:09',
    state: 'downloaded',
  },
  {
    title: 'Mathematical analysiss of heat in hre for the main',
    duration: '44:09',
    state: 'downloading',
  },
  {
    title: 'Heat capacity and performance',
    duration: '35:49',
    state: 'not downloaded',
  },
];
export interface CourseType {
  id: string;
  title: string;
  duration: string;
  open?: boolean;
}
const CoursesScreenLecturesComponent = () => {
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
    <ScrollView>
      <Box flex={1} backgroundColor="white" paddingRight="xl">
        <Box flex={1} marginTop="l">
          {updatedCurriculum === undefined
            ? curriculum.map((item, index) => (
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
                    {/* <Text>Cool here</Text> */}
                    <Box style={{width: '80%'}}>
                      <Pressable
                        onPress={() => {
                          const updatedArray = curriculum.map(obj =>
                            obj.id === item.id
                              ? {
                                  ...obj,
                                  ...{open: true},
                                }
                              : {
                                  ...obj,
                                },
                          );
                          setUpdatedCurriculum(updatedArray);
                          //   console.log('area with curriculum');
                          //   console.log(
                          //     'updatedArray: ' + JSON.stringify(updatedArray),
                          //   );
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
                      {titles.map((title, childIndex) => (
                        <Animated.View
                          key={childIndex}
                          style={{
                            flex: 1,
                            height: 0,
                            // height: 0,
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                          }}>
                          <Box
                            key={childIndex}
                            marginTop="l"
                            flexDirection="row"
                            justifyContent="space-between">
                            <Text style={{width: '10%'}} fontWeight="bold">
                              01
                            </Text>
                            <Box style={{width: '80%'}}>
                              <Text
                                fontSize={responsiveFont(12)}
                                fontWeight="bold">
                                What is thermal physics
                              </Text>
                              <Box
                                marginTop="s"
                                flexDirection="row"
                                alignItems="center">
                                <Image
                                  style={{
                                    width: responsiveScale(5),
                                    height: responsiveScale(5),
                                  }}
                                  source={require('../assets/images/folder-video.png')}
                                />
                                <Text marginLeft="s">Video - 05:06 mins</Text>
                              </Box>
                            </Box>

                            <Box width={'10%'} alignItems="flex-end">
                              <Pressable>
                                {title.state === 'downloading' ? (
                                  <Box>
                                    <Icon
                                      size={responsiveScale(6)}
                                      name="pause-outline"
                                      style={{
                                        marginTop: responsiveScale(2.5),
                                        marginLeft: responsiveScale(2.5),
                                      }}
                                      color={palette.red}
                                    />
                                    <Progress.Circle
                                      style={{
                                        backgroundColor: palette.transparent,
                                        position: 'absolute',
                                      }}
                                      borderWidth={responsiveScale(0.3)}
                                      borderColor={
                                        palette.secondaryLightBackground
                                      }
                                      color={palette.red}
                                      size={30}
                                      progress={0.4}
                                    />
                                  </Box>
                                ) : null}
                                {title.state === 'not downloaded' ? (
                                  <Box>
                                    <Icon
                                      size={responsiveScale(6)}
                                      name="arrow-down-outline"
                                      style={{
                                        marginTop: responsiveScale(2.5),
                                        marginLeft: responsiveScale(2.5),
                                      }}
                                      color={palette.secondaryLightGrey}
                                    />
                                    <Progress.Circle
                                      style={{
                                        backgroundColor: palette.transparent,
                                        position: 'absolute',
                                      }}
                                      borderColor={palette.secondaryLightGrey}
                                      size={30}
                                      color={palette.secondaryLightGrey}
                                      borderWidth={responsiveScale(0.8)}
                                    />
                                  </Box>
                                ) : null}
                                {title.state === 'downloaded' ? (
                                  <Box>
                                    <Image
                                      style={{
                                        width: responsiveScale(7),
                                        height: responsiveScale(7),
                                      }}
                                      source={require('../assets/images/wastebasket.png')}
                                    />
                                  </Box>
                                ) : null}
                              </Pressable>
                            </Box>
                          </Box>
                        </Animated.View>
                      ))}
                    </Box>

                    <Box width={'10%'} alignItems="flex-end">
                      {accordionState === 'close' && activeLecture === index ? (
                        <Pressable
                          onPress={() => {
                            setActiveLecture(index);
                            // console.log(
                            //   'handle open clicked active index: ' + index,
                            // );
                            //   console.log('active index: ' + index);
                            handleClose();
                            setAccordionState('open');
                          }}>
                          <Box paddingVertical="m">
                            <Box
                              borderWidth={responsiveScale(0.3)}
                              width={responsiveScale(5)}
                              borderColor="collegeRed"
                            />
                          </Box>
                        </Pressable>
                      ) : activeLecture === undefined ? (
                        <Pressable
                          onPress={() => {
                            setActiveLecture(index);
                            // console.log(
                            //   'handle open clicked active index is undefined: ' +
                            //     index,
                            // );
                            //   console.log('active index: ' + index);
                            handleClose();
                            setAccordionState('open');
                          }}>
                          <Box paddingVertical="m">
                            <Box
                              borderWidth={responsiveScale(0.3)}
                              width={responsiveScale(5)}
                              borderColor="collegeRed"
                            />
                          </Box>
                        </Pressable>
                      ) : (
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
                      )}
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
              ))
            : updatedCurriculum.map((item, index) => (
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
                          if (item.open) {
                            const updatedArray = updatedCurriculum.map(obj =>
                              obj.id === item.id
                                ? {
                                    ...obj,
                                    ...{open: false},
                                  }
                                : {
                                    ...obj,
                                  },
                            );
                            setUpdatedCurriculum(updatedArray);
                            // console.log(item.title);
                            handleCollapse();
                          } else {
                            const updatedArray = updatedCurriculum.map(obj =>
                              obj.id === item.id
                                ? {
                                    ...obj,
                                    ...{open: true},
                                  }
                                : {
                                    ...obj,
                                  },
                            );
                            setUpdatedCurriculum(updatedArray);
                            // console.log(item.title);
                            handleCollapse();
                          }
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
                      {titles.map((title, childIndex) => (
                        <Animated.View
                          key={childIndex}
                          style={{
                            flex: 1,
                            height: item.open ? height : 0,
                            // height: 0,
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                          }}>
                          <Box
                            key={childIndex}
                            marginTop="l"
                            flexDirection="row"
                            justifyContent="space-between">
                            <Text style={{width: '10%'}} fontWeight="bold">
                              01
                            </Text>
                            <Box style={{width: '80%'}}>
                              <Text
                                fontSize={responsiveFont(12)}
                                fontWeight="bold">
                                What is thermal physics
                              </Text>
                              <Box
                                marginTop="s"
                                flexDirection="row"
                                alignItems="center">
                                <Image
                                  style={{
                                    width: responsiveScale(5),
                                    height: responsiveScale(5),
                                  }}
                                  source={require('../assets/images/folder-video.png')}
                                />
                                <Text marginLeft="s">Video - 05:06 mins</Text>
                              </Box>
                            </Box>

                            <Box width={'10%'} alignItems="flex-end">
                              <Pressable>
                                {title.state === 'downloading' ? (
                                  <Box>
                                    <Icon
                                      size={responsiveScale(6)}
                                      name="pause-outline"
                                      style={{
                                        marginTop: responsiveScale(2.5),
                                        marginLeft: responsiveScale(2.5),
                                      }}
                                      color={palette.red}
                                    />
                                    <Progress.Circle
                                      style={{
                                        backgroundColor: palette.transparent,
                                        position: 'absolute',
                                      }}
                                      borderWidth={responsiveScale(0.3)}
                                      borderColor={
                                        palette.secondaryLightBackground
                                      }
                                      color={palette.red}
                                      size={30}
                                      progress={0.4}
                                    />
                                  </Box>
                                ) : null}
                                {title.state === 'not downloaded' ? (
                                  <Box>
                                    <Icon
                                      size={responsiveScale(6)}
                                      name="arrow-down-outline"
                                      style={{
                                        marginTop: responsiveScale(2.5),
                                        marginLeft: responsiveScale(2.5),
                                      }}
                                      color={palette.secondaryLightGrey}
                                    />
                                    <Progress.Circle
                                      style={{
                                        backgroundColor: palette.transparent,
                                        position: 'absolute',
                                      }}
                                      borderColor={palette.secondaryLightGrey}
                                      size={30}
                                      color={palette.secondaryLightGrey}
                                      borderWidth={responsiveScale(0.8)}
                                    />
                                  </Box>
                                ) : null}
                                {title.state === 'downloaded' ? (
                                  <Box>
                                    <Image
                                      style={{
                                        width: responsiveScale(7),
                                        height: responsiveScale(7),
                                      }}
                                      source={require('../assets/images/wastebasket.png')}
                                    />
                                  </Box>
                                ) : null}
                              </Pressable>
                            </Box>
                          </Box>
                        </Animated.View>
                      ))}
                    </Box>

                    <Box width={'10%'} alignItems="flex-end">
                      {item.open ? (
                        <Box paddingVertical="m">
                          <Box
                            borderWidth={responsiveScale(0.3)}
                            width={responsiveScale(5)}
                            borderColor="collegeRed"
                          />
                        </Box>
                      ) : (
                        <Icon
                          size={responsiveScale(7)}
                          name="add"
                          style={{marginTop: responsiveScale(1.2)}}
                          color={palette.red}
                        />
                      )}
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
