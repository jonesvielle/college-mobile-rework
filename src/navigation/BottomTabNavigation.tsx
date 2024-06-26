import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {type BottomTabNavigationType} from './types';
import Icon from 'react-native-vector-icons/Ionicons';
import Home from '../screens/home';
import {palette} from '../shared/theme/theme';
import Text from '../shared/components/text';
import Box from '../shared/components/box';
import {responsiveScale} from '../shared/utilities/helper';
import TopTabLectureNavigation from './TopTabLectureNavigation';
import Account from '../screens/account';
import TopTabFavouritesNavigation from './TopTabFavouritesNavigation';
import Downloads from '../screens/downloads';

const Tab = createBottomTabNavigator<BottomTabNavigationType>();
const TabList: Array<{
  name: string;
  icon: string;
  component: () => JSX.Element;
  isBig: boolean;
}> = [
  {
    name: 'Home',
    icon: 'home',
    componentName: Home,
    isBig: false,
  },

  {
    name: 'Favourites',
    icon: 'star',
    componentName: TopTabFavouritesNavigation,
    isBig: false,
  },
  {
    name: 'All lectures',
    icon: 'play-circle',
    componentName: TopTabLectureNavigation,
    isBig: true,
  },

  {
    name: 'Downloads',
    icon: 'download',
    componentName: Downloads,
    isBig: false,
  },
  {
    name: 'Accounts',
    icon: 'person-circle',
    componentName: Account,
    isBig: false,
  },
];

const BottomTabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {backgroundColor: palette.white},
      }}>
      {TabList.map((item, index) => (
        <Tab.Screen
          key={index}
          name={item.name}
          component={item.componentName}
          options={{
            tabBarActiveTintColor: palette.red,
            tabBarLabel: item.name,
            tabBarIcon: ({color, size, focused}) => {
              if (item.isBig) {
                return (
                  <Box
                    borderWidth={responsiveScale(0.5)}
                    borderTopLeftRadius={responsiveScale(10)}
                    borderRadius={responsiveScale(10)}
                    borderColor={
                      focused ? 'collegeRed' : 'secondaryLightBackground'
                    }
                    justifyContent="center"
                    alignItems="center"
                    backgroundColor="white"
                    paddingHorizontal="l"
                    height={responsiveScale(30)}
                    style={{
                      shadowColor: focused
                        ? palette.red
                        : palette.secondaryLightBackground,
                      shadowOffset: {
                        width: 0,
                        height: 8,
                      },
                      shadowOpacity: 0.44,
                      shadowRadius: 10.32,

                      elevation: 16,
                    }}>
                    {focused ? (
                      <Icon name={item.icon} size={size} color={color} />
                    ) : (
                      <Icon
                        name={item.icon + '-outline'}
                        size={size}
                        color={color}
                      />
                    )}
                  </Box>
                );
              }
              return focused ? (
                <Icon name={item.icon} size={size} color={color} />
              ) : (
                <Icon name={item.icon + '-outline'} size={size} color={color} />
              );
            },
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;
