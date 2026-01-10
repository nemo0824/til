import { StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import InputField from '@/components/InputField';
import CustomButton from '@/components/CustomButton';

const SignUpScreen = () => {
  const [value, setValue] = useState({
    email: '',
    password: '',
    passwordConfirm: '',
  });

  const [touched, setTouched] = useState({
    email: false,
    password: false,
    passwordConfirm: false,
  });

  const [error, setError] = useState({
    email: false,
    password: false,
    passwordConfirm: false,
  });

  const handleValueChange = (name: string, text: string) => {
    setValue(prev => ({ ...prev, [name]: text }));
  };

  const handleBlur = (name: string) => {
    setTouched(prev => ({ ...prev, [name]: true }));
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <InputField
          placeholder="이메일"
          onChangeText={text => handleValueChange('email', text)}
          value={value.email}
          touched={touched.email}
          onBlur={() => handleBlur('email')}
        />
        <InputField
          placeholder="비밀번호"
          onChangeText={text => handleValueChange('password', text)}
          value={value.password}
          touched={touched.password}
          secureTextEntry
          textContentType="oneTimeCode"
          onBlur={() => handleBlur('password')}
        />
        <InputField
          placeholder="비밀번호 확인"
          onChangeText={text => handleValueChange('passwordConfirm', text)}
          value={value.passwordConfirm}
          secureTextEntry
          onBlur={() => handleBlur('passwordConfirm')}
          touched={touched.passwordConfirm}
        />
      </View>
      <CustomButton label="회원가입" variant="filled" size="large" />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 30,
  },
  inputContainer: {
    gap: 20,
    marginBottom: 30,
  },
});

export default SignUpScreen;
