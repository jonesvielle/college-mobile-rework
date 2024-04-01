import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import AllCoursesScreen from '../screens/allCoursesScreen';
import PrimaryLayout from '../shared/components/layout';
import Box from '../shared/components/box';
import {responsiveScale} from '../shared/utilities/helper';
import {palette} from '../shared/theme/theme';
import Text from '../shared/components/text';

const Tab = createMaterialTopTabNavigator();

function TopTabLectureNavigation() {
  return (
    <PrimaryLayout title="All lectures">
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
        <Tab.Screen name="All coourse" component={AllCoursesScreen} />
        <Tab.Screen name="All past questions" component={AllCoursesScreen} />
      </Tab.Navigator>
    </PrimaryLayout>
  );
}

export default TopTabLectureNavigation;
