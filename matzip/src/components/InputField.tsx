import { View, Text, TextInputProps, StyleSheet } from 'react-native';
import React, { Ref } from 'react';
import { TextInput } from 'react-native-gesture-handler';
import { colors } from '@/constants/colors';

interface InputField extends TextInputProps {
  errorMessage?: string;
  touched?: boolean;
  ref?: Ref<TextInput>;
}

const InputField = ({ errorMessage, touched, ref, ...props }: InputField) => {
  return (
    <View>
      <TextInput
        ref={ref}
        style={[
          styles.input,
          touched && Boolean(errorMessage) && styles.inputError,
        ]}
        {...props}
      />
      {touched && Boolean(errorMessage) && (
        <Text style={styles.errorMessage}>{errorMessage}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: colors.GRAY_200,
    justifyContent: 'center',
    height: 50,
    paddingHorizontal: 10,
    fontSize: 16,
    color: colors.BLACK,
  },

  inputError: {
    borderWidth: 1,
    borderColor: colors.RED_300,
  },

  errorMessage: {
    color: colors.RED_500,
    fontSize: 12,
    paddingTop: 5,
  },
});

export default InputField;
