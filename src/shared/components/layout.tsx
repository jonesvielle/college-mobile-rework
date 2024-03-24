import * as React from 'react';
import Box from './box';
import {Platform, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import {responsiveScale} from '../utilities/helper';
import MainButton from './mainButton';

interface LayoutProps {
  bottomButtonText: string;
  showBottomButton: boolean;
}

const PrimaryLayout = ({
  bottomButtonText = 'CONTINUE',
  children,
  showBottomButton = false,
}: React.PropsWithChildren<LayoutProps>) => {
  const navigation = useNavigation();
  return (
    <Box
      // padding="m"
      justifyContent="space-between"
      backgroundColor="white"
      flex={1}>
      <Box flex={1}>
        <Box
          flexDirection="row"
          marginTop={Platform.OS === 'ios' ? 'l' : 'none'}>
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
        </Box>
        {children}
      </Box>

      {showBottomButton ? (
        <Box paddingHorizontal="s" marginBottom="l">
          <MainButton
            padding="m"
            textProp={{color: 'white', fontWeight: 'bold', textAlign: 'center'}}
            borderRadius={responsiveScale(1)}
            label={bottomButtonText}
            backgroundColor="collegeRed"
          />
        </Box>
      ) : null}
    </Box>
  );
};

export default PrimaryLayout;
