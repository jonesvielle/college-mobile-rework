import * as React from 'react';
import Box from '../shared/components/box';
import PrimaryLayout from '../shared/components/layout';
import Text from '../shared/components/text';
import {FlatList} from 'react-native-gesture-handler';
import {responsiveScale} from '../shared/utilities/helper';
import {continuesLearning} from './home';
import CoursesCrad from '../shared/components/coursesCard';
import {Image} from 'react-native-animatable';

// interface AllPastQuestionsProps {}

const AllPastQuestions = () => {
  return (
    <Box backgroundColor="white" paddingTop="xl" flex={1}>
      <FlatList
        ListEmptyComponent={
          continuesLearning === undefined ? null : (
            <Box
              marginTop="xxxl"
              flex={1}
              alignItems="center"
              justifyContent="center">
              <Image
                style={{
                  width: responsiveScale(30),
                  height: responsiveScale(30),
                }}
                source={require('../shared/assets/images/heartbreak.png')}
              />
              <Text color="secondaryLightGrey" marginTop="m">
                Search not found
              </Text>
            </Box>
          )
        }
        data={continuesLearning}
        // data={[]}
        renderItem={({item}) => (
          <CoursesCrad
            rating="4.5"
            title={item.title}
            courseCode={item.courseCode}
            showCourseProgress
            progress={'0.62'}
          />
        )}
      />
    </Box>
  );
};

export default AllPastQuestions;
