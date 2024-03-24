import * as React from 'react';
import {useState} from 'react';
import {
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

interface MainTextInputProps {
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
}

const MainTextInput = ({
  placeholder,
  label,
  labelStyle,
  multiline,
  isNumeric,
  wrapperStyle,
  isActive,
  onFocus,
  errorMessage = '',
  onChangeText,
  isPassword,
}: MainTextInputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Box style={wrapperStyle}>
      <Text marginBottom="s" style={labelStyle}>
        {label}
      </Text>
      <Box
        // marginTop="s"
        borderWidth={responsiveScale(0.3)}
        borderColor={isActive ? 'collegeRed' : 'secondaryGrey'}
        flexDirection="row"
        justifyContent="space-between"
        borderRadius={responsiveScale(2)}
        alignItems="center"
        backgroundColor="white"
        style={
          isActive
            ? {
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 3,
                },
                shadowOpacity: 0.29,
                shadowRadius: 4.65,

                elevation: 7,
              }
            : null
        }>
        <TextInput
          secureTextEntry={isPassword ? !showPassword : false}
          onChangeText={onChangeText}
          onFocus={onFocus}
          style={{
            // backgroundColor: 'red',
            width: isPassword ? '84%' : '100%',
            padding: responsiveScale(5),
          }}
          placeholder={placeholder}
          multiline={multiline}
          keyboardType={isNumeric ? 'numeric' : 'default'}
        />

        {isPassword ? (
          <Box width={'16%'} flexDirection="row" justifyContent="center">
            <Pressable
              onPress={() => {
                showPassword ? setShowPassword(false) : setShowPassword(true);
              }}>
              <Text>Show</Text>
            </Pressable>
          </Box>
        ) : null}
      </Box>
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

export default MainTextInput;
