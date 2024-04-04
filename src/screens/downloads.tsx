import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import PrimaryLayout from '../shared/components/layout';
import Box from '../shared/components/box';
import {FlatList} from 'react-native-gesture-handler';
import {Image} from 'react-native-animatable';
import {responsiveScale} from '../shared/utilities/helper';
import CoursesCrad from '../shared/components/coursesCard';
import {continuesLearning} from './home';

// interface DownloadsProps {}

const Downloads = () => {
  return (
    <PrimaryLayout title="Downloads" hasSearchBar>
      <Box
        paddingHorizontal="m"
        backgroundColor="white"
        paddingTop="xl"
        flex={1}>
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
                  No favourites
                </Text>
              </Box>
            )
          }
          // data={[]}
          data={continuesLearning}
          renderItem={({item}) => (
            <CoursesCrad
              wrapperStyle={{marginBottom: responsiveScale(10)}}
              title={item.title}
              courseCode={item.courseCode}
              showCourseProgress
              progress="0.78"
            />
          )}
        />
      </Box>
    </PrimaryLayout>
  );
};

export default Downloads;

const styles = StyleSheet.create({
  container: {},
});
