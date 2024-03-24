import {TextInput} from 'react-native-gesture-handler';
import {responsiveScale} from '../utilities/helper';
import Box from './box';
import Icon from 'react-native-vector-icons/Ionicons';
import {palette} from '../theme/theme';
import React, {type Dispatch, type SetStateAction} from 'react';
import {type StringVoidReturnType} from '../utilities/types';

interface SearchInputProps {
  data: string[];
  setFilteredData: Dispatch<SetStateAction<string[]>>;
}

const SearchInput = ({data, setFilteredData}: SearchInputProps) => {
  const handleFilteredData: StringVoidReturnType = (text: string) => {
    const filteredSearch = data.filter(item =>
      item.toUpperCase().includes(text.toUpperCase()),
    );
    setFilteredData(filteredSearch);
  };
  return (
    <Box
      borderColor="secondaryGrey"
      marginVertical="m"
      paddingVertical="xxxxs"
      borderRadius={responsiveScale(10)}
      paddingHorizontal="s"
      borderWidth={responsiveScale(0.2)}
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between">
      <TextInput
        onChangeText={handleFilteredData}
        style={{
          width: '90%',
          color: palette.secondaryGrey,
          height: responsiveScale(15),
        }}
        placeholder="Search..."
      />
      <Icon name="search" />
    </Box>
  );
};

export default SearchInput;
