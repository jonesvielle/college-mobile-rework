import * as React from 'react';
import {Pressable} from 'react-native';
import Box from './box';
import {responsiveScale} from '../utilities/helper';
import Text from './text';
import Icon from 'react-native-vector-icons/Ionicons';

interface FilterSelectInputProps {
  data: string[];
  getSelectedValue: (value: string) => void;
  placeholder: string;
}

const FilterSelectInput = ({
  data = [],
  getSelectedValue,
  placeholder = 'Select',
}: FilterSelectInputProps) => {
  const [showList, setShowList] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState<string>();
  return (
    <Box zIndex={10}>
      <Pressable
        onPress={() => {
          if (showList) {
            setShowList(false);
          } else {
            setShowList(true);
          }
        }}>
        <Box
          paddingHorizontal={'s'}
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          borderColor="secondaryLightBackground"
          borderRadius={responsiveScale(10)}
          borderWidth={responsiveScale(0.5)}
          width={responsiveScale(30)}>
          <Text color="secondaryLightGrey">{selectedValue ?? 'Select'}</Text>
          <Icon color="secondaryLightGrey" name="chevron-down-outline" />
        </Box>
      </Pressable>
      {showList ? (
        <Box
          zIndex={10}
          elevation={10}
          position="absolute"
          backgroundColor="white"
          width={responsiveScale(30)}
          marginTop="l"
          borderWidth={responsiveScale(0.4)}
          borderColor="secondaryLightGrey"
          borderRadius={responsiveScale(0)}>
          {data.map((value, index) => (
            <>
              <Pressable
                key={index}
                onPress={() => {
                  getSelectedValue(value);
                  setSelectedValue(value);
                  setShowList(false);
                }}>
                <Text paddingHorizontal={'s'} color="secondaryLightGrey">
                  {value}
                </Text>
              </Pressable>
              {index === data.length - 1 ? null : (
                <Box
                  borderWidth={responsiveScale(0.1)}
                  marginVertical="xxs"
                  borderColor="secondaryLightGrey"
                />
              )}
            </>
          ))}
        </Box>
      ) : null}
    </Box>
  );
};

export default FilterSelectInput;
