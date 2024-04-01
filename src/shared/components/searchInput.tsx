import {TextInput} from 'react-native-gesture-handler';
import {responsiveScale} from '../utilities/helper';
import Box from './box';
import Icon from 'react-native-vector-icons/Ionicons';
import {palette} from '../theme/theme';
import React, {useState, type Dispatch, type SetStateAction} from 'react';
import {type StringVoidReturnType} from '../utilities/types';
import {Pressable} from 'react-native';

interface SearchInputProps {
  data: string[];
  setFilteredData: Dispatch<SetStateAction<string[]>>;
  hasCustomFilter: boolean;
  customFilter: (e: string) => void;
}

const SearchInput = ({
  data,
  setFilteredData,
  hasCustomFilter,
  customFilter,
}: SearchInputProps) => {
  const [searchValue, setSearchValue] = useState<string | null>('');
  const handleFilteredData: StringVoidReturnType = (text: string) => {
    // console.log(text);
    setSearchValue(text);
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
        value={searchValue}
        onChangeText={
          hasCustomFilter
            ? e => {
                setSearchValue(e);
                customFilter(e);
              }
            : handleFilteredData
        }
        style={{
          width: '90%',
          color: palette.secondaryGrey,
          height: responsiveScale(15),
        }}
        placeholder="Search..."
      />
      <Pressable
        onPress={() => {
          setSearchValue('');
        }}>
        <Icon size={responsiveScale(8)} name="close-outline" />
      </Pressable>
    </Box>
  );
};

export default SearchInput;
