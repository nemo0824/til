import { View, Text, TextInputProps, StyleSheet } from 'react-native';
import React from 'react';
import { TextInput } from 'react-native-gesture-handler';
import { colors } from '@/constants/colors';

interface InputField extends TextInputProps {
  errorMessage?: string;
}

const InputField = ({ errorMessage, ...props }: InputField) => {
  return (
    <View>
      <TextInput
        {...props}
        style={[styles.input, Boolean(errorMessage) && styles.inputError]}
      />
      {Boolean(errorMessage) && (
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
