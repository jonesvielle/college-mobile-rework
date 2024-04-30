import * as React from 'react';
import Box from './box';
import Text from './text';
import {responsiveScale, width} from '../utilities/helper';
import {palette} from '../theme/theme';
import {ScrollView} from 'react-native-gesture-handler';
import {Image} from 'react-native-animatable';

// interface CoursesScreenNoteComponentProps {}

const Notes = [
  {
    Topic: 'What is Thermodynamics',
    Note: 'Thermodynamics is a branch of physics that deals with heat, work, and temperature, and their relation to energy, entropy, and the physical properties of matter and radiation.',
    LectureTime: '04:54',
  },
  {
    Topic: 'What is Infrared Temperature',
    Note: 'The temperature of the body is the temperature radiating at the surface of the hot water',
    LectureTime: '22:54',
  },
  {
    Topic: 'What is Thermodynamics',
    Note: 'Thermodynamics is a branch of physics that deals with heat, work, and temperature, and their relation to energy, entropy, and the physical properties of matter and radiation.',
    LectureTime: '04:54',
  },
  {
    Topic: 'What is Infrared Temperature',
    Note: 'The temperature of the body is the temperature radiating at the surface of the hot water',
    LectureTime: '22:54',
  },
];

const CoursesScreenNoteComponent = () => {
  return (
    <Box flex={1} backgroundColor="white" padding="m">
      {Notes.length === 0 ? (
        <Box
          flex={1}
          //   flexDirection="ro"
          //   justifyContent="center"
          alignItems="center">
          <Image
            style={{
              width: responsiveScale(25),
              height: responsiveScale(40),
              marginTop: responsiveScale(10),
            }}
            source={require('../assets/images/note.png')}
          />
          <Text marginTop="s" color="secondaryLightGrey">
            You have no notes
          </Text>
        </Box>
      ) : (
        <ScrollView>
          {Notes.map((note, index) => (
            <Box key={index} width={width * 0.8} marginTop="m">
              <Box key={index} flexDirection="row">
                <Text fontWeight="bold" style={{width: '15%'}}>
                  Topic:{' '}
                </Text>
                <Text style={{width: '85%'}} color="secondaryLightGrey">
                  {note.Topic}
                </Text>
              </Box>
              <Box marginTop="s" flexDirection="row">
                <Text fontWeight="bold" style={{width: '15%'}}>
                  Note:{' '}
                </Text>
                <Text color="secondaryLightGrey" style={{width: '85%'}}>
                  {note.Note}
                </Text>
              </Box>
              <Box flexDirection="row" justifyContent="flex-end" marginTop="s">
                <Text
                  color="collegeRed"
                  fontWeight="bold"
                  style={{width: '85%'}}>
                  Go to lecture time {note.LectureTime}
                </Text>
              </Box>
              {index === Notes.length - 1 ? null : (
                <Box
                  marginVertical="m"
                  borderColor="secondaryLightGrey"
                  borderWidth={responsiveScale(0.1)}
                />
              )}
            </Box>
          ))}
        </ScrollView>
      )}
    </Box>
  );
};

export default CoursesScreenNoteComponent;
