import * as React from 'react';
import Box from '../shared/components/box';
import PrimaryLayout from '../shared/components/layout';
import Text from '../shared/components/text';
import {FlatList} from 'react-native-gesture-handler';
import {Image} from 'react-native-svg';
import {responsiveScale} from '../shared/utilities/helper';
import {continuesLearning} from './home';
import CoursesCrad from '../shared/components/coursesCard';

// interface AllCoursesScreenProps {}

const AllCoursesScreen = () => {
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
                source={require('../shared/assets/images/search.png')}
              />
              <Text color="secondaryLightGrey" marginTop="m">
                Search not found
              </Text>
            </Box>
          )
        }
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
  );
};

export default AllCoursesScreen;
