import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import AllCoursesScreen from '../screens/allCoursesScreen';
import PrimaryLayout from '../shared/components/layout';
import Box from '../shared/components/box';
import {responsiveScale} from '../shared/utilities/helper';
import {palette} from '../shared/theme/theme';
import Text from '../shared/components/text';
import AllPastQuestions from '../screens/allPastQuestions';
import AllFavouriteCoursesScreen from '../screens/allFavouriteCourses';
import AllFavouritePastQuestions from '../screens/allFavouritePastQuestions';

const Tab = createMaterialTopTabNavigator();

function TopTabFavouritesNavigation() {
  return (
    <PrimaryLayout title="Favourites">
      <Tab.Navigator
        hitSlop={-4}
        screenOptions={{
          tabBarActiveTintColor: palette.red,
          tabBarInactiveTintColor: palette.secondaryLightGrey,
          tabBarAndroidRipple: {radius: 0},
          tabBarIndicatorStyle: {
            borderBottomColor: palette.red,
            borderBottomWidth: responsiveScale(1),
          },
        }}
        style={{
          // paddingHorizontal: responsiveScale(8),
          alignSelf: 'center',
          width: '90%',
          backgroundColor: 'white',
          elevation: 0,
          marginTop: responsiveScale(10),
        }}>
        <Tab.Screen name="Courses" component={AllFavouriteCoursesScreen} />
        <Tab.Screen
          name="Past questions"
          component={AllFavouritePastQuestions}
        />
      </Tab.Navigator>
    </PrimaryLayout>
  );
}

export default TopTabFavouritesNavigation;
