import * as React from 'react';
import PrimaryLayout from '../shared/components/layout';
import Text from '../shared/components/text';
import {type CourseType} from '../shared/types/courseTypes';
import Box from '../shared/components/box';
import {FlatList} from 'react-native-gesture-handler';
import SearchInput from '../shared/components/searchInput';
import CoursesCrad from '../shared/components/coursesCard';
import {Image} from 'react-native-animatable';
import {responsiveScale} from '../shared/utilities/helper';

// interface SearchScreenProps {}

const SearchScreen = () => {
  const [searchSuggestions, setSearchSuggestions] =
    React.useState<CourseType[]>();
  return (
    <PrimaryLayout
      hasSearchBar
      headerType="inner"
      sendSearchData={course => {
        setSearchSuggestions(course);
      }}>
      {/* <Text>Seatch screen</Text> */}
      <Box paddingHorizontal="m" marginTop="l" flex={1}>
        <FlatList
          ListEmptyComponent={
            searchSuggestions === undefined ? null : (
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
          data={
            searchSuggestions === undefined || searchSuggestions.length === 0
              ? []
              : searchSuggestions
          }
          renderItem={({item}) => (
            <CoursesCrad
              rating="4.5"
              title={item.title}
              courseCode={item.courseCode}
            />
          )}
        />
      </Box>
    </PrimaryLayout>
  );
};

export default SearchScreen;
