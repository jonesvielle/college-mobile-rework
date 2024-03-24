import * as React from 'react';
import {
  type GestureResponderEvent,
  type NativeSyntheticEvent,
  Pressable,
  type StyleProp,
  TextInput,
  type TextInputFocusEventData,
  type TextStyle,
  type ViewStyle,
} from 'react-native';
import Box from './box';
import Text from './text';
import {responsiveFont, responsiveScale} from '../utilities/helper';
import {palette} from '../theme/theme';
import Icon from 'react-native-vector-icons/Ionicons';

interface MainSelectInputProps {
  inputStyle: StyleProp<TextStyle>;
  placeholder: string;
  label: string;
  labelStyle: StyleProp<TextStyle>;
  multiline: boolean;
  isNumeric: boolean;
  wrapperStyle: StyleProp<ViewStyle>;
  isActive: boolean;
  onFocus:
    | ((e: NativeSyntheticEvent<TextInputFocusEventData>) => void)
    | undefined;
  errorMessage: string;
  onChangeText: ((text: string) => void) | undefined;
  isPassword: boolean;
  onPress: ((event: GestureResponderEvent) => void) | null | undefined;
}

const MainSelectInput = ({
  inputStyle,
  placeholder,
  label,
  labelStyle,
  multiline,
  isNumeric,
  wrapperStyle,
  errorMessage = '',
  onPress,
}: MainSelectInputProps) => {
  return (
    <Box style={wrapperStyle}>
      <Text style={labelStyle}>{label}</Text>
      <Pressable onPress={onPress}>
        <Box
          marginTop="s"
          borderWidth={responsiveScale(0.3)}
          borderColor={'secondaryGrey'}
          flexDirection="row"
          justifyContent="space-between"
          borderRadius={responsiveScale(2)}
          alignItems="center"
          backgroundColor="white">
          <TextInput
            editable={false}
            style={{
              // backgroundColor: 'red',
              width: '84%',
              padding: responsiveScale(5),
            }}
            placeholder={placeholder}
            multiline={multiline}
            keyboardType={isNumeric ? 'numeric' : 'default'}
          />

          <Box width={'16%'} flexDirection="row" justifyContent="center">
            <Icon
              color={palette.secondaryGrey}
              size={responsiveScale(6)}
              name="caret-down"
            />
          </Box>
        </Box>
      </Pressable>
      {errorMessage.length > 0 && (
        <>
          <Text fontSize={responsiveFont(13)} marginTop="s" color="collegeRed">
            {errorMessage}
          </Text>
          <Box marginTop="xxs" backgroundColor="collegeRed" padding="xxxxs" />
        </>
      )}
    </Box>
  );
};

export default MainSelectInput;
