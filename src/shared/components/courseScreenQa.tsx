import * as React from 'react';
import Box from './box';
import Text from './text';
import {ScrollView} from 'react-native-gesture-handler';
import {responsiveScale, width} from '../utilities/helper';
import {Image} from 'react-native-animatable';
import Icon from 'react-native-vector-icons/Ionicons';
import {palette} from '../theme/theme';

const QA = [
  {
    Title: 'What is Thermodynamics',
    Details:
      'Thermodynamics is a branch of physics that deals with heat, work, and temperature, and their relation to energy, entropy, and the physical properties of matter and radiation.',
    Answer: 'This is the description of the physical properties',
  },
  {
    Title: 'What is Thermodynamics',
    Details:
      'Thermodynamics is a branch of physics that deals with heat, work, and temperature, and their relation to energy, entropy, and the physical properties of matter and radiation.',
    Answer: 'This is the description of the physical properties',
  },
  {
    Title: 'What is Thermodynamics',
    Details:
      'Thermodynamics is a branch of physics that deals with heat, work, and temperature, and their relation to energy, entropy, and the physical properties of matter and radiation.',
    Answer: null,
  },
  {
    Title: 'What is Thermodynamics',
    Details:
      'Thermodynamics is a branch of physics that deals with heat, work, and temperature, and their relation to energy, entropy, and the physical properties of matter and radiation.',
    Answer: null,
  },
];

const CourseScreenQA = () => {
  return (
    <Box flex={1} padding="m" backgroundColor="white">
      {QA.length === 0 ? (
        <Box
          flex={1}
          //   flexDirection="ro"
          //   justifyContent="center"
          alignItems="center">
          <Image
            resizeMode="contain"
            style={{
              width: responsiveScale(40),
              height: responsiveScale(40),
              marginTop: responsiveScale(10),
            }}
            source={require('../assets/images/note.png')}
          />
          <Text
            textAlign="center"
            style={{width: '50%'}}
            marginTop="s"
            color="secondaryLightGrey">
            You have not asked any question. Click to ask
          </Text>
          <Image
            resizeMode="contain"
            style={{
              width: responsiveScale(25),
              height: responsiveScale(50),
              marginLeft: responsiveScale(10),
            }}
            source={require('../assets/images/pointarrow.png')}
          />
        </Box>
      ) : (
        <ScrollView>
          {QA.map((item, index) => (
            <Box key={index} width={width * 0.8} marginTop="m">
              <Box key={index} flexDirection="row">
                <Text fontWeight="bold" color="secondaryLightGrey">
                  {item.Title}
                </Text>
              </Box>
              <Box marginTop="s" flexDirection="row">
                <Text color="secondaryLightGrey">{item.Details}</Text>
              </Box>
              <Box flexDirection="row" marginTop="s">
                {item.Answer === null ? (
                  <Text fontWeight="bold">No replies</Text>
                ) : (
                  <Text color="collegeRed" fontWeight="bold">
                    View answer
                  </Text>
                )}
              </Box>
              {index === QA.length - 1 ? null : (
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

      <Box
        position="absolute"
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        marginRight="xxl"
        marginTop="m"
        style={{
          width: responsiveScale(20),
          height: responsiveScale(20),
          borderRadius: responsiveScale(200),
          marginLeft: width * 0.73,
          marginTop: responsiveScale(100),
        }}
        backgroundColor="collegeRed">
        <Icon
          size={responsiveScale(10)}
          name="add"
          style={{marginTop: responsiveScale(1.2)}}
          color={palette.white}
        />
      </Box>
    </Box>
  );
};

export default CourseScreenQA;
