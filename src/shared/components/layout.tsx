import * as React from 'react';
import Box from './box';
import {KeyboardAvoidingView, Platform, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import {height, responsiveFont, responsiveScale} from '../utilities/helper';
import MainButton from './mainButton';
import {Image} from 'react-native-animatable';
import SearchInput from './searchInput';
import {continuesLearning} from '../../screens/home';
import {type CourseType} from '../types/courseTypes';
import {type RootStackNavigationProps} from '../../navigation/types';
import Text from './text';

interface LayoutProps {
  bottomButtonText: string;
  showBottomButton: boolean;
  bottomButtonPressed: () => void;
  hideBackButton: boolean;
  shouldPushButton: boolean;
  headerType: 'inner' | 'landing';
  sendSearchData: (courseData: CourseType[]) => void;
  hasSearchBar: boolean;
  title: string;
}

const PrimaryLayout = ({
  bottomButtonText = 'CONTINUE',
  children,
  showBottomButton = false,
  hideBackButton = false,
  bottomButtonPressed,
  shouldPushButton = false,
  headerType = 'landing',
  sendSearchData,
  hasSearchBar = false,
  title = '',
}: React.PropsWithChildren<LayoutProps>) => {
  const navigation = useNavigation<RootStackNavigationProps>();
  // const [filteredData, setFilteredData] = React.useState<CourseType[]>();
  const handleFilterSearch = (e: string) => {
    // console.log(e);
    const filteredValue = continuesLearning.filter(item =>
      item.title.toLowerCase().includes(e.toLowerCase()),
    );
    // setFilteredData(filteredValue);
    // console.log(filteredValue);
    sendSearchData(filteredValue);
  };
  // console.log('height: ' + -1 * Math.round(height));
  return (
    <KeyboardAvoidingView
      behavior={shouldPushButton ? 'padding' : 'height'}
      keyboardVerticalOffset={-100}
      style={{flex: 1}}>
      <Box
        // padding="m"
        justifyContent="space-between"
        backgroundColor="white"
        flex={1}>
        <Box flex={1}>
          {headerType === 'landing' ? (
            <Box
              flexDirection="row"
              justifyContent="space-between"
              alignItems="center"
              marginTop={Platform.OS === 'ios' ? 'xxl' : 'l'}
              marginHorizontal="m">
              <Image
                style={{
                  width: responsiveScale(15),
                  height: responsiveScale(15),
                  marginLeft: responsiveScale(2),
                }}
                source={require('../assets/images/logo.png')}
              />
              <Text
                color="darkGrey"
                fontWeight="bold"
                fontSize={responsiveFont(18)}>
                {title}
              </Text>
              <Box flexDirection="row">
                {hasSearchBar ? (
                  <Pressable
                    onPress={() => {
                      navigation.navigate('searchScreen');
                    }}>
                    <Icon
                      color={'black'}
                      size={responsiveScale(9)}
                      name="search-outline"
                      style={{marginRight: responsiveScale(10)}}
                    />
                  </Pressable>
                ) : null}
                <Icon
                  color={'black'}
                  size={responsiveScale(9)}
                  name="notifications-outline"
                />
              </Box>
            </Box>
          ) : (
            <Box
              alignItems="center"
              justifyContent="space-between"
              flexDirection="row"
              marginTop={Platform.OS === 'ios' ? 'xxl' : 'l'}
              marginHorizontal="m">
              {hideBackButton ? null : (
                <Pressable
                  onPress={() => {
                    navigation.goBack();
                  }}>
                  <Icon
                    color={'black'}
                    size={responsiveScale(12)}
                    name="chevron-back-outline"
                  />
                </Pressable>
              )}
              <Text
                color="darkGrey"
                fontWeight="bold"
                fontSize={responsiveFont(18)}>
                {title}
              </Text>
              {hasSearchBar ? (
                <Box width={'90%'}>
                  <SearchInput
                    hasCustomFilter
                    data={continuesLearning}
                    customFilter={handleFilterSearch}
                  />
                </Box>
              ) : null}
            </Box>
          )}

          {children}
        </Box>

        {showBottomButton ? (
          <Box paddingHorizontal="s" marginBottom="l">
            <MainButton
              padding="m"
              textProp={{
                color: 'white',
                fontWeight: 'bold',
                textAlign: 'center',
              }}
              borderRadius={responsiveScale(1)}
              label={bottomButtonText}
              backgroundColor="collegeRed"
              onPress={bottomButtonPressed}
            />
          </Box>
        ) : null}
      </Box>
    </KeyboardAvoidingView>
  );
};

export default PrimaryLayout;
