import { Text, StyleSheet, Pressable } from 'react-native';
import React from 'react';
import { colors } from '@/constants/colors';
import { PressableProps } from 'react-native';

interface CustomButtonProps extends PressableProps {
  label: string;
  variant?: 'filled' | 'outlined';
  size?: 'large' | 'small';
}

const CustomButton = ({
  label,
  variant = 'filled',
  size = 'large',
  ...props
}: CustomButtonProps) => {
  return (
    <Pressable
      style={pressed => [
        styles.container,
        styles[variant],
        styles[size],
        pressed && styles.pressed,
      ]}
      {...props}
    >
      <Text style={styles[`${variant}Text`]}>{label}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  filled: {
    backgroundColor: colors.PINK_700,
    borderColor: colors.WHITE,
  },
  outlined: {
    backgroundColor: colors.WHITE,
    borderColor: colors.PINK_700,
    borderWidth: 1,
  },
  filledText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.WHITE,
  },
  outlinedText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.PINK_700,
  },
  large: {
    width: '100%',
    height: 45,
  },
  small: {
    paddingHorizontal: 10,
    height: 35,
  },
  pressed: {
    opacity: 0.8,
  },
});

export default CustomButton;
