import * as React from 'react';
import Box from './box';
import {Image} from 'react-native-animatable';
import {responsiveFont, responsiveScale} from '../utilities/helper';
import Text from './text';
import Icon from 'react-native-vector-icons/Ionicons';
import {palette} from '../theme/theme';

interface CoursesCradProps {
  title: string;
  courseCode: string;
  rating: string;
}

const CoursesCrad = ({title, courseCode, rating}: CoursesCradProps) => {
  return (
    <Box
      marginBottom="m"
      width={responsiveScale(100)}
      backgroundColor="white"
      borderRadius={responsiveScale(5)}>
      <Box flexDirection="row">
        <Image
          borderRadius={responsiveScale(2)}
          style={{
            width: responsiveScale(25),
            height: responsiveScale(25),
            marginLeft: responsiveScale(2),
          }}
          source={require('../assets/images/physics.webp')}
        />
        <Box flexDirection="column">
          <Text
            paddingHorizontal="m"
            fontWeight="bold"
            color="darkGrey"
            fontSize={responsiveFont(15)}>
            {/* {item.title.length > 35
            ? item.title.slice(0, 35) + '...'
            : item.title} */}
            {title}
          </Text>
          <Text
            paddingHorizontal="m"
            color="secondaryLightGrey"
            marginTop="xxs"
            fontSize={responsiveFont(12)}>
            Course code:{' '}
            <Text fontWeight="bold" color="darkGrey">
              {courseCode}
            </Text>
          </Text>
          {rating === undefined || rating.length === 0 ? null : (
            <Box paddingHorizontal="m" flexDirection="row" alignItems="center">
              <Text
                marginRight="s"
                color="secondaryLightGrey"
                marginTop="xxs"
                fontSize={responsiveFont(12)}>
                Ratings: {rating}
              </Text>
              <Icon
                name="star"
                style={{marginTop: responsiveScale(1.2)}}
                color={palette.yellow}
              />
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default CoursesCrad;