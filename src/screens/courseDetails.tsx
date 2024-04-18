/* eslint-disable @typescript-eslint/no-unsafe-argument */

import * as React from 'react';
import PrimaryLayout from '../shared/components/layout';
import Box from '../shared/components/box';
import {Image} from 'react-native-animatable';
import {responsiveFont, responsiveScale} from '../shared/utilities/helper';
import Text from '../shared/components/text';
import Icon from 'react-native-vector-icons/Ionicons';
import {palette} from '../shared/theme/theme';
import {ScrollView} from 'react-native-gesture-handler';
import Video from 'react-native-video';
import {Pressable} from 'react-native';

const curriculum = [
  {
    title: 'Introduction',
    duration: '55:09',
  },
  {
    title: 'Mathematical analysiss of heat',
    duration: '44:09',
  },
  {
    title: 'Heat capacity and performance',
    duration: '35:49',
  },
  {
    title: 'Introduction',
    duration: '25:30',
  },
];

const ratings = [
  {
    comment:
      'I really love how the course was taught to improve the impact of fluid mechanics on heat transfer around specific fluid',
    rating: '4.2',
    author: 'Jones Obenobe',
  },
  {
    comment:
      'I really love how the course was taught to improve the impact of fluid mechanics on heat transfer around specific fluid',
    rating: '4.2',
    author: 'Jones Obenobe',
  },
  {
    comment:
      'I really love how the course was taught to improve the impact of fluid mechanics on heat transfer around specific fluid',
    rating: '4.2',
    author: 'Jones Obenobe',
  },
  {
    comment:
      'I really love how the course was taught to improve the impact of fluid mechanics on heat transfer around specific fluid',
    rating: '4.2',
    author: 'Jones Obenobe',
  },
];

const CourseDetails = () => {
  const videoRef: React.MutableRefObject<undefined> = React.useRef();
  const [playVideo, setPlayVideo] = React.useState(false);
  const [renderVideo, setRenderVideo] = React.useState(false);
  const [currentVideoProgress, setCurrentVideoProgress] =
    React.useState<number>(0);
  const [pauseVideo, setPauseVideo] = React.useState(true);
  const [videoEnded, setVideoEnded] = React.useState(false);
  return (
    <PrimaryLayout
      bottomButtonPressed={() => {
        videoRef.current?.seek(580);
      }}
      hasSecondaryButton
      showBottomButton
      hasShareIcon
      title="Course Details"
      bottomButtonText="SUBSCRIBE"
      secondaryButtonText="ADD TO FAVOURITES"
      headerType="inner">
      <ScrollView showsVerticalScrollIndicator={false}>
        <Box padding="m" flex={1}>
          <Box>
            <Video
              muted={false}
              ignoreSilentSwitch="ignore"
              ref={videoRef}
              poster="https://www.scholarsight.com/asset-v1:Scholarsight+Physics_Electrostatics+Physics102+type@asset+block@Electrostatistics.jpg"
              // onLoad={(e = null) => {
              //   console.log('Loading Course Details', e);
              //   if (e !== null) {
              //     setRenderVideo(true);
              //   }
              // }}
              onProgress={progress => {
                // console.log('progress: ' + JSON.stringify(progress));
                setCurrentVideoProgress(progress.currentTime);
                if (
                  Math.round(progress.currentTime) ===
                  Math.round(progress.seekableDuration)
                ) {
                  setVideoEnded(true);
                  setPauseVideo(true);
                  setPlayVideo(false);
                }
              }}
              style={{
                width: '100%',
                height: responsiveScale(80),
                borderRadius: responsiveScale(10),
              }}
              source={{
                uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
              }} // Can be a URL or a local file.
              paused={pauseVideo}
              fullscreen
            />

            {playVideo ? (
              <Box
                alignItems="center"
                justifyContent="center"
                height={responsiveScale(80)}
                width={'100%'}
                position="absolute">
                <Pressable
                  onPress={() => {
                    setPlayVideo(false);
                    setPauseVideo(true);
                  }}>
                  <Icon
                    name="pause-circle-outline"
                    size={responsiveScale(30)}
                    color={palette.secondaryLightBackground}
                  />
                </Pressable>
              </Box>
            ) : (
              <Box
                alignItems="center"
                justifyContent="center"
                height={responsiveScale(80)}
                width={'100%'}
                position="absolute">
                <Pressable
                  onPress={() => {
                    if (videoEnded) {
                      videoRef.current?.seek(0);
                      setPauseVideo(false);
                      setPlayVideo(true);
                      return;
                    }
                    // console.log('current viideo progree', currentVideoProgress);
                    setPauseVideo(false);
                    setPlayVideo(true);
                  }}>
                  <Image
                    borderRadius={responsiveScale(2)}
                    style={{
                      width: responsiveScale(30),
                      height: responsiveScale(30),
                    }}
                    source={require('../shared/assets/images/preview-play.png')}
                  />
                </Pressable>
                <Text color="white" fontWeight="bold">
                  Course preview
                </Text>
              </Box>
            )}
          </Box>
          <Box marginTop="m">
            <Text fontWeight="bold" fontSize={responsiveFont(20)}>
              Introduction to thermal physics
            </Text>
            <Text
              color="secondaryLightGrey"
              marginTop="m"
              fontSize={responsiveFont(15)}>
              In this course I'll show the step by step, day by day process
              understanding therma power with quantum physics.
            </Text>
            <Box flexDirection="row" marginTop="m">
              <Text color="secondaryLightGrey">Course code:</Text>
              <Text marginLeft="s" fontWeight="bold" color="darkGrey">
                THP401
              </Text>
            </Box>
            <Box flexDirection="row" marginTop="s">
              <Text color="secondaryLightGrey">Date uploaded:</Text>
              <Text marginLeft="s" fontWeight="bold" color="darkGrey">
                23 May 2024
              </Text>
            </Box>
            <Box flexDirection="row" marginTop="s">
              <Text color="secondaryLightGrey">Ratings:</Text>
              <Box marginLeft="s" flexDirection="row">
                <Text fontWeight="bold" color="darkGrey">
                  4.5
                </Text>
                <Icon
                  name="star"
                  style={{marginTop: responsiveScale(1.2)}}
                  color={palette.yellow}
                />
              </Box>
            </Box>
          </Box>
          <Box marginTop="l">
            <Text fontSize={responsiveFont(20)}>Curriculum</Text>
            {curriculum.map((item, index) => (
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
                  <Text fontSize={responsiveFont(15)} fontWeight="bold">
                    {item.title}
                  </Text>
                  <Text
                    fontSize={responsiveFont(15)}
                    color="secondaryLightGrey">
                    {item.duration}
                  </Text>
                </Box>
                <Box width={'10%'} alignItems="flex-end">
                  <Icon
                    size={responsiveScale(7)}
                    name="add"
                    style={{marginTop: responsiveScale(1.2)}}
                    color={palette.red}
                  />
                </Box>
              </Box>
            ))}
          </Box>

          <Box marginTop="l">
            <Text fontSize={responsiveFont(20)}>Students Ratings</Text>
            {ratings.map((item, index) => (
              <Box key={index} marginTop="m">
                <Text>{item.comment}</Text>
                <Box flexDirection="row" marginTop="m">
                  <Text color="secondaryLightGrey">{item.author}</Text>
                  <Box marginLeft="s" flexDirection="row">
                    <Text fontWeight="bold" color="darkGrey">
                      {item.rating}
                    </Text>
                    <Icon
                      name="star"
                      style={{marginTop: responsiveScale(1.2)}}
                      color={palette.yellow}
                    />
                  </Box>
                </Box>
                {index === ratings.length - 1 ? null : (
                  <Box
                    borderColor="secondaryLightGrey"
                    borderWidth={responsiveScale(0.1)}
                    marginTop="m"
                  />
                )}
              </Box>
            ))}
          </Box>
        </Box>
      </ScrollView>
    </PrimaryLayout>
  );
};

export default CourseDetails;
