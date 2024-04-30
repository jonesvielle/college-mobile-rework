import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {responsiveScale} from '../shared/utilities/helper';
import AllCoursesScreen from '../screens/allCoursesScreen';
import AllPastQuestions from '../screens/allPastQuestions';
import {palette} from '../shared/theme/theme';
import {type StyleProp, type ViewStyle} from 'react-native';
import CoursesScreenLecturesComponent from '../shared/components/coursesScreenLecturesComponent';
import CoursesScreenNoteComponent from '../shared/components/coursesScreenNoteComponent';
import CourseScreenQA from '../shared/components/courseScreenQa';

interface TopTabCourseScreenNavigationType {
  navigatorStyle: StyleProp<ViewStyle>;
  handleSelectCourse: (value: string) => void;
}

const Tab = createMaterialTopTabNavigator();

const TopTabCourseScreenNavigation = ({
  navigatorStyle,
  handleSelectCourse,
}: TopTabCourseScreenNavigationType) => {
  return (
    <Tab.Navigator
      hitSlop={-4}
      screenOptions={{
        tabBarStyle: {
          shadowOffset: {width: 0, height: 0},
          shadowOpacity: 0,
          elevation: 0,
        },
        tabBarActiveTintColor: palette.red,
        tabBarInactiveTintColor: palette.secondaryLightGrey,
        tabBarAndroidRipple: {radius: 0},
        tabBarIndicatorStyle: {
          borderBottomColor: palette.red,
          borderBottomWidth: responsiveScale(1),
        },
      }}
      style={navigatorStyle}>
      <Tab.Screen
        name="Lectures"
        initialParams={{handleSelectCourse}}
        component={CoursesScreenLecturesComponent}
      />
      <Tab.Screen name="Notes" component={CoursesScreenNoteComponent} />
      <Tab.Screen name="Q&A" component={CourseScreenQA} />
    </Tab.Navigator>
  );
};

export default TopTabCourseScreenNavigation;
