import * as React from 'react';
import MainModal from '../mainModal';
import Box from '../box';
import Text from '../text';
import {responsiveFont, responsiveScale} from '../../utilities/helper';
import {Image} from 'react-native-animatable';
import {Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {palette} from '../../theme/theme';
import * as Progress from 'react-native-progress';
import {ScrollView} from 'react-native-gesture-handler';

interface componentNameProps {
  show: boolean;
  onDismiss: () => void;
}

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

const LectureDetailsModal = ({show = false, onDismiss}: componentNameProps) => {
  return (
    <MainModal
      //   type="short"
      handleType="lectures-list"
      onDismiss={onDismiss}
      show={show}>
      <ScrollView style={{marginBottom: responsiveScale(5)}}>
        {titles.map((title, childIndex) => (
          <Box
            paddingHorizontal="l"
            //   paddingVertical="s"
            key={childIndex}
            marginTop="l"
            flexDirection="row"
            justifyContent="space-between">
            <Text style={{width: '10%'}} fontWeight="bold">
              01
            </Text>
            <Box style={{width: '80%'}}>
              <Text fontSize={responsiveFont(12)} fontWeight="bold">
                What is thermal physics
              </Text>
              <Box marginTop="s" flexDirection="row" alignItems="center">
                <Image
                  style={{
                    width: responsiveScale(5),
                    height: responsiveScale(5),
                  }}
                  source={require('../../assets/images/folder-video.png')}
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
                      borderColor={palette.secondaryLightBackground}
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
                      source={require('../../assets/images/wastebasket.png')}
                    />
                  </Box>
                ) : null}
              </Pressable>
            </Box>
          </Box>
        ))}
      </ScrollView>
    </MainModal>
  );
};

export default LectureDetailsModal;
